import React from 'react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="animate-fade-in min-h-screen font-display text-ink selection:bg-accent selection:text-white bg-paper flex flex-col">
      {children}
    </div>
  );
}