import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { LineChart, ArrowUpDown, Brain, Network } from 'lucide-react';

const WhatWeDo = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const projects = [
    {
      icon: LineChart,
      title: "A common goal",
      description: "At BlackSwanQuants, we bridge finance, technology, and quantitative research to develop cutting-edge projects at the intersection of machine learning and quantitative finance.",
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
    <section 
      ref={containerRef} 
      className="h-[150vh] sm:h-[200vh] relative" 
    >
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <div className="max-w-3xl mx-auto w-full px-4">
          <div className="space-y-12 sm:space-y-16"> 
            {projects.map((project, index) => {
              const progress = useTransform(
                scrollYProgress,
                [
                  Math.max(0, index * 0.2 - 0.1),
                  index * 0.2,
                  (index + 1) * 0.2,
                  Math.min(1, (index + 1) * 0.2 + 0.1)
                ],
                [0.3, 1, 1, 0.3]
              );

              return (
                <motion.div
                  key={project.title}
                  style={{
                    opacity: progress,
                  }}
                  className="relative"
                >
                  <h3 className="text-lg sm:text-xl font-light text-gray-400 hover:text-white transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">{project.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;