import About from '@/components/About';
import Contact from '@/components/Contact';
import Project from '@/components/Project';
import SectionCTA from '@/components/SectionCTA';
import Skills from '@/components/Skills';
import React from 'react';

const Home = () => {
  return (
   <div>
    <About />
    <Skills />
    <Project />
    <SectionCTA />
    <Contact />
   </div>
  );
};

export default Home;