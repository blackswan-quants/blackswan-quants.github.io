import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { events as staticEvents } from "@/data/static-data";
import { Calendar, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageTransition } from "@/components/page-transition";

export default function Events() {
  const [activeIndex, setActiveIndex] = useState(0);
  const isScrolling = useRef(false);
  
  const events = staticEvents;

  useEffect(() => {
    const handleScroll = (deltaY: number, e: Event) => {
      // Permette lo scroll nativo (verso il footer) SOLO se siamo all'ultimo evento
      if (activeIndex === events.length - 1) {
        if (deltaY > 0) return; // Permette di scendere al footer
        if (deltaY < 0 && window.scrollY > 0) return; // Permette di risalire dal footer
      }

      // Blocca lo scroll nativo in tutti gli altri casi per evitare che la pagina "balli"
      if (e.cancelable) {
        e.preventDefault();
      }

      if (isScrolling.current) return;

      if (deltaY > 30) {
        if (activeIndex < events.length - 1) {
          isScrolling.current = true;
          setActiveIndex((prev) => prev + 1);
          setTimeout(() => {
            isScrolling.current = false;
          }, 1000);
        }
      } else if (deltaY < -30) {
        if (activeIndex > 0) {
          isScrolling.current = true;
          setActiveIndex((prev) => prev - 1);
          setTimeout(() => {
            isScrolling.current = false;
          }, 1000);
        }
      }
    };

    const handleWheel = (e: WheelEvent) => handleScroll(e.deltaY, e);
    
    let touchStartY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };
    const handleTouchMove = (e: TouchEvent) => {
      const deltaY = touchStartY - e.touches[0].clientY;
      handleScroll(deltaY, e);
    };

    // Usiamo window per catturare accuratamente l'input e bloccare la pagina
    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [activeIndex, events.length]);

  const goToEvent = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <PageTransition>
      <div className="h-[calc(100vh-4rem)] md:h-screen bg-zinc-950 text-white overflow-hidden relative flex flex-col pt-20">
        {/* Left Slider / Navigation Rail */}
        <div className="hidden md:flex fixed left-8 top-1/2 -translate-y-1/2 flex-col items-center h-2/3 z-20">
           {/* Timeline Bar */}
           <div className="relative h-full w-12 flex items-center">
             <div className="relative h-full w-0.5 bg-zinc-800 rounded-full mx-auto">
              <motion.div 
                className="absolute top-0 left-0 w-full bg-gradient-to-b from-purple-500 to-blue-500 rounded-full"
                animate={{ height: `${(activeIndex / (events.length - 1)) * 100}%` }}
                transition={{ duration: 0.5, ease: "circOut" }}
              />
              
              {/* Dots */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full flex flex-col justify-between py-0">
                 {events.map((_, idx) => (
                   <button
                     key={idx}
                     onClick={() => goToEvent(idx)}
                     className={`w-4 h-4 -ml-[7px] rounded-full border-2 transition-all duration-300 ${
                       idx === activeIndex 
                         ? "bg-white border-white scale-125 shadow-[0_0_10px_rgba(255,255,255,0.5)]" 
                         : idx < activeIndex 
                           ? "bg-purple-500 border-purple-500" 
                           : "bg-zinc-950 border-zinc-600 hover:border-zinc-400"
                     }`}
                   />
                 ))}
              </div>
             </div>
           </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex items-center justify-center relative w-full h-full">
           <AnimatePresence mode="wait">
             <motion.div
               key={activeIndex}
               className="w-full max-w-7xl mx-auto px-6 md:pl-32 flex flex-col md:flex-row items-center gap-8 md:gap-24"
               initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
               animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
               exit={{ opacity: 0, y: -50, filter: "blur(10px)" }}
               transition={{ duration: 0.6, ease: "anticipate" }}
             >
                {/* Text Content */}
                <div className="flex-1 space-y-6 md:space-y-8 order-2 md:order-1 text-center md:text-left">
                   <div className="space-y-4">
                      <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-2 text-purple-400 font-mono text-sm tracking-wider border border-purple-500/20 bg-purple-500/5 px-3 py-1 rounded-full"
                      >
                         <Calendar className="w-4 h-4" />
                         <span>{events[activeIndex].date}</span>
                      </motion.div>

                      <motion.h1 
                        className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        {events[activeIndex].title}
                      </motion.h1>
                   </div>

                   <motion.p 
                     className="text-base md:text-lg text-zinc-400 leading-relaxed max-w-lg mx-auto md:mx-0"
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     transition={{ delay: 0.4 }}
                   >
                     {events[activeIndex].description}
                   </motion.p>

                   <motion.div
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ delay: 0.5 }}
                     className="pt-2 flex items-center justify-center md:justify-start gap-4"
                   >
                     {(events[activeIndex].instagramPostUrl || events[activeIndex].linkedinPostUrl) && (
                       <>
                         <span className="text-zinc-400 font-medium">Discover more on</span>
                         <div className="flex gap-3">
                           {events[activeIndex].instagramPostUrl && (
                             <Button 
                               variant="ghost" 
                               size="icon"
                               className="text-pink-400 hover:text-pink-300 hover:bg-pink-400/10 rounded-full transition-all hover:scale-110"
                               onClick={() => window.open(events[activeIndex].instagramPostUrl, '_blank')}
                             >
                               <Instagram className="w-5 h-5" />
                             </Button>
                           )}
                           {events[activeIndex].linkedinPostUrl && (
                             <Button 
                               variant="ghost" 
                               size="icon"
                               className="text-blue-400 hover:text-blue-300 hover:bg-blue-400/10 rounded-full transition-all hover:scale-110"
                               onClick={() => window.open(events[activeIndex].linkedinPostUrl, '_blank')}
                             >
                               <Linkedin className="w-5 h-5" />
                             </Button>
                           )}
                         </div>
                       </>
                     )}
                   </motion.div>
                </div>

                {/* Image Content */}
                <div className="flex-1 order-1 md:order-2 w-full flex justify-center">
                   <motion.div 
                     className="relative aspect-[4/5] w-full max-w-[280px] sm:max-w-sm md:max-w-md rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border border-white/10"
                     initial={{ scale: 0.7, opacity: 0 }}
                     animate={{ scale: 0.8, opacity: 1 }}
                     transition={{ duration: 0.6, delay: 0.2 }}
                   >
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent z-10 opacity-60" />
                      <img 
                        src={events[activeIndex].imageUrl || ""} 
                        alt={events[activeIndex].title}
                        className="w-full h-full object-cover"
                      />
                   </motion.div>
                </div>
             </motion.div>
           </AnimatePresence>
        </div>
      </div>
    </PageTransition>
  );
}