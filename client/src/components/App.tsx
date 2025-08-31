import React from 'react';

// This is a wrapper component for all pages
export function AppWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      {children}
    </div>
  );
}