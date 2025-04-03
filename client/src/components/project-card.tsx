import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { FileText, Github } from "lucide-react";
import { motion } from "framer-motion";
import type { Project } from "@shared/schema";
import { useState } from "react";
import { useLocation } from "wouter";

export function ProjectCard({ project }: { project: Project }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [, navigate] = useLocation();

  // Animation variants for different elements
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const childVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.3 }
    }
  };

  // Loading animation variants
  const loadingVariants = {
    initial: { 
      background: "linear-gradient(90deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.08) 50%, rgba(255,255,255,0.03) 100%)",
      backgroundSize: "200% 100%",
      backgroundPosition: "0% 0%"
    },
    animate: { 
      backgroundPosition: ["0% 0%", "100% 0%", "0% 0%"],
      transition: { duration: 1.5, repeat: Infinity, ease: "linear" }
    }
  };

  // Simulate loading
  setTimeout(() => setIsLoaded(true), Math.random() * 1500 + 500);

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate={isLoaded ? "visible" : "hidden"}
      className="relative group"
    >
      {/* Background glow effect */}
      <motion.div 
        className={`absolute inset-0 bg-gradient-to-br ${
          project.isComingSoon 
            ? "from-pink-500/20 via-pink-500/10 to-transparent" 
            : "from-purple-500/20 via-blue-500/10 to-transparent"
        } rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 blur-xl`}
        variants={childVariants}
      />

      {/* Card with glass effect */}
      <Card 
        className="relative bg-zinc-950 border-white/10 backdrop-blur-sm transition-all duration-300 hover:border-white/20 h-[300px] overflow-hidden"
      >
        {!isLoaded && (
          <motion.div 
            className="absolute inset-0 z-10"
            variants={loadingVariants}
            initial="initial"
            animate="animate"
          />
        )}
        
        <CardHeader>
          <motion.div 
            className="flex items-center justify-between"
            variants={childVariants}
          >
            <CardTitle className="text-xl text-zinc-200 group-hover:text-white transition-colors">
              {project.title}
            </CardTitle>
            {project.isComingSoon && (
              <motion.span 
                className="px-2 py-1 text-xs font-medium text-pink-300 bg-pink-500/10 rounded-full border border-pink-500/20"
                variants={childVariants}
                whileHover={{ scale: 1.05 }}
              >
                Coming Soon
              </motion.span>
            )}
          </motion.div>
        </CardHeader>
        
        <CardContent>
          <motion.p 
            className="text-zinc-400 text-sm mb-4 group-hover:text-zinc-300 transition-colors"
            variants={childVariants}
          >
            {project.description}
          </motion.p>
          
          {!project.isComingSoon && (
            <motion.div 
              className="flex gap-2"
              variants={childVariants}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="text-xs bg-black/20 border-white/10 hover:border-white/20 hover:bg-white/5 transition-colors relative overflow-hidden"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(project.pdfUrl, '_blank');
                  }}
                >
                  <div className="absolute inset-0 bg-purple-500/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  <FileText className="w-4 h-4 mr-2 relative z-10" />
                  <span className="relative z-10">PDF</span>
                </Button>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  variant="outline"
                  size="sm"
                  className="text-xs bg-black/20 border-white/10 hover:border-white/20 hover:bg-white/5 transition-colors relative overflow-hidden"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(project.githubUrl, '_blank');
                  }}
                >
                  <div className="absolute inset-0 bg-purple-500/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  <Github className="w-4 h-4 mr-2 relative z-10" />
                  <span className="relative z-10">GitHub</span>
                </Button>
              </motion.div>
            </motion.div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}