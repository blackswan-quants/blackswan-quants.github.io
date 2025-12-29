import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function News() {
    const newsItems = [
        {
            id: 1,
            title: "Analyzing the Impact of FED Speeches on the Stock Market using Financial BERT",
            description: "Our research on quantifying the impact of Federal Reserve communications on market dynamics using advanced NLP techniques is now available on SSRN.",
            tag: "NLP",
            link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5727422",
            date: "2024"
        },
        {
            id: 2,
            title: "Clustering in the S&P 500: A Comprehensive Study using Time Series Analysis",
            description: "A deep dive into market structure and clustering dynamics within the S&P 500, leveraging Dynamic Time Warping and other time-series analysis methods. Available on SSRN.",
            tag: "DTW",
            link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5744364",
            date: "2024"
        }
    ];

    return (
        <div className="min-h-screen pt-24 px-4 bg-zinc-950">
            <div className="container mx-auto max-w-4xl">
                <Link href="/">
                    <Button variant="ghost" className="mb-8 hover:bg-zinc-900 text-zinc-400 hover:text-white">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Home
                    </Button>
                </Link>

                <motion.h1
                    className="text-3xl md:text-5xl font-bold text-white mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Latest News
                </motion.h1>

                <div className="grid gap-6">
                    {newsItems.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 + 0.2 }}
                            className="bg-zinc-900/50 p-6 md:p-8 rounded-xl border border-zinc-800 hover:border-purple-500/30 transition-colors group"
                        >
                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="bg-purple-500/10 text-purple-300 px-2 py-1 rounded text-xs font-medium">
                                            {item.tag}
                                        </span>
                                        <span className="text-zinc-500 text-sm">{item.date}</span>
                                    </div>
                                    <h2 className="text-xl md:text-2xl font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors">
                                        {item.title}
                                    </h2>
                                    <p className="text-gray-400 leading-relaxed mb-4">
                                        {item.description}
                                    </p>
                                    <a
                                        href={item.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center text-sm font-medium text-purple-400 hover:text-purple-300 transition-colors"
                                    >
                                        Read Paper on SSRN <ExternalLink className="ml-1 h-3 w-3" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
