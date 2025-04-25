
import React from 'react';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';

const Index: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <Projects />
      <Skills />
      <Experience />
      <Testimonials />
      <Contact />
    </Layout>
  );
};

export default Index;
