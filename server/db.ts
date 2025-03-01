
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as fs from 'fs';
import * as path from 'path';

export const runMigration = async () => {
  try {
    // Use a default local database URL if DATABASE_URL is not provided
    const dbUrl = process.env.DATABASE_URL || 'postgres://postgres:postgres@localhost:5432/postgres';
    
    const migrationClient = postgres(dbUrl, { max: 1 });
    const db = drizzle(migrationClient);
    
    console.log("Running database migrations...");
    
    try {
      // Read migration file
      const migrationFilePath = path.join(process.cwd(), 'migrations', '0000_initial_schema.sql');
      
      if (fs.existsSync(migrationFilePath)) {
        const migrationSql = fs.readFileSync(migrationFilePath, 'utf8');
        
        // Execute the SQL directly since we have a simple setup
        await migrationClient.unsafe(migrationSql);
        
        console.log("Migrations completed successfully");
      } else {
        console.log("Migration file not found, skipping migrations");
      }
    } catch (error) {
      console.error("Migration failed, but continuing:", error);
      // Don't throw here, let the app continue
    } finally {
      await migrationClient.end();
    }
  } catch (error) {
    console.error("Database connection failed:", error);
    // Don't throw here, let the app continue with in-memory storage
  }
};
