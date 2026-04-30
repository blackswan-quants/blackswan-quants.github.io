import { Project, Event } from "@shared/schema";

// Static projects data
export const projects: Project[] = [
  {
    id: 1,
    title: "Effect of FED on the market",
    description: "Analyzing the impact of FED's speeches on the Stock Market using Financial BERT",
    githubUrl: "https://github.com/quantfin-sfpolimi/cb-impact-nlps",
    pdfUrl: "",
    isComingSoon: false
  },
  {
    id: 2,
    title: "Clustering in the S&P 500",
    description: "A Comprehensive Study using Time Series Analysis and Clustering Techniques",
    githubUrl: "https://github.com/quantfin-sfpolimi/dtwclustering_sp500",
    pdfUrl: "",
    isComingSoon: false
  },
  {
    id: 3,
    title: "Correlation-based prediction in the NASDAQ",
    description: "Relating Correlations and Granger Causality-driven Models for LSTM-based Stock Forecasting",
    githubUrl: "https://github.com/quantfin-sfpolimi/nasdaq_causal-analysis_lstm",
    pdfUrl: "",
    isComingSoon: false
  },
  {
    id: 4,
    title: "RL In Trading",
    description: "Advanced reinforcement learning strategies for algorithmic trading in financial markets",
    githubUrl: "",
    pdfUrl: "",
    isComingSoon: true
  },
  {
    id: 5,
    title: "Fourier Option Pricing",
    description: "An exploration of option pricing models using Fourier transforms for enhanced speed and accuracy.",
    githubUrl: "https://github.com/blackswan-quants/FourierOptionPricing",
    pdfUrl: "project_papers/A_Low_Latency_FFT_Pricing_Architecture_with_Analytical_Greeks_in_C.pdf",
    isComingSoon: false
  },
  {
    id: 6,
    title: "Hurst pullback",
    description: "Analysis of the Hurst exponent to detect mean-reverting and trending patterns, and developing pullback trading strategies.",
    githubUrl: "https://github.com/blackswan-quants/hurst-pullback",
    pdfUrl: "",
    isComingSoon: false
  },
  {
    id: 7,
    title: "Market Regime HMM",
    description: "Using Hidden Markov Models to identify different market regimes and build adaptive trading algorithms.",
    githubUrl: "https://github.com/blackswan-quants/marketregime_hmm",
    pdfUrl: "project_papers/Market_Regime_Detector___Data_Report.pdf",
    isComingSoon: false
  },
  {
    id: 8,
    title: "Intraday Momentum",
    description: "Research and backtesting of high-frequency momentum strategies on intraday market data.",
    githubUrl: "https://github.com/blackswan-quants/intraday-momentum",
    pdfUrl: "project_papers/BSQ_IntradayMom_Report.pdf",
    isComingSoon: false
  }
];

// Static events data
export const events: Event[] = [
  {
    id: 6,
    title: "Talk with HPC Engineer",
    description: "We recently had the opportunity to host Alessandro Febretti, High Performance Computing Engineer at Citadel Securities, for a SmallTalks session where we shared insights from Citadel Securities.",
    date: "December 2025",
    imageUrl: "events_images/event6.webp",
    instagramPostUrl: "https://www.instagram.com/p/DSE7xUXjGSC",
    linkedinPostUrl: "https://www.linkedin.com/posts/blackswan-quants_quantfinance-hpc-citadelsecurities-activity-7404444554978095104-IE6m?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEoZJlEBBEytPUiG26hgG5mevzVgfnxj42E"
  },
  {
    id: 5,
    title: "Talk with BlackRock Quant",
    description: "We recently had the opportunity to host Riccardo Ronzani, Quant Researcher at BlackRock, for a SmallTalks session focused on careers in quantitative finance.",
    date: "December 2025",
    imageUrl: "events_images/event5.webp",
    instagramPostUrl: "https://www.instagram.com/p/DSaaoWnjHhX",
    linkedinPostUrl: "https://www.linkedin.com/posts/blackswan-quants_%F0%9D%97%A6%F0%9D%97%BA%F0%9D%97%AE%F0%9D%97%B9%F0%9D%97%B9%F0%9D%97%A7%F0%9D%97%AE%F0%9D%97%B9%F0%9D%97%B8%F0%9D%98%80-%F0%9D%97%A7%F0%9D%97%B5%F0%9D%97%B2-%F0%9D%97%A4%F0%9D%98%82%F0%9D%97%AE%F0%9D%97%BB-activity-7407469297712709633-ndh1"
  },
  {
    id: 4,
    title: "Talk with SquarePoint Quant",
    description: "Behind the Numbers: Quantitative Research Uncovered. The BlackSwans community is kicking off the new academic year with an exclusive event featuring Marco Maninetti, Quant Researcher @ Squarepoint",
    date: "October 2025",
    imageUrl: "events_images/event4.webp",
    instagramPostUrl: "https://www.instagram.com/p/DPB_ZeDjKw7",
    linkedinPostUrl: "https://www.linkedin.com/posts/blackswan-quants_quantitativeresearch-squarepoint-blackswansquants-activity-7377008699057405952-XBYt"
  },
  {
    id: 3,
    title: "GDG Hackathon",
    description: "24 hours. Dozens of devs. One mission: win. On May 10-11, we joined the GDG Hackathon in Milan and walked away with 2nd place!",
    date: "May 2025",
    imageUrl: "events_images/event3.webp",
    instagramPostUrl: "https://www.instagram.com/p/DLu6SO1o6QX",
    linkedinPostUrl: "https://www.linkedin.com/posts/blackswan-quants_hacking-in-milan-with-gdg-on-may-10-activity-7347304456666894337-zWE1"
  },
  {
    id: 2,
    title: "Inside Citi Italy",
    description: "On May 15th, BlackSwan Quants joined a behind-the-scenes session at Citibank HQ in Milan, a deep dive into the strategic, economic, and human forces shaping finance today.",
    date: "May 2025",
    imageUrl: "events_images/event2.webp",
    instagramPostUrl: "https://www.instagram.com/p/DLFOP_ooGih",
    linkedinPostUrl: "https://www.linkedin.com/posts/blackswan-quants_inside-citi-italy-future-of-finance-activity-7341434805441429504-gXRT"
  },
  {
    id: 1,
    title: "BlackSwans go to Switzerland!",
    description: "On March 19th, our members traveled to St. Gallen, Switzerland to take on one of Europe's biggest hackathons: Start Hack 2025.",
    date: "March 2025",
    imageUrl: "events_images/event1.webp",
    instagramPostUrl: "https://www.instagram.com/p/DHmBG6bolpL",
    linkedinPostUrl: "https://www.linkedin.com/posts/blackswan-quants_starthack2025-activity-7309580067389542400-lEH7"
  },
  {
    id: 0,
    title: "BlackSwan was born",
    description: "Our quantitative finance club was officially founded.",
    date: "October 2024",
    imageUrl: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f",
    instagramPostUrl: "https://www.instagram.com/blackswan_quants/",
    linkedinPostUrl: "https://www.linkedin.com/company/blackswan-quants"
  }
];
