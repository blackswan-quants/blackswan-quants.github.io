import { Link, useLocation } from "wouter";
import { Logo } from "./logo";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  const isHomePage = location === '/';

  useEffect(() => {
    if (!isHomePage) {
      setIsVisible(true);
      return;
    }

    const handleScroll = () => {
      const heroHeight = window.innerHeight * 0.8; // 80vh
      const currentScroll = window.scrollY;
      setIsVisible(currentScroll > heroHeight);
    };

    handleScroll(); // Initial check
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  // Close mobile menu when location changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-lg border-b border-zinc-800/50 transition-all duration-500 ${
      isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
    }`}>
      <div className="container mx-auto px-4 h-12 flex items-center justify-between">
        <Link href="/">
          <div className="flex items-center gap-3 cursor-pointer">
            <Logo className="w-12 h-12" />
            <span className="text-xl font-bold text-white">
              Blackswan Quants
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/about">
            <div className="text-sm text-zinc-400 hover:text-white transition-colors">About Us</div>
          </Link>
          <Link href="/projects">
            <div className="text-sm text-zinc-400 hover:text-white transition-colors">Projects</div>
          </Link>
          <Link href="/events">
            <div className="text-sm text-zinc-400 hover:text-white transition-colors">Events</div>
          </Link>
          <Link href="/partners">
            <div className="text-sm text-zinc-400 hover:text-white transition-colors">Partners</div>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden p-2 text-zinc-400 hover:text-white transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Menu className="w-6 h-6" />
        </motion.button>

        {/* Mobile Menu Panel */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 w-64 bg-black/95 backdrop-blur-lg border-l border-zinc-800/50 md:hidden shadow-xl"
            >
              <div className="flex flex-col gap-4 p-6">
                {/* Close Button */}
                <motion.button
                  className="absolute top-3 right-3 p-2 text-zinc-400 hover:text-white"
                  onClick={() => setIsMobileMenuOpen(false)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <X className="w-6 h-6" />
                </motion.button>

                {/* Menu Items */}
                <div className="pt-12">
                  <Link href="/about">
                    <div className="block py-2 text-lg text-zinc-400 hover:text-white transition-colors">About Us</div>
                  </Link>
                  <Link href="/projects">
                    <div className="block py-2 text-lg text-zinc-400 hover:text-white transition-colors">Projects</div>
                  </Link>
                  <Link href="/events">
                    <div className="block py-2 text-lg text-zinc-400 hover:text-white transition-colors">Events</div>
                  </Link>
                  <Link href="/partners">
                    <div className="block py-2 text-lg text-zinc-400 hover:text-white transition-colors">Partners</div>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}