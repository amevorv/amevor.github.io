
import React from 'react';

const experiences = [
  {
    id: 1,
    role: "Senior Software Engineer",
    company: "TechInnovate Solutions",
    period: "2021 - Present",
    description: "Lead development of enterprise-scale applications using microservices architecture. Engineered AI solutions for predictive analytics and process automation. Mentored junior developers and established best practices.",
    technologies: ["React", "Node.js", "AWS", "Kubernetes", "TensorFlow"]
  },
  {
    id: 2,
    role: "Full Stack Developer",
    company: "Digital Dynamics",
    period: "2018 - 2021",
    description: "Designed and implemented scalable cloud-native applications. Developed mobile applications using Flutter for cross-platform deployment. Created RESTful APIs and GraphQL endpoints for client applications.",
    technologies: ["Flutter", "React", "Java", "Spring Boot", "Google Cloud"]
  },
  {
    id: 3,
    role: "Mobile Application Developer",
    company: "AppSphere Inc.",
    period: "2016 - 2018",
    description: "Built native iOS and Android applications for enterprise clients. Implemented CI/CD pipelines for streamlined deployment. Collaborated with UI/UX designers to create intuitive user experiences.",
    technologies: ["Swift", "Kotlin", "RESTful APIs", "Firebase"]
  },
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Professional Experience</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            My professional journey spans various roles across different domains,
            giving me a diverse perspective on software development challenges.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="relative pl-8 pb-12 last:pb-0">
              {/* Timeline line */}
              {index < experiences.length - 1 && (
                <div className="absolute left-3 top-6 bottom-0 w-px bg-border"></div>
              )}
              
              {/* Timeline dot */}
              <div className="absolute left-0 top-1.5 h-6 w-6 rounded-full bg-primary flex items-center justify-center">
                <div className="h-2 w-2 rounded-full bg-primary-foreground"></div>
              </div>
              
              <div className="space-y-2">
                <div>
                  <span className="inline-block py-1 px-3 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    {exp.period}
                  </span>
                </div>
                <h3 className="text-xl font-semibold">{exp.role}</h3>
                <p className="text-foreground/70 font-medium">{exp.company}</p>
                <p className="text-foreground/80 py-2">{exp.description}</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-3 py-1 bg-background rounded-full text-xs font-medium text-foreground/70 border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
