
import mongoose from 'mongoose';
import { users, type User, type InsertUser } from "@shared/schema";
import bcrypt from 'bcryptjs';

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/learning-platform')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Define user schema
const userSchema = new mongoose.Schema({
  id: Number,
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now }
});

// Define course schema
const courseSchema = new mongoose.Schema({
  id: Number,
  title: String,
  description: String,
  imageUrl: String,
  createdAt: { type: Date, default: Date.now }
});

// Define lesson schema
const lessonSchema = new mongoose.Schema({
  id: Number,
  courseId: Number,
  title: String,
  content: String,
  order: Number,
  createdAt: { type: Date, default: Date.now }
});

// Define progress schema
const progressSchema = new mongoose.Schema({
  userId: Number,
  courseId: Number,
  completed: { type: Boolean, default: false },
  lastLesson: Number,
  createdAt: { type: Date, default: Date.now }
});

// Create models
const UserModel = mongoose.model('User', userSchema);
const CourseModel = mongoose.model('Course', courseSchema);
const LessonModel = mongoose.model('Lesson', lessonSchema);
const ProgressModel = mongoose.model('Progress', progressSchema);

// modify the interface with any CRUD methods
// you might need
export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  getAllCourses(): Promise<any[]>;
  getCourse(id: number): Promise<any | undefined>;
  getLessonsByCourse(courseId: number): Promise<any[]>;
  getProgress(userId: number, courseId: number): Promise<any | undefined>;
}

export class MongoStorage implements IStorage {
  private currentId: number;

  constructor() {
    this.currentId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    const user = await UserModel.findOne({ id });
    return user ? user.toObject() : undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const user = await UserModel.findOne({ username });
    return user ? user.toObject() : undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    // Hash the password
    const hashedPassword = await bcrypt.hash(insertUser.password, 10);
    
    // Get the next ID
    const lastUser = await UserModel.findOne().sort({ id: -1 });
    const nextId = lastUser ? lastUser.id + 1 : 1;
    
    const user = new UserModel({
      ...insertUser,
      password: hashedPassword,
      id: nextId
    });
    
    await user.save();
    return user.toObject();
  }

  async getAllCourses(): Promise<any[]> {
    return CourseModel.find().sort({ id: 1 });
  }

  async getCourse(id: number): Promise<any | undefined> {
    const course = await CourseModel.findOne({ id });
    return course ? course.toObject() : undefined;
  }

  async getLessonsByCourse(courseId: number): Promise<any[]> {
    return LessonModel.find({ courseId }).sort({ order: 1 });
  }

  async getProgress(userId: number, courseId: number): Promise<any | undefined> {
    const progress = await ProgressModel.findOne({ userId, courseId });
    return progress ? progress.toObject() : undefined;
  }
}

export const storage = new MongoStorage();
