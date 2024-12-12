import React, { ReactNode } from 'react';

interface PageContainerProps {
  children: ReactNode;
  title: string;
}

export function PageContainer({ children, title }: PageContainerProps) {
  return (
    <div className="mobile-container pb-20">
      <div className="mobile-card">
        <h1 className="text-xl font-bold mb-6">{title}</h1>
        {children}
      </div>
    </div>
  );
}
