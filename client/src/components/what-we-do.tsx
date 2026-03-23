import React from 'react';
import { motion } from 'framer-motion';
import { LineChart, ArrowUpDown, Brain, Network } from 'lucide-react';

const WhatWeDo = () => {
  const features = [
    {
      icon: LineChart,
      title: "A common goal",
      description: "We bridge finance, technology, and quantitative research to develop cutting-edge projects at the intersection of machine learning and quantitative finance.",
    },
    {
      icon: Brain,
      title: "Harnessing Data for Smarter Decisions",
      description: "We specialize in analyzing complex financial data, applying machine learning, statistical learning, and data science to extract meaningful insights.",
    },
    {
      icon: Network,
      title: "Collaborating Across Academia & Industry",
      description: "We thrive on strong connections with research institutions and industry leaders, ensuring that our solutions remain at the forefront of financial innovation.",
    },
    {
      icon: ArrowUpDown,
      title: "Transforming Talent into Action",
      description: "Our SWAN framework empowers the next generation of quants to decode uncertainty and transform data into financial intelligence by developing projects and participating in international competitions.",
    }
  ];

  return (
    <section className="relative pb-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 flex flex-col items-start text-left"
            >
              <div className="p-3 mb-4 rounded-lg bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20">
                <feature.icon className="w-8 h-8 text-purple-300" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;