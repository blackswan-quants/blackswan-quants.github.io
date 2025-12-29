import { AnimatedTitle } from "@/components/animated-title";
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft, Construction } from "lucide-react";

export default function OptionPricer() {
    return (
        <div className="min-h-screen pt-24 px-4 bg-zinc-950">
            <div className="container mx-auto max-w-4xl">
                <Link href="/">
                    <Button variant="ghost" className="mb-8 hover:bg-zinc-900 text-zinc-400 hover:text-white">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Home
                    </Button>
                </Link>

                <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="bg-zinc-900/50 p-6 rounded-full border border-zinc-800 mb-8"
                    >
                        <Construction className="h-16 w-16 text-purple-500" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <AnimatedTitle text="Option Pricer" className="mb-6 justify-center" />
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                            Coming Soon
                        </h2>
                        <p className="text-gray-400 max-w-lg mx-auto text-lg leading-relaxed">
                            We are currently implementing our advanced option pricing engine based on Fourier methods.
                            Stay tuned for a powerful tool to value options using characteristic functions.
                        </p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
