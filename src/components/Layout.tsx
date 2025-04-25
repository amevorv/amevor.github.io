
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { ThemeProvider } from 'next-themes';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="flex flex-col min-h-screen relative bg-background text-foreground">
        <div className="fixed inset-0 -z-10 h-full w-full overflow-hidden">
          <div className="absolute w-96 h-96 blur-3xl rounded-full bg-primary/20 dark:bg-primary/20 -top-48 -left-48 animate-blob"></div>
          <div className="absolute w-96 h-96 blur-3xl rounded-full bg-accent/20 dark:bg-accent/20 top-1/2 left-1/2 animate-blob animation-delay-2000"></div>
          <div className="absolute w-96 h-96 blur-3xl rounded-full bg-secondary/20 dark:bg-secondary/20 -bottom-48 -right-48 animate-blob animation-delay-4000"></div>
          <div className="absolute w-72 h-72 blur-3xl rounded-full bg-primary/15 dark:bg-primary/15 top-1/4 right-1/4 animate-blob animation-delay-6000"></div>
          <div className="absolute w-64 h-64 blur-3xl rounded-full bg-accent/15 dark:bg-accent/15 bottom-1/4 left-1/4 animate-blob animation-delay-8000"></div>
        </div>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Layout;
