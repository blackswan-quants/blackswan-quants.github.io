import { Project, Event } from "@shared/schema";

// Static projects data
export const projects: Project[] = [
  {
    id: 1,
    title: "Effect of FED on the market",
    description: "Analyzing the impact of FED's speeches on the Stock Market using Financial BERT",
    githubUrl: "https://github.com/quantfin-sfpolimi/cb-impact-nlps",
    pdfUrl: "",
    imageUrl: "",
    isComingSoon: false,
    createdAt: new Date()
  },
  {
    id: 2,
    title: "Clustering in the S&P 500",
    description: "A Comprehensive Study using Time Series Analysis and Clustering Techniques",
    githubUrl: "https://github.com/quantfin-sfpolimi/dtwclustering_sp500",
    pdfUrl: "",
    imageUrl: "",
    isComingSoon: false,
    createdAt: new Date()
  },
  {
    id: 3,
    title: "Correlation-based prediction in the NASDAQ",
    description: "Relating Correlations and Granger Causality-driven Models for LSTM-based Stock Forecasting",
    githubUrl: "https://github.com/quantfin-sfpolimi/nasdaq_causal-analysis_lstm",
    pdfUrl: "",
    imageUrl: "",
    isComingSoon: false,
    createdAt: new Date()
  },
  {
    id: 4,
    title: "RL In Trading",
    description: "Advanced reinforcement learning strategies for algorithmic trading in financial markets",
    githubUrl: "",
    pdfUrl: "",
    imageUrl: "",
    isComingSoon: true,
    createdAt: new Date()
  }
];

// Static events data
export const events: Event[] = [
  {
    id: 1,
    title: "BlackSwan was born",
    description: "Our quantitative finance club was officially founded.",
    date: "October 2024",
    imageUrl: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f",
    isComingSoon: false,
    createdAt: new Date()
  },
  {
    id: 2,
    title: "Talk & Collaboration",
    description: "Collaboration with a partner club on algorithmic trading.",
    date: "May 2025",
    imageUrl: "https://images.unsplash.com/photo-1639322537228-f710d846310a",
    isComingSoon: true,
    createdAt: new Date()
  }
];

// Helper functions to mimic API calls
export const getProjects = (): Promise<Project[]> => {
  return Promise.resolve(projects);
};

export const getProject = (id: number): Promise<Project | undefined> => {
  return Promise.resolve(projects.find(project => project.id === id));
};

export const getEvents = (): Promise<Event[]> => {
  return Promise.resolve(events);
};

export const getEvent = (id: number): Promise<Event | undefined> => {
  return Promise.resolve(events.find(event => event.id === id));
};