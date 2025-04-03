import { useRef, useEffect, useState } from 'react';

interface AnimatedTitleProps {
  text: string;
  className?: string;
}

export function AnimatedTitle({ text, className = '' }: AnimatedTitleProps) {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  // Base brightness for desktop
  const BASE_OPACITY = 1.0;
  // Higher contrast for mobile display
  const MOBILE_OPACITY = 0.8;

  useEffect(() => {
    // Set initial state with appropriate brightness
    if (titleRef.current) {
      // Responsive brightness handling
      const handleResize = () => {
        if (window.innerWidth < 768) {
          titleRef.current!.style.opacity = MOBILE_OPACITY.toString();
        } else {
          titleRef.current!.style.opacity = BASE_OPACITY.toString();
        }
      };
      
      // Initial call and event listener
      handleResize();
      window.addEventListener('resize', handleResize);
      
      // Set initial position for the glow in the center
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        titleRef.current.style.setProperty('--glowX', `${centerX}px`);
        titleRef.current.style.setProperty('--glowY', `${centerY}px`);
      }
      
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (titleRef.current && containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      
      // Calculate cursor position relative to the container
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Update the CSS variables for the mask position
      // This controls where the glowing effect is visible
      titleRef.current.style.setProperty('--glowX', `${x}px`);
      titleRef.current.style.setProperty('--glowY', `${y}px`);
    }
  };

  return (
    <div 
      ref={containerRef}
      className="relative"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h1 
        ref={titleRef}
        className={`text-outline relative z-10 ${className} ${isHovered ? 'hovered' : ''}`}
      >
        {text}
      </h1>
    </div>
  );
}