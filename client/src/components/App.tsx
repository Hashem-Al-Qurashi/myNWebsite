
import React from 'react';
import { GridBackground } from './GridBackground';

// This is a wrapper component to apply the grid background to all pages
export function AppWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      <GridBackground />
      {children}
    </div>
  );
}
