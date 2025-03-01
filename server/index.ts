import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { storage } from "./storage";
import { setupVite, serveStatic, log } from "./vite";

async function main() {
  console.log("Starting server initialization...");

  const app = express();
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  // Initialize storage
  console.log("Initializing storage...");
  if (!storage) {
    throw new Error("Failed to initialize storage");
  }

  app.use((req, res, next) => {
    const start = Date.now();
    const path = req.path;
    let capturedJsonResponse: Record<string, any> | undefined = undefined;

    const originalResJson = res.json;
    res.json = function (bodyJson, ...args) {
      capturedJsonResponse = bodyJson;
      return originalResJson.apply(res, [bodyJson, ...args]);
    };

    res.on("finish", () => {
      const duration = Date.now() - start;
      if (path.startsWith("/api")) {
        let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
        if (capturedJsonResponse) {
          logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
        }

        if (logLine.length > 80) {
          logLine = logLine.slice(0, 79) + "…";
        }

        console.log(logLine);
      }
    });

    next();
  });

  try {
    console.log("Setting up routes...");
    const server = await registerRoutes(app);

    // importantly only setup vite in development and after
    // setting up all the other routes so the catch-all route
    // doesn't interfere with the other routes
    if (process.env.NODE_ENV !== "production") {
      console.log("Setting up Vite development server...");
      await setupVite(app, server);
    } else {
      console.log("Setting up static file serving for production...");
      serveStatic(app);
    }

    const port = 5000; // ALWAYS serve the app on port 5000
    app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
      const status = err.status || err.statusCode || 500;
      const message = err.message || "Internal Server Error";
      console.error("Server error:", err);
      res.status(status).json({ message });
    });

    console.log(`Attempting to start server on port ${port}...`);
    server.listen({
      port,
      host: "0.0.0.0",
    }, () => {
      console.log(`🚀 Server ready at http://0.0.0.0:${port}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
}

main().catch((error) => {
  console.error("Unhandled error during server startup:", error);
  process.exit(1);
});