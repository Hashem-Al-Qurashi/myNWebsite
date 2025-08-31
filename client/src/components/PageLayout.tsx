import React from 'react';

interface PageLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export function PageLayout({ children, className = '' }: PageLayoutProps) {
  return (
    <div className={`min-h-[calc(100vh-5rem)] bg-background relative overflow-hidden ${className}`}>
      {children}
    </div>
  );
}