
import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";
import * as fs from 'fs';
import * as path from 'path';

export const runMigration = async () => {
  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL environment variable is required");
  }
  
  const migrationClient = postgres(process.env.DATABASE_URL, { max: 1 });
  const db = drizzle(migrationClient);
  
  console.log("Running database migrations...");
  
  try {
    // Read migration file
    const migrationSql = fs.readFileSync(
      path.join(process.cwd(), 'migrations', '0000_initial_schema.sql'),
      'utf8'
    );
    
    // Execute the SQL directly since we have a simple setup
    await migrationClient.unsafe(migrationSql);
    
    console.log("Migrations completed successfully");
  } catch (error) {
    console.error("Migration failed:", error);
    throw error;
  } finally {
    await migrationClient.end();
  }
};
