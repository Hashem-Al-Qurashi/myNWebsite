import type { Express } from "express";
import { createServer } from "http";
import { storage } from "./storage";
import { insertCourseSchema, insertLessonSchema, insertProgressSchema } from "@shared/schema";
import { authenticate, generateToken, AuthRequest } from "./auth";
import bcrypt from "bcryptjs";

export async function registerRoutes(app: Express) {
  // Authentication routes
  app.post("/api/auth/signup", async (req, res) => {
    try {
      const { username, password, email } = req.body;
      
      // Check if user already exists
      const existingUser = await storage.getUserByUsername(username);
      if (existingUser) {
        return res.status(400).json({ message: "Username already exists" });
      }
      
      // Create new user
      const user = await storage.createUser({ username, password, email });
      
      // Generate token
      const token = generateToken(user.id);
      
      res.status(201).json({ 
        message: "User created successfully",
        token,
        user: {
          id: user.id,
          username: user.username,
          email: user.email
        }
      });
    } catch (error) {
      res.status(500).json({ message: "Server error", error });
    }
  });
  
  app.post("/api/auth/login", async (req, res) => {
    try {
      const { username, password } = req.body;
      
      // Find user
      const user = await storage.getUserByUsername(username);
      if (!user) {
        return res.status(401).json({ message: "Invalid credentials" });
      }
      
      // Compare passwords
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(401).json({ message: "Invalid credentials" });
      }
      
      // Generate token
      const token = generateToken(user.id);
      
      res.json({ 
        message: "Login successful",
        token,
        user: {
          id: user.id,
          username: user.username,
          email: user.email
        }
      });
    } catch (error) {
      res.status(500).json({ message: "Server error", error });
    }
  });
  
  // Protected route example
  app.get("/api/user/profile", authenticate, (req: AuthRequest, res) => {
    res.json({ user: req.user });
  });

  // Course routes
  app.get("/api/courses", async (_req, res) => {
    const courses = await storage.getAllCourses();
    res.json(courses);
  });

  app.get("/api/courses/:id", async (req, res) => {
    const course = await storage.getCourse(parseInt(req.params.id));
    if (!course) {
      res.status(404).json({ message: "Course not found" });
      return;
    }
    res.json(course);
  });

  app.get("/api/courses/:id/lessons", async (req, res) => {
    const lessons = await storage.getLessonsByCourse(parseInt(req.params.id));
    res.json(lessons);
  });

  app.get("/api/progress/:userId/:courseId", async (req, res) => {
    const progress = await storage.getProgress(
      parseInt(req.params.userId),
      parseInt(req.params.courseId)
    );
    res.json(progress);
  });

  const httpServer = createServer(app);
  return httpServer;
}
