import { AnimatedTitle } from "@/components/animated-title";
import { motion } from 'framer-motion';
import React from 'react';
import WhatWeDo from "@/components/what-we-do";
import FeaturedProjects from "@/components/team";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { sponsorsData } from "@/data/partners-data";

export default function Home() {
  return (
    <div className="min-h-screen pt-16 relative">
      {/* Hero Section */}
      <section className="min-h-[80vh] flex flex-col justify-center items-center relative z-10 px-4">
        <div className="container mx-auto px-4 text-center">
          {/* Desktop Version */}
          <motion.div 
            initial={{ opacity: 0.2 }}
            animate={{ opacity: 0.5 }}
            transition={{ duration: 1.2 }}
            className="hidden md:block"
          >
            <AnimatedTitle text="BLACKSWAN" className="mb-6" />
          </motion.div>

          {/* Mobile Version */}
          <motion.div 
            className="md:hidden flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.2, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            <motion.h1 
              className="text-4xl font-bold mb-4"
              initial={{ opacity: 0.2 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              BlackswanQuants
            </motion.h1>
          </motion.div>

          <motion.figure 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.5, y: 0 }}
            transition={{ delay: 0.8, duration: 1.2 }}
            className="relative mx-auto max-w-2xl"
          >
            <blockquote className="relative">
              <p className="text-lg sm:text-2xl font-medium text-white/90 break-words sm:whitespace-nowrap">
                "The Black Swan is not an exception to the rule; it is the rule."
              </p>
            </blockquote>
            <figcaption className="mt-4 sm:mt-6 text-sm text-white/80">
              <div className="font-semibold">Taleb</div>
              <div className="text-white/60">The Black Swan</div>
            </figcaption>
          </motion.figure>
        </div>
      </section>

      {/* Simple Text Section */}
      <section className="py-32 md:py-40 relative z-10 bg-zinc-950/50 border-y border-zinc-800/50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <motion.p 
              className="text-2xl md:text-3xl font-light max-w-4xl mx-auto text-zinc-200 leading-relaxed"
            >
              We are a team of university students united by a passion for quantitative finance and machine learning, collaborating on innovative projects, competitions, and events to gain valuable experience and insights.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mt-8"
            >
              <Link href="/about">
                <Button 
                  variant="ghost" 
                  className="text-zinc-300 hover:text-white transition-all duration-300 border border-zinc-700 hover:border-purple-500/30 hover:bg-zinc-900 px-6 py-3 text-base"
                >
                  Learn more about us
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section (What We Do) */}
      <section className="relative z-10">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-20 tracking-tight text-white pt-32"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          How We <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Innovate</span>
        </motion.h2>
        <WhatWeDo />
      </section>

      <FeaturedProjects />

      {/* Sponsors Section */}
      <section className="py-24 relative z-10 border-t border-white/5 bg-black/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-12 text-white/90">
              Our Sponsors
            </h2>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
              {sponsorsData.map((sponsor, index) => (
                <motion.a
                  key={sponsor.name}
                  href={sponsor.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="w-48 h-24 md:w-60 md:h-32 flex items-center justify-center p-4 bg-white/5 rounded-xl border border-white/10 group-hover:border-purple-500/30 transition-colors duration-300">
                    <img 
                      src={sponsor.logo} 
                      alt={sponsor.name} 
                      className="max-w-full max-h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}