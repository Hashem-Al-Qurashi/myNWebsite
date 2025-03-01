
-- Create courses table
CREATE TABLE IF NOT EXISTS "courses" (
  "id" SERIAL PRIMARY KEY,
  "title" TEXT NOT NULL,
  "description" TEXT NOT NULL,
  "thumbnail_url" TEXT NOT NULL,
  "duration" INTEGER NOT NULL,
  "difficulty" TEXT NOT NULL
);

-- Create lessons table
CREATE TABLE IF NOT EXISTS "lessons" (
  "id" SERIAL PRIMARY KEY,
  "course_id" INTEGER NOT NULL,
  "title" TEXT NOT NULL,
  "video_url" TEXT NOT NULL,
  "order" INTEGER NOT NULL
);

-- Create progress table
CREATE TABLE IF NOT EXISTS "progress" (
  "id" SERIAL PRIMARY KEY,
  "user_id" INTEGER NOT NULL,
  "course_id" INTEGER NOT NULL,
  "completed" BOOLEAN DEFAULT FALSE,
  "last_accessed" TIMESTAMP NOT NULL
);

-- Create users table
CREATE TABLE IF NOT EXISTS "users" (
  "id" SERIAL PRIMARY KEY,
  "username" VARCHAR(100) NOT NULL UNIQUE,
  "email" VARCHAR(255) NOT NULL UNIQUE,
  "password" VARCHAR(255) NOT NULL,
  "name" VARCHAR(255),
  "created_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
);
