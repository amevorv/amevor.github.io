
import React from 'react';

const experiences = [
  {
    id: 1,
    domain: "Web / Mobile",
    companies: "PurpleWave Auction Ltd, Devops Africa Limited, TechnipFMC, Tech231 Liberia ...",
    role: "Software Development",
    description: "Lead and collaborated with cross-functional teams to design, develop, and deploy enterprise-scale software solutions. Utilized Agile methodologies to manage project timelines and deliverables effectively. Developed and maintained cloud-based applications using AWS and Azure services. Designed and implemented RESTful APIs and microservices architecture for scalable applications.",
    technologies: ["React", "Node.js", "AWS", "Kubernetes", "TensorFlow"]
  },
  {
    id: 2,
    domain: "Robotics / Web",
    companies: "Amalitech Services, Care R Us",
    role: "Software Development Training",
    description: "Conducted practical sessions to teach programming, robotics principles, and software tools. Designed and implemented training programs and materials tailored to software development and robotics. Stayed updated with the latest advancements in robotics and software development to incorporate them into training.",
    technologies: ["Python", "JavaScript", "HTML", "CSS", "ROS"]
  },
  {
    id: 3,
    domain: "Auto ML / Data Annotation",
    companies: "Exohaven, AyaData",
    role: "AI",
    description: "Engineered AI solutions for predictive analytics and process automation. Developed and deployed machine learning models for various applications, including natural language processing and computer vision. Collaborated with cross-functional teams to integrate AI solutions into existing systems and processes.",
    technologies: ["ReInforcement Learning", "TensorFlow", "OpenAPI"]
  },
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Professional Experience</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            My professional journey encompasses various domains across different domains,
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
                    {exp.role}
                  </span>
                </div>
                <h3 className="text-xl font-semibold">{exp.domain}</h3>
                <p className="text-foreground/70 font-medium">{exp.companies}</p>
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
