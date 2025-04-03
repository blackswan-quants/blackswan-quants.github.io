import { motion } from "framer-motion";
import { PageTransition } from "@/components/page-transition";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Instagram, X } from "lucide-react";

const codeSnippets = [
  {
    language: "python",
    code: `class BlackSwanAnalyzer:
    def __init__(self):
        self.volatility_threshold = 0.42  # The answer to markets
        self.constants = [3.14159, 2.71828, 1.618]  # π, e, φ
        
    def predict_anomaly(self, data: pd.DataFrame) -> dict:
        """
        Identifies market anomalies through statistical patterns
        """
        if self.detect_volatility_spike(data):
            return {
                "anomaly": True,
                "confidence": 0.05,
                "action": "Hedge positions"
            }`
  },
  {
    language: "python",
    code: `class BlackSwanDetector:
    def __init__(self, sensitivity: float = 0.95):
        self.sensitivity = sensitivity

    def detect_anomalies(self, 
                        time_series: np.ndarray) -> List[int]:
        """
        Detect potential black swan events
        """
        return self._analyze_patterns(time_series)`
  }
];

export default function About() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-zinc-950 fixed inset-0 pt-12">
        <div className="container mx-auto px-4 h-[calc(100vh-3rem)] overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start h-full py-8">
            {/* Text Section */}
            <div className="space-y-6">
              <motion.h1 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-4xl font-bold mb-8"
              >
                About Blackswan Quants
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-zinc-300 leading-relaxed"
              >
                At Blackswan Quants, we create cutting-edge projects at the intersection of quantitative finance and machine learning.
              </motion.p>

              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-zinc-400 leading-relaxed"
              >
                Our unique SWAN framework empowers the next generation of quants to decode uncertainty and transform data into actionable financial intelligence.
              </motion.p>

              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-zinc-400 leading-relaxed"
              >
                By combining advanced mathematics, agile development methodologies, and rigorous programming, we deliver robust solutions designed to navigate market complexity and leverage financial opportunities with precision and confidence.
              </motion.p>

              {/* Social Links */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex gap-4 pt-6"
              >
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="outline"
                    size="icon"
                    className="bg-zinc-900 hover:bg-zinc-800 relative overflow-hidden group"
                    onClick={() => window.open('https://github.com/blackswan-quants', '_blank')}
                  >
                    <div className="absolute inset-0 bg-purple-500/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    <Github className="w-5 h-5 relative z-10" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="outline"
                    size="icon"
                    className="bg-zinc-900 hover:bg-zinc-800 relative overflow-hidden group"
                    onClick={() => window.open('https://www.linkedin.com/company/blackswan-quants/posts/?feedView=all', '_blank')}
                  >
                    <div className="absolute inset-0 bg-purple-500/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    <Linkedin className="w-5 h-5 relative z-10" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="outline"
                    size="icon"
                    className="bg-zinc-900 hover:bg-zinc-800 relative overflow-hidden group"
                    onClick={() => window.open('https://www.instagram.com/blackswan_quants/', '_blank')}
                  >
                    <div className="absolute inset-0 bg-purple-500/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    <Instagram className="w-5 h-5 relative z-10" />
                    <span className="sr-only">Instagram</span>
                  </Button>
                </motion.div>
              </motion.div>
            </div>

            {/* Animated Code Section */}
            <div className="h-full overflow-y-auto pr-4">
              {codeSnippets.map((snippet, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.2 }}
                  className="mb-6"
                >
                  <div className="bg-black/50 rounded-lg p-4 font-mono text-sm relative overflow-hidden border border-zinc-800">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-transparent opacity-50" />
                    <pre className="relative z-10">
                      <code className="text-zinc-300">
                        {snippet.code}
                      </code>
                    </pre>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          {/* Taleb Quote Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="mt-16 max-w-4xl mx-auto rounded-lg overflow-hidden shadow-lg"
          >
            <div className="relative">
              <img 
                src="/attached_assets/taleb.jpg" 
                alt="Black Swan Quote" 
                className="w-full h-auto object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 mix-blend-overlay" />
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}