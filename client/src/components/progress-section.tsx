import React from "react";
import { motion } from "framer-motion";

export const ProgressSection = (): JSX.Element => {
  const timelineEvents = [
    {
      date: "OCTOBER 2024",
      title: "BlackSwan was born",
      description: "Our quantitative finance club was officially founded",
      current: true
    },
    {
      date: "MARCH 2025",
      title: "StartHack25",
    },
    {
      date: "MAY 2025",
      title: "Talk & Collaboration",
      description: "Collaboration with a partner club",
    },
  ];

  // Text animation variants - fade in and subtle highlighting, NO floating
  const titleVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  const paragraphVariants = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({ 
      opacity: 1,
      transition: { 
        duration: 0.5, 
        delay: 0.2 + (i * 0.1),
        ease: "easeOut"
      }
    })
  };

  const timelineVariants = {
    hidden: { width: 0 },
    visible: { width: "100%", transition: { duration: 1.5, ease: "easeInOut" } }
  };

  const eventVariants = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      transition: { 
        duration: 0.3, 
        delay: 0.6 + (i * 0.15),
        ease: "easeOut"
      }
    })
  };

  return (
    <section className="w-full py-12 md:py-24 px-4 md:px-8 bg-zinc-950">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8 md:gap-16 mb-16 md:mb-24">
          <motion.h2 
            className="text-4xl md:text-[80px] leading-[1] font-medium text-zinc-200"
            variants={titleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Our path of progress
          </motion.h2>
          <div className="max-w-[540px] text-lg md:text-[22px] leading-[1.4]">
            <motion.p 
              className="text-purple-400 mb-4"
              variants={paragraphVariants}
              initial="hidden"
              whileInView="visible"
              custom={0}
              viewport={{ once: true }}
            >
              Our network gives our quants the possibility to connect with financial institutions and big players, finally bridging the gap between university and real world.
            </motion.p>
            <motion.p 
              className="text-zinc-400"
              variants={paragraphVariants}
              initial="hidden"
              whileInView="visible"
              custom={1}
              viewport={{ once: true }}
            >
              We never miss an opportunity to test our skills in local and global hackathons and competitions.
            </motion.p>
          </div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <motion.div 
            className="absolute left-0 right-0 h-px bg-zinc-800"
            variants={timelineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          />

          {/* Timeline events */}
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                className="relative"
                variants={eventVariants}
                initial="hidden"
                whileInView="visible"
                custom={index}
                viewport={{ once: true }}
              >
                {/* Date */}
                <div className="text-[13px] text-zinc-600 mb-4 md:absolute md:-top-8 md:left-1/2 md:-translate-x-1/2">
                  {event.date}
                </div>

                {/* Dot */}
                <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2">
                  <div
                    className={`w-2 h-2 rounded-full ${
                      event.current
                        ? "bg-orange-500 ring-4 ring-orange-500/20"
                        : "bg-zinc-600"
                    }`}
                  />
                </div>

                {/* Event content */}
                <div className="mt-4 md:mt-8 md:text-center">
                  <h3 className={`text-lg font-medium mb-2 ${
                    event.current ? "text-zinc-200" : "text-zinc-500"
                  }`}>
                    {event.title}
                  </h3>
                  {event.description && (
                    <p className={`${
                      event.current ? "text-zinc-600" : "text-zinc-700 text-sm"
                    }`}>
                      {event.description}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};