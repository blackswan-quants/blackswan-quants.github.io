import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { projects } from '@/data/static-data';
import { Link } from 'wouter';
import { Button } from './ui/button';

const FeaturedProjects = () => {
  // Take the first 3 non-coming-soon projects
  const featuredProjects = projects.filter(p => !p.isComingSoon).slice(0, 3);

  return (
    <section className="py-32 bg-zinc-950 relative p-8">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-white"
          >
            From Theory to <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Practice</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-zinc-400 text-lg max-w-2xl mx-auto"
          >
            Explore some of our latest research and development projects in quantitative finance.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="relative group flex flex-col"
            >
              <div className="absolute -inset-px bg-gradient-to-br from-purple-600/30 to-blue-600/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg" />
              <a 
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative bg-zinc-900/80 rounded-2xl p-8 border border-zinc-800 backdrop-blur-sm transition-all duration-300 hover:border-zinc-700 hover:-translate-y-1 h-full flex flex-col"
              >
                <h3 className="text-xl font-semibold mb-3 text-white">{project.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed flex-grow">{project.description}</p>
              </a>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-20">
          <Link href="/projects">
            <Button className="bg-white text-black hover:bg-zinc-200 rounded-full px-8 h-12 text-base font-medium transition-all hover:scale-105">
              View All Projects <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;