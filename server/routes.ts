import type { Express } from "express";
import { createServer } from "http";
import { storage } from "./storage";
import { insertCourseSchema, insertLessonSchema, insertProgressSchema } from "@shared/schema";

export async function registerRoutes(app: Express) {
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
