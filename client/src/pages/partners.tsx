import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Linkedin, Instagram, ExternalLink } from 'lucide-react';
import { sponsorsData, partnersData } from "@/data/partners-data";


export default function Partners() {
  return (
    <div className="min-h-screen bg-zinc-950 flex flex-col items-center relative overflow-hidden pt-24 pb-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-900/20 via-zinc-950 to-zinc-950 pointer-events-none" />
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Network</span>
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed">
            We collaborate with leading institutions and organizations to push the boundaries of quantitative finance.
          </p>
        </motion.div>

        {/* Sponsors Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-24"
        >
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-purple-500/50" />
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-wide uppercase">Sponsors</h2>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-purple-500/50" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
             {sponsorsData.map((sponsor, index) => (
               <PartnerCard key={sponsor.name} data={sponsor} index={index} />
             ))}
          </div>
        </motion.div>

        {/* Partners Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-blue-500/50" />
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-wide uppercase">Partners</h2>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-blue-500/50" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             {partnersData.map((partner, index) => (
               <PartnerCard key={partner.name} data={partner} index={index} />
             ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
}

function PartnerCard({ data, index }: { data: any, index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      className={`group relative flex flex-col w-full bg-zinc-900/50 border border-zinc-800 ${data.borderColor} rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-${data.color.split('-')[1]}-500/10 hover:-translate-y-1`}
    >
      <div className="h-48 p-8 flex items-center justify-center bg-zinc-900/80 border-b border-zinc-800/50 relative overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-b from-transparent to-zinc-950/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
        <img 
          src={data.logo} 
          alt={data.name} 
          className="w-full h-full object-contain opacity-90 group-hover:opacity-100 transition-transform duration-500 group-hover:scale-105 relative z-10"
        />
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className={`text-xl font-bold mb-3 ${data.color}`}>{data.name}</h3>
        <p className="text-zinc-400 text-sm leading-relaxed mb-6 flex-grow">
          {data.description}
        </p>
        
        <div className="flex items-center gap-4 mt-auto pt-4 border-t border-zinc-800/50">
          {data.website && (
            <a href={data.website} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors p-2 hover:bg-zinc-800 rounded-full">
              <Globe className="w-5 h-5" />
            </a>
          )}
          {data.linkedin && (
            <a href={data.linkedin} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-[#0077b5] transition-colors p-2 hover:bg-zinc-800 rounded-full">
              <Linkedin className="w-5 h-5" />
            </a>
          )}
          {data.instagram && (
            <a href={data.instagram} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-[#E4405F] transition-colors p-2 hover:bg-zinc-800 rounded-full">
              <Instagram className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
