
import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import smartAIassistant from '@/assets/projects/smartassistant.png';
import calleva from '@/assets/projects/calleva.png';
import electconnect from '@/assets/projects/electconnect.png';
// import foodzup from '@/assets/projects/foodzup.png';
import oxafrica from '@/assets/projects/ox.jpg';
import lta from '@/assets/projects/manager.png';

const projectCategories = ['All', 'AI', 'Full Stack', 'Cloud & DevOps', 'Mobile', 'UI/UX'];

const projects = [
  {
    id: 1,
    title: 'AI-Powered Content Generator',
    description: 'A machine learning application that generates related content based on user inputs and domain knowledge.',
    image: smartAIassistant,
    categories: ['AI', 'Full Stack'],
    techStack: ['OpenAI API', 'Figma', 'React', 'Node.js'],
    liveDemo: 'https://amevorv.github.io',
    githubRepo: 'https://github.com/PurpleWave/smart-assistance',
  },
  {
    id: 2,
    title: 'Real-time Analytics Dashboard',
    description: 'An interactive dashboard that provides real-time insights and visualization of complex data sets.',
    image: electconnect,
    categories: ['Full Stack', 'Mobile', 'UI/UX'],
    techStack: ['React', 'Node.js', 'WebSockets', '.Net', 'Azure', 'Flutter', 'MySQL'],
    liveDemo: 'https://amevorv.github.io',
    githubRepo: 'https://github.com/Tech231Liberia/analytics-dashboard',
  },
  // {
  //   id: 3,
  //   title: 'Cross-Platform Mobile Apps',
  //   description: 'A feature-rich mobile applications that runs seamlessly on iOS and Android with a shared codebase.',
  //   image: foodzup,
  //   categories: ['Mobile', 'UI/UX', 'Cloud & DevOps'],
  //   techStack: ['Flutter', 'Firebase', 'Figma', 'GCP', 'Linux'],
  //   liveDemo: 'https://amevorv.github.io',
  //   githubRepo: 'https://github.com/Chop-money.co/mobile-app',
  // },
  {
    id: 4,
    title: 'Enterprise E-commerce Platform',
    description: 'A scalable e-commerce solution with advanced features like real-time inventory management and POS processing.',
    image: calleva,
    categories: ['Full Stack', 'UI/UX', 'Cloud & DevOps'],
    techStack: ['MongoDB', 'React', 'Node', 'MicroServices', 'Express'],
    liveDemo: 'https://amevorv.github.io/calleva',
    githubRepo: 'https://github.com/Tuls-org/calleva',
  },
  {
    id: 5,
    title: 'Process Management Platform',
    description: 'A comprehensive dashboard for managing and visualizing complex processes in real-time.',
    image: lta,
    categories: ['Full Stack', 'UI/UX', 'Cloud & DevOps'],
    techStack: ['React', 'Springboot', 'Java', 'Postgres', 'Docker'],
    liveDemo: 'https://amevorv.github.io',
    githubRepo: 'https://github.com/amevorv/allthrine_pages',
  },
  {
    id: 6,
    title: 'Agricultural Management Platform',
    description: 'A web-based platform for managing agricultural processes, including equipment management and resource allocation.',
    image: oxafrica,
    categories: ['Full Stack', 'Cloud & DevOps', 'UI/UX'],
    techStack: ['Github Actions', 'React', 'Lunacy'],
    liveDemo: 'https://amevorv.github.io/oxafrica',
    githubRepo: 'https://github.com/amevorv/oxafrica',
  },
];

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.categories.includes(activeCategory));

  return (
    <section id="projects" className="section-padding bg-muted/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Explore my recent work across different domains and technologies.
            Each project showcases my problem-solving approach and technical expertise.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {projectCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all
                ${activeCategory === category 
                  ? 'bg-primary text-white shadow-md shadow-primary/20' 
                  : 'bg-background hover:bg-background/80 text-foreground/70'
                }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
