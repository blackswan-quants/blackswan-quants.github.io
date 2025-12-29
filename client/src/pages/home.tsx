import { AnimatedTitle } from "@/components/animated-title";
import { motion } from 'framer-motion';
import React from 'react';
import WhatWeDo from "@/components/what-we-do";
import Team from "@/components/team";
import { ProgressSection } from "@/components/progress-section";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen pt-16 relative">
      {/* Large Fixed Logo Background */}
      <div
        className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'url(/logobig.png)',
          backgroundSize: '80% auto',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          mixBlendMode: 'screen'
        }}
      />

      {/* Hero Section */}
      <section className="min-h-[80vh] flex flex-col justify-center items-center relative z-10 px-4">
        <div className="container mx-auto px-4 text-center">
          {/* Desktop Version */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }} // Changed opacity to 1 for better visibility of the effect
            transition={{ duration: 1.2 }}
            className="hidden md:block" // Keeping hidden on mobile for now as originally set
          >
            <AnimatedTitle text="BLACKSWAN" className="mb-6 font-black tracking-tighter text-8xl md:text-9xl" />
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
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.2 }}
              transition={{ delay: 0.3, duration: 1 }}
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

          {/* Removed top tagline per request */}
        </div>
      </section>

      {/* Simple Text Section */}
      <section className="py-32 md:py-40 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <motion.p
              className="text-lg sm:text-xl max-w-3xl mx-auto text-gray-200 leading-relaxed"
            >
              We are a team of university students united by a passion for quantitative finance and machine learning, collaborating on innovative projects, competitions, and events to gain valuable experience and insights.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-8"
            >
              <Link href="/about">
                <Button
                  variant="ghost"
                  className="text-gray-400 hover:text-white transition-colors border border-gray-800 hover:border-purple-500/30"
                >
                  Read More
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>


      {/* Skills Section (What We Do) */}
      <section className="relative z-10">
        <motion.h2
          className="text-2xl sm:text-3xl font-bold text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          How we innovate
        </motion.h2>
        <WhatWeDo />
      </section>

      {/* Timeline Section */}
      <ProgressSection />

      <Team />
    </div>
  );
}