import { Calendar, Clock } from "lucide-react";
import type { Event } from "@shared/schema";

export function EventCard({ event }: { event: Event }) {
  const isComingSoon = event.isComingSoon;
  
  return (
    <div
      className="flex items-center justify-between border-b border-zinc-800/50 rounded-lg p-3 md:p-4"
    >
      <div>
        <div className="flex items-center">
          <h3 className="text-base font-medium text-zinc-300">{event.title}</h3>
          {isComingSoon && (
            <span className="ml-3 text-[10px] font-semibold bg-purple-950/50 text-purple-400/80 px-2 py-0.5 rounded-full">
              COMING SOON
            </span>
          )}
        </div>
        <p className="text-sm text-zinc-500 mt-1">{event.description}</p>
      </div>
      <div className="flex items-center text-purple-400/80 shrink-0 ml-4">
        {isComingSoon ? (
          <Clock className="w-3.5 h-3.5 mr-2" />
        ) : (
          <Calendar className="w-3.5 h-3.5 mr-2" />
        )}
        <time dateTime={event.date} className="text-xs text-purple-400/60">
          {event.date}
        </time>
      </div>
    </div>
  );
}