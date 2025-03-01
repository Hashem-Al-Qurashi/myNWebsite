import { users, type User, type InsertUser, courses, progress, lessons } from "@shared/schema";
import { drizzle } from "drizzle-orm/postgres-js";
import { eq } from "drizzle-orm";
import postgres from "postgres";
import bcrypt from "bcryptjs";

// Interface for storage operations
export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  getUserByEmail(email: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  validateUser(email: string, password: string): Promise<User | null>;
  
  // Course methods
  getAllCourses(): Promise<any[]>;
  getCourse(id: number): Promise<any | undefined>;
  getLessonsByCourse(courseId: number): Promise<any[]>;
  getProgress(userId: number, courseId: number): Promise<any | undefined>;
}

export class PostgresStorage implements IStorage {
  private db: ReturnType<typeof drizzle>;
  
  constructor() {
    try {
      // Fallback to a local PostgreSQL URL for development if DATABASE_URL is not set
      const dbUrl = process.env.DATABASE_URL || 'postgres://postgres:postgres@localhost:5432/postgres';
      
      const queryClient = postgres(dbUrl, {
        max: 10, // Max connections
        idle_timeout: 20, // Seconds a connection can stay idle before being closed
        connect_timeout: 10, // Seconds to wait for a connection
      });
      
      this.db = drizzle(queryClient);
      console.log("PostgreSQL connection established successfully");
    } catch (error) {
      console.error("Failed to connect to PostgreSQL:", error);
      // Create a fallback in-memory database using any means
      throw new Error("Database connection failed, please check your DATABASE_URL");
    }
  }

  async getUser(id: number): Promise<User | undefined> {
    const result = await this.db.select().from(users).where(eq(users.id, id));
    return result[0];
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const result = await this.db.select().from(users).where(eq(users.username, username));
    return result[0];
  }

  async getUserByEmail(email: string): Promise<User | undefined> {
    const result = await this.db.select().from(users).where(eq(users.email, email));
    return result[0];
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    // Hash the password
    const hashedPassword = await bcrypt.hash(insertUser.password, 10);
    
    const result = await this.db.insert(users).values({
      ...insertUser,
      password: hashedPassword
    }).returning();
    
    return result[0];
  }

  async validateUser(email: string, password: string): Promise<User | null> {
    const user = await this.getUserByEmail(email);
    
    if (!user) {
      return null;
    }
    
    const isPasswordValid = await bcrypt.compare(password, user.password);
    
    if (!isPasswordValid) {
      return null;
    }
    
    return user;
  }

  // Course methods - placeholders for existing functionality
  async getAllCourses() {
    const result = await this.db.select().from(courses);
    return result;
  }

  async getCourse(id: number) {
    const result = await this.db.select().from(courses).where(eq(courses.id, id));
    return result[0];
  }

  async getLessonsByCourse(courseId: number) {
    const result = await this.db.select().from(lessons).where(eq(lessons.courseId, courseId));
    return result;
  }

  async getProgress(userId: number, courseId: number) {
    const result = await this.db.select().from(progress)
      .where(eq(progress.userId, userId))
      .where(eq(progress.courseId, courseId));
    return result[0];
  }
}

export const storage = new PostgresStorage();
