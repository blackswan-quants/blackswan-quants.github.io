import type { Express } from "express";
import { createServer, type Server } from "http";
import { projectSchema, eventSchema } from "@shared/schema";
import { projects, events } from "../client/src/data/static-data";

export async function registerRoutes(app: Express): Promise<Server> {
  app.get("/api/projects", async (req, res) => {
    res.json(projects);
  });

  app.get("/api/projects/:id", async (req, res) => {
    const id = parseInt(req.params.id);
    const project = projects.find(p => p.id === id);
    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }
    res.json(project);
  });

  app.get("/api/events", async (req, res) => {
    res.json(events);
  });

  app.get("/api/events/:id", async (req, res) => {
    const id = parseInt(req.params.id);
    const event = events.find(e => e.id === id);
    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }
    res.json(event);
  });

  const httpServer = createServer(app);
  return httpServer;
}