
import React from 'react';
import { useTheme } from '@/hooks/useTheme';

export function GridBackground() {
  const { isDarkMode } = useTheme();
  
  return !isDarkMode ? <div className="grid-background" /> : null;
}
