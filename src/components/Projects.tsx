
import React, { useState } from 'react';
import ProjectCard from './ProjectCard';

const projectCategories = ['All', 'AI', 'Full Stack', 'Cloud & DevOps', 'Mobile', 'UI/UX'];

const projects = [
  {
    id: 1,
    title: 'AI-Powered Content Generator',
    description: 'A machine learning application that generates SEO-optimized content based on user inputs and industry trends.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
    categories: ['AI', 'Full Stack'],
    techStack: ['Python', 'TensorFlow', 'React', 'Node.js', 'MongoDB'],
    liveDemo: 'https://example.com/demo',
    githubRepo: 'https://github.com/username/ai-content-generator',
  },
  {
    id: 2,
    title: 'Cloud Deployment Pipeline',
    description: 'An automated CI/CD pipeline that streamlines the deployment process for microservices-based applications.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
    categories: ['Cloud & DevOps'],
    techStack: ['AWS', 'Docker', 'Kubernetes', 'Jenkins', 'Terraform'],
    liveDemo: 'https://example.com/demo',
    githubRepo: 'https://github.com/username/cloud-deployment-pipeline',
  },
  {
    id: 3,
    title: 'Cross-Platform Mobile App',
    description: 'A feature-rich mobile application that runs seamlessly on iOS and Android with a shared codebase.',
    image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80',
    categories: ['Mobile', 'UI/UX'],
    techStack: ['Flutter', 'Firebase', 'Bloc', 'Figma'],
    liveDemo: 'https://example.com/demo',
    githubRepo: 'https://github.com/username/cross-platform-app',
  },
  {
    id: 4,
    title: 'Enterprise E-commerce Platform',
    description: 'A scalable e-commerce solution with advanced features like real-time inventory management and AI-based recommendations.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80',
    categories: ['Full Stack', 'UI/UX'],
    techStack: ['Java', 'Spring Boot', 'React', 'PostgreSQL', 'Redis'],
    liveDemo: 'https://example.com/demo',
    githubRepo: 'https://github.com/username/ecommerce-platform',
  },
  {
    id: 5,
    title: 'Real-time Analytics Dashboard',
    description: 'An interactive dashboard that provides real-time insights and visualization of complex data sets.',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80',
    categories: ['Full Stack', 'AI', 'UI/UX'],
    techStack: ['React', 'D3.js', 'Node.js', 'WebSockets', 'MongoDB'],
    liveDemo: 'https://example.com/demo',
    githubRepo: 'https://github.com/username/analytics-dashboard',
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
