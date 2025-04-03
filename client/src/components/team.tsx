import React from 'react';
import { motion } from 'framer-motion';
import { Code, FileText, TrendingUp } from 'lucide-react';

const Team = () => {
  const features = [
    {
      icon: TrendingUp,
      title: "Statistical Learning Applied to the S&P500.",
      description: " A Comparative Study of Euclidean Distance k-Means and DTW-Based Hierarchical Clustering for Stock Grouping in the S&P 500",
      gradient: "from-blue-500/20 via-blue-500/5 to-transparent"
    },
    {
      icon: FileText,
      title: "Correlation-based  prediction in the NASDAQ",
      description: " Rolling Correlations and Granger Causality-Driven LSTM Modeling for Stock Market Prediction: A Study of NASDAQ Interdependencies.",
      gradient: "from-purple-500/20 via-purple-500/5 to-transparent"
    },
    {
      icon: Code,
      title: " Effect of FED on the market",
      description: "Analyzing the Impact of FED Speeches on the Stock Market: A Sentiment Analysis Approach Using Financial BERT",
      gradient: "from-green-500/20 via-green-500/5 to-transparent"
    }
  ];

  return (
    <section className="min-h-screen bg-zinc-950 relative flex items-center justify-center p-8">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-light mb-4"
          >
            Quantitative Finance & ML,{' '}
            <span className="relative inline-block">
              <span className="text-purple-400">unhinged</span>
            </span>
          </motion.h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We empower the next 
            generation of quants to decode 
            uncertainty and transform data 
            into financial intelligence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative group cursor-pointer"
              onClick={() => {
                window.location.href = '/projects';
              }}
            >
              <div className={`absolute inset-0 bg-gradient-to-b ${feature.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl`} />
              <div 
                className="relative bg-zinc-950 rounded-2xl p-8 border border-white/10 backdrop-blur-sm transition-colors duration-300 hover:border-white/20 cursor-pointer"
                onClick={() => {
                  window.location.href = '/projects';
                }}
              >
                <feature.icon className="w-12 h-12 mb-6 text-white/80" />
                <h3 className="text-xl font-light mb-4 text-white">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;