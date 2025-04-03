import { projects, events, type Project, type Event, type InsertProject, type InsertEvent } from "@shared/schema";

export interface IStorage {
  getProjects(): Promise<Project[]>;
  getProject(id: number): Promise<Project | undefined>;
  createProject(project: InsertProject): Promise<Project>;
  getEvents(): Promise<Event[]>;
  getEvent(id: number): Promise<Event | undefined>;
  createEvent(event: InsertEvent): Promise<Event>;
}

export class MemStorage implements IStorage {
  private projects: Map<number, Project>;
  private events: Map<number, Event>;
  private currentProjectId: number;
  private currentEventId: number;

  constructor() {
    this.projects = new Map();
    this.events = new Map();
    this.currentProjectId = 1;
    this.currentEventId = 1;

    // Updated example projects
    const exampleProjects = [
      {
        title: "Effect of FED on the market",
        description: "Analyzing the impact of FED's speeches on the Stock Market using Financial BERT",
        githubUrl: "https://github.com/quantfin-sfpolimi/cb-impact-nlps",
        pdfUrl: "",
        imageUrl: "",
        isComingSoon: false
      },
      {
        title: "Clustering in the S&P 500",
        description: "A Comprehensive Study using Time Series Analysis and Clustering Techniques",
        githubUrl: "https://github.com/quantfin-sfpolimi/dtwclustering_sp500",
        pdfUrl: "",
        imageUrl: "",
        isComingSoon: false
      },
      {
        title: "Correlation-based prediction in the NASDAQ",
        description: "Relating Correlations and Granger Causality-driven Models for LSTM-based Stock Forecasting",
        githubUrl: "https://github.com/quantfin-sfpolimi/nasdaq_causal-analysis_lstm",
        pdfUrl: "",
        imageUrl: "",
        isComingSoon: false
      },
      {
        title: "RL In Trading",
        description: "Advanced reinforcement learning strategies for algorithmic trading in financial markets",
        githubUrl: "",
        pdfUrl: "",
        imageUrl: "",
        isComingSoon: true
      }
    ];


    exampleProjects.forEach(project => {
      const id = this.currentProjectId++;
      this.projects.set(id, {
        ...project,
        id,
        createdAt: new Date(),
        isComingSoon: project.isComingSoon ?? false,
      });
    });

    // Add example events
    const exampleEvents = [
      {
        title: "BlackSwan was born",
        description: "Our quantitative finance club was officially founded.",
        date: "October 2024",
        imageUrl: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f",
        isComingSoon: false
      },
      {
        title: "Talk & Collaboration",
        description: "Collaboration with a partner club on algorithmic trading.",
        date: "May 2025",
        imageUrl: "https://images.unsplash.com/photo-1639322537228-f710d846310a",
        isComingSoon: true
      }
    ];

    exampleEvents.forEach(event => {
      const id = this.currentEventId++;
      this.events.set(id, {
        ...event,
        id,
        createdAt: new Date(),
        isComingSoon: event.isComingSoon ?? false,
      });
    });
  }

  async getProjects(): Promise<Project[]> {
    return Array.from(this.projects.values());
  }

  async getProject(id: number): Promise<Project | undefined> {
    return this.projects.get(id);
  }

  async createProject(insertProject: InsertProject): Promise<Project> {
    const id = this.currentProjectId++;
    const project: Project = {
      ...insertProject,
      id,
      createdAt: new Date(),
      isComingSoon: insertProject.isComingSoon ?? false,
    };
    this.projects.set(id, project);
    return project;
  }

  async getEvents(): Promise<Event[]> {
    return Array.from(this.events.values());
  }

  async getEvent(id: number): Promise<Event | undefined> {
    return this.events.get(id);
  }

  async createEvent(insertEvent: InsertEvent): Promise<Event> {
    const id = this.currentEventId++;
    const event: Event = {
      ...insertEvent,
      id,
      createdAt: new Date(),
      isComingSoon: insertEvent.isComingSoon ?? false,
    };
    this.events.set(id, event);
    return event;
  }
}

export const storage = new MemStorage();