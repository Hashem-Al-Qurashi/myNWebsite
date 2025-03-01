
import React, { useEffect, useState } from 'react';
import { useTheme } from '@/hooks/useTheme';

export function GridBackground() {
  const { isDarkMode } = useTheme();
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div 
      className={`parallax-grid ${isDarkMode ? 'dark-grid' : 'light-grid'}`}
      style={{
        transform: `translateY(${scrollY * 0.1}px)`,
      }}
    />
  );
}
