import { motion } from "framer-motion";
import { PageTransition } from "@/components/page-transition";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Instagram, X, Mail, Send, CheckCircle, AlertCircle } from "lucide-react";
import { useState } from "react";

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

// Place team photos in client/public/team and update these filenames to match your uploads.
const teamMembers = [
  { id: 1, name: "Simone Zani", role: "Head of Finance", bio: "", photo: "/team/simone.jpg", fallbackPhoto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face", email: "blackswanquants@gmail.com", linkedin: "https://www.linkedin.com/in/simonezani35/", github: "" },
  { id: 2, name: "Giulia Talà", role: "Head of Software", bio: "", photo: "/team/giulia.jpg", fallbackPhoto: "https://images.unsplash.com/photo-1494790108755-2616b612b37c?w=400&h=400&fit=crop&crop=face", email: "blackswanquants@gmail.com", linkedin: "https://www.linkedin.com/in/giuliatala/", github: "" },
  { id: 3, name: "Lorenzo Pirozzi", role: "Quantitative Researcher", bio: "", photo: "/team/lorenzo.jpg", fallbackPhoto: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face", email: "lorenzopirozzi0@gmail.com", linkedin: "https://www.linkedin.com/in/lorenzo-pirozzi-674b75242/", github: "" },
  { id: 4, name: "Edoardo Mocchi", role: "Quantitative Researcher", bio: "", photo: "/team/edoardo.jpg", fallbackPhoto: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop&crop=face", email: "blackswanquants@gmail.com", linkedin: "https://www.linkedin.com/in/edoardo-mocchi/", github: "" },
  { id: 5, name: "Pietro Bottan", role: "Quantitative Researcher", bio: "", photo: "/team/pietro.jpg", fallbackPhoto: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face", email: "blackswanquants@gmail.com", linkedin: "https://www.linkedin.com/in/pietro-bottan/", github: "" },
  { id: 6, name: "Salvatore Ippolito", role: "Quantitative Researcher", bio: "", photo: "/team/salvatore.jpg", fallbackPhoto: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=400&h=400&fit=crop&crop=face", email: "blackswanquants@gmail.com", linkedin: "https://www.linkedin.com/in/ippolito-salvatore/", github: "" },
  { id: 7, name: "Riccardo Baudone", role: "Quantitative Researcher", bio: "", photo: "/team/riccardo.jpg", fallbackPhoto: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=400&h=400&fit=crop&crop=face", email: "blackswanquants@gmail.com", linkedin: "https://www.linkedin.com/in/riccardo-baudone-296941155/", github: "" }
];

export default function About() {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('idle'); // idle, sending, success, error

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');

    try {
      // Using a demo Formspree endpoint - replace with actual endpoint
      const response = await fetch('https://formspree.io/f/demo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactForm),
      });

      if (response.ok) {
        setFormStatus('success');
        setContactForm({ name: '', email: '', message: '' });
        setTimeout(() => setFormStatus('idle'), 5000);
      } else {
        setFormStatus('error');
        setTimeout(() => setFormStatus('idle'), 5000);
      }
    } catch (error) {
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 5000);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value
    });
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-zinc-950 pt-12">
        <div className="container mx-auto px-4 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start py-8">
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
                    onClick={() => window.open('https://github.com/blackswan-quants', '_blank', 'noopener,noreferrer')}
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
                    onClick={() => window.open('https://www.linkedin.com/company/blackswan-quants/posts/?feedView=all', '_blank', 'noopener,noreferrer')}
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
                    onClick={() => window.open('https://www.instagram.com/blackswan_quants/', '_blank', 'noopener,noreferrer')}
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
          {/* Team Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="mt-20"
          >
            <div className="mb-12">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="text-3xl font-bold mb-4"
              >
                Meet Our Team
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="text-zinc-400 text-lg"
              >
                Passionate quants driving innovation in financial technology
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  className="bg-zinc-900/50 rounded-2xl p-6 border border-zinc-800 hover:border-purple-500/50 transition-all duration-300 group"
                >
                  <div className="text-center mb-4">
                    <div className="relative inline-block mb-4">
                      <img
                        src={member.photo}
                        alt={member.name}
                        loading="lazy"
                        onError={(event) => {
                          const target = event.currentTarget;
                          if (!member.fallbackPhoto || target.dataset.fallbackApplied === 'true') {
                            return;
                          }
                          target.dataset.fallbackApplied = 'true';
                          target.src = member.fallbackPhoto;
                        }}
                        className="w-20 h-20 rounded-full object-cover mx-auto border-2 border-zinc-700 group-hover:border-purple-500/50 transition-colors duration-300"
                      />
                      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
                    <p className="text-purple-400 text-sm font-medium mb-2">{member.role}</p>
                    {member.bio && (
                      <p className="text-zinc-400 text-sm leading-relaxed mb-4">{member.bio}</p>
                    )}
                  </div>

                  <div className="flex justify-center gap-3">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => window.open(`mailto:${member.email}`, '_blank')}
                      className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-purple-400 transition-all duration-200"
                      aria-label={`Email ${member.name}`}
                    >
                      <Mail className="w-4 h-4" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => window.open(member.linkedin, '_blank', 'noopener,noreferrer')}
                      className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-purple-400 transition-all duration-200"
                      aria-label={`Visit ${member.name}'s LinkedIn profile`}
                    >
                      <Linkedin className="w-4 h-4" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => window.open(member.github, '_blank', 'noopener,noreferrer')}
                      className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-purple-400 transition-all duration-200"
                      aria-label={`Visit ${member.name}'s GitHub profile`}
                    >
                      <Github className="w-4 h-4" />
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Contact Section simplified to email button */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className="mt-20 text-center"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
              className="text-3xl font-bold mb-4"
            >
              Get in touch
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
              className="text-zinc-400 text-lg mb-6"
            >
              We'd love to hear from you.
            </motion.p>
            <Button
              onClick={() => window.location.href = 'mailto:blackswanquants@gmail.com'}
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg"
            >
              <Mail className="w-4 h-4 mr-2" /> Email us
            </Button>
          </motion.section>

          {/* Black Swan quote block (text-based, reliable) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="mt-20 max-w-3xl mx-auto rounded-xl border border-zinc-800 p-8 bg-black/30"
          >
            <blockquote className="text-xl text-zinc-200 text-center">
              “The Black Swan is not an exception to the rule; it is the rule.”
            </blockquote>
            <div className="mt-3 text-center text-zinc-400">— Nassim Nicholas Taleb</div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}