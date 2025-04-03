
import { useEffect, ReactNode } from 'react';

interface PageTransitionProps {
  children: ReactNode;
}

export function PageTransition({ children }: PageTransitionProps) {
  useEffect(() => {
    // Fade in content when component mounts
    const fadeElements = document.querySelectorAll('.page-fade-in');
    fadeElements.forEach((element, index) => {
      setTimeout(() => {
        (element as HTMLElement).style.opacity = '1';
        (element as HTMLElement).style.transform = 'translateY(0)';
      }, 100 * index);
    });
  }, []);

  return (
    <div className="page-transition relative">
      {children}
    </div>
  );
}
