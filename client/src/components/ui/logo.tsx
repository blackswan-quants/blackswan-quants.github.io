interface LogoProps {
  className?: string;
}

export function Logo({ className = "" }: LogoProps) {
  return (
    <img 
      src="/logo sf nero.png" 
      alt="Blackswan Quants Logo" 
      className={`w-auto object-contain ${className}`}
      style={{ 
        filter: 'brightness(1.2) contrast(1.1)', 
        width: className.includes('w-10') ? '40px' : (className.includes('w-8') ? '32px' : (className.includes('w-6') ? '24px' : '64px')),
        height: className.includes('h-10') ? '40px' : (className.includes('h-8') ? '32px' : (className.includes('h-6') ? '24px' : '64px')),
        display: 'block'
      }}
      onError={(e) => {
        console.error("Logo failed to load");
        e.currentTarget.src = "https://placehold.co/40x40/7c3aed/ffffff?text=BSQ";
      }}
    />
  );
}