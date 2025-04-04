import { EventCard } from "@/components/event-card";
import { PageTransition } from "@/components/page-transition";
import { type Event } from "@shared/schema";
import { ProgressSection } from "@/components/progress-section";
import { useState, useEffect } from "react";
import { events as staticEvents } from "@/data/static-data";

export default function Events() {
  const [events, setEvents] = useState<Event[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading to maintain the same user experience
    const timer = setTimeout(() => {
      setEvents(staticEvents);
      setIsLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <PageTransition>
      <div className="min-h-screen bg-zinc-950 flex flex-col overflow-hidden">
        <div className="pt-16 md:pt-0">
          <ProgressSection />
        </div>

        <div className="container mx-auto px-4 py-8 md:py-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-sm font-medium text-zinc-400 mb-4 md:mb-6 pl-1">
              All Events
            </h2>

            {isLoading ? (
              <div className="space-y-3 md:space-y-4">
                {[...Array(2)].map((_, i) => (
                  <div 
                    key={i} 
                    className="h-16 bg-zinc-900/30 rounded-lg"
                  />
                ))}
              </div>
            ) : (
              <div className="space-y-3 md:space-y-4">
                {events.map((event) => (
                  <div
                    key={event.id}
                    className="w-full"
                  >
                    <EventCard event={event} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}