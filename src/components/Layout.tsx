
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { ThemeProvider } from 'next-themes';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <ThemeProvider defaultTheme="system" enableSystem>
      <div className="flex flex-col min-h-screen relative bg-background">
        <div className="fixed inset-0 -z-10 h-full w-full overflow-hidden">
          <div className="absolute w-96 h-96 blur-3xl rounded-full bg-primary/5 -top-48 -left-48 animate-blob"></div>
          <div className="absolute w-96 h-96 blur-3xl rounded-full bg-accent/5 top-1/2 left-1/2 animate-blob animation-delay-2000"></div>
          <div className="absolute w-96 h-96 blur-3xl rounded-full bg-secondary/5 -bottom-48 -right-48 animate-blob animation-delay-4000"></div>
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
