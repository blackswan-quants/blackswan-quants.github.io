import { motion } from "framer-motion";
import { PageTransition } from "@/components/page-transition";
import { Button } from "@/components/ui/button";
import { Linkedin, Instagram, Github, Users, Target, Code, BrainCircuit } from "lucide-react";

export default function About() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-zinc-950 text-white pt-24 pb-20">
        <div className="container mx-auto px-4">
          
          {/* Header Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Community</span>
            </h1>
            <p className="text-zinc-400 text-lg max-w-3xl mx-auto leading-relaxed">
              We are a vibrant team of university students united by a passion for quantitative finance and machine learning. We thrive on collaboration, innovation, and continuous learning.
            </p>
          </motion.div>

          {/* Core Values / Mission Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
            {[
              { icon: Users, title: "Collaboration", description: "Fostering a team environment where ideas flourish and knowledge is shared openly." },
              { icon: BrainCircuit, title: "Innovation", description: "Applying advanced mathematics and ML to solve complex financial challenges." },
              { icon: Code, title: "Excellence", description: "Delivering robust, high-quality solutions through rigorous programming and agile methods." },
              { icon: Target, title: "Impact", description: "Decoding market uncertainty to transform data into actionable financial intelligence." }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 text-center"
              >
                <div className="inline-block p-3 mb-4 rounded-lg bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20">
                  <item.icon className="w-8 h-8 text-purple-300" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-zinc-400 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Social Feeds Section */}
          <div className="text-center mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4"
            >
              Follow Our Journey
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-zinc-400 max-w-2xl mx-auto"
            >
              Stay updated with our latest projects, events, and insights directly from our social channels.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 max-w-6xl mx-auto">
            {/* LinkedIn Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-zinc-900 rounded-xl md:rounded-2xl p-4 md:p-8 border border-zinc-800 flex flex-row md:flex-col items-center text-left md:text-center"
            >
              <Linkedin className="w-8 h-8 md:w-12 md:h-12 text-blue-400 md:mb-4 shrink-0" />
              <div className="flex-1 px-4 md:px-0 md:w-full">
                <h3 className="text-lg md:text-2xl font-bold text-white md:mb-2">LinkedIn</h3>
                <p className="hidden md:block text-zinc-400 mb-6">
                  Follow us for professional insights, event announcements, and deep dives into our quantitative research.
                </p>
              </div>
              <Button
                className="shrink-0 md:mt-auto bg-blue-500/10 text-blue-300 border border-blue-500/20 hover:bg-blue-500/20 hover:text-blue-200 transition-colors"
                onClick={() => window.open('https://www.linkedin.com/company/blackswan-quants', '_blank')}
              >
                <span className="hidden md:inline">View on LinkedIn</span>
                <span className="md:hidden">View</span>
              </Button>
            </motion.div>
            
            {/* Instagram Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-zinc-900 rounded-xl md:rounded-2xl p-4 md:p-8 border border-zinc-800 flex flex-row md:flex-col items-center text-left md:text-center"
            >
              <Instagram className="w-8 h-8 md:w-12 md:h-12 text-pink-400 md:mb-4 shrink-0" />
              <div className="flex-1 px-4 md:px-0 md:w-full">
                <h3 className="text-lg md:text-2xl font-bold text-white md:mb-2">Instagram</h3>
                <p className="hidden md:block text-zinc-400 mb-6">
                  Get a behind-the-scenes look at our team, our culture, and the daily life of the BlackSwan Quants community.
                </p>
              </div>
              <Button
                className="shrink-0 md:mt-auto bg-pink-500/10 text-pink-300 border border-pink-500/20 hover:bg-pink-500/20 hover:text-pink-200 transition-colors"
                onClick={() => window.open('https://www.instagram.com/blackswan_quants/', '_blank')}
              >
                <span className="hidden md:inline">Follow on Instagram</span>
                <span className="md:hidden">Follow</span>
              </Button>
            </motion.div>

            {/* GitHub Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-zinc-900 rounded-xl md:rounded-2xl p-4 md:p-8 border border-zinc-800 flex flex-row md:flex-col items-center text-left md:text-center"
            >
              <Github className="w-8 h-8 md:w-12 md:h-12 text-purple-400 md:mb-4 shrink-0" />
              <div className="flex-1 px-4 md:px-0 md:w-full">
                <h3 className="text-lg md:text-2xl font-bold text-white md:mb-2">GitHub</h3>
                <p className="hidden md:block text-zinc-400 mb-6">
                  Explore our open-source repositories, quantitative models, and technical projects.
                </p>
              </div>
              <Button
                className="shrink-0 md:mt-auto bg-purple-500/10 text-purple-300 border border-purple-500/20 hover:bg-purple-500/20 hover:text-purple-200 transition-colors"
                onClick={() => window.open('https://github.com/orgs/blackswan-quants/', '_blank')}
              >
                <span className="hidden md:inline">View on GitHub</span>
                <span className="md:hidden">View</span>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}