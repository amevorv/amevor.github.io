
import React from 'react';
import SkillCard from './SkillCard';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "AI & Machine Learning",
      icon: "🧠",
      skills: ["TensorFlow", "Natural Language Processing", "Computer Vision", "Reinforcement Learning"]
    },
    {
      title: "Full Stack Development",
      icon: "🌐",
      skills: ["React", "Node.js", "Express", "Spring Boot", "PostgreSQL", "MongoDB", "GraphQL", "RESTful APIs"]
    },
    {
      title: "Cloud & DevOps",
      icon: "☁️",
      skills: ["AWS", "Google Cloud", "Docker", "Kubernetes", "CI/CD", "Cloud Formation", "Docker", "Microservices"]
    },
    {
      title: "Mobile Development",
      icon: "📱",
      skills: ["Flutter", "Mobile UX Design", "Cross-platform Development"]
    },
    {
      title: "UI/UX Design",
      icon: "🎨",
      skills: ["Figma", "Wireframing", "Prototyping", "Usability Testing", "Responsive Design"]
    },
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Technical Expertise</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Over the span of {new Date().getFullYear() - 2016} years, I've developed expertise across multiple domains
            and technologies, allowing me to tackle complex challenges with a holistic approach.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <SkillCard key={category.title} category={category} />
          ))}
        </div>
        
        <div className="mt-20 bg-muted/30 rounded-xl p-8 border border-border">
          <h3 className="text-xl font-medium mb-6 text-center">Languages & Technologies</h3>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {[
              "JavaScript", "TypeScript", "Python", "Java", "Dart", 
              "HTML/CSS", "SQL", "NoSQL", "GraphQL", "REST", "WebSockets",
              "React", "Node.js", "Express", "Spring Boot", "Flutter", "AWS", "GCP",
              "Docker", "Kubernetes", "Terraform", "CI/CD"
            ].map((tech) => (
              <span 
                key={tech} 
                className="px-4 py-2 bg-background rounded-full text-sm font-medium text-foreground/80 border border-border"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
