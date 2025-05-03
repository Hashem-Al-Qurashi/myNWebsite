import type { Express } from "express";
import { createServer } from "http";

export async function registerRoutes(app: Express) {
  const server = createServer(app);

  // Basic health check route
  app.get('/api/health', (_, res) => {
    res.json({ status: 'ok' });
  });

  return server;
}