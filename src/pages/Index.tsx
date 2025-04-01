
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Remove any bouncing animations by adding this class to the body
    document.body.classList.add('no-bounce');
    
    return () => {
      document.body.classList.remove('no-bounce');
    };
  }, []);
  
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <Navbar />
      <Hero />
      <Features />
    </div>
  );
};

export default Index;
