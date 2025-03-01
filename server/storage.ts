import { users, type User, type InsertUser } from "@shared/schema";
import { courses, lessons, progress, type Course, type Lesson, type Progress, type InsertCourse, type InsertLesson, type InsertProgress } from "@shared/schema";

// modify the interface with any CRUD methods
// you might need
export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  getAllCourses(): Promise<Course[]>;
  getCourse(id: number): Promise<Course | undefined>;
  getLessonsByCourse(courseId: number): Promise<Lesson[]>;
  getProgress(userId: number, courseId: number): Promise<Progress | undefined>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private courses: Map<number, Course>;
  private lessons: Map<number, Lesson>;
  private progress: Map<string, Progress>;
  currentId: number;

  constructor() {
    this.users = new Map();
    this.courses = new Map();
    this.lessons = new Map();
    this.progress = new Map();
    this.currentId = 1;

    // Add some mock data
    const mockCourse: Course = {
      id: 1,
      title: "Advanced Web Development",
      description: "Master modern web development techniques and best practices",
      thumbnailUrl: "https://example.com/thumbnail.jpg",
      duration: 120,
      difficulty: "Intermediate"
    };
    this.courses.set(1, mockCourse);

    const mockLesson: Lesson = {
      id: 1,
      courseId: 1,
      title: "Introduction to Modern Web Development",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      order: 1
    };
    this.lessons.set(1, mockLesson);
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getAllCourses(): Promise<Course[]> {
    return Array.from(this.courses.values());
  }

  async getCourse(id: number): Promise<Course | undefined> {
    return this.courses.get(id);
  }

  async getLessonsByCourse(courseId: number): Promise<Lesson[]> {
    return Array.from(this.lessons.values()).filter(
      (lesson) => lesson.courseId === courseId
    );
  }

  async getProgress(userId: number, courseId: number): Promise<Progress | undefined> {
    return this.progress.get(`${userId}-${courseId}`);
  }
}

export const storage = new MemStorage();