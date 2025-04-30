
import React from 'react';
import TestimonialCard from './TestimonialCard';

const testimonials = [
  {
    id: 1,
    content: "Victor is an exceptional Full Stack Developer who excels in both frontend and backend development. His technical expertise, problem-solving skills, and collaborative mindset make him a standout team player. As a Tech Lead, I’ve relied on his ability to deliver high-quality solutions, optimize performance, and mentor others. Victor doesn’t just meet expectations—he exceeds them, raising the bar for the entire team. Any organization would be lucky to have him.",
    author: "Daniel Rockson",
    position: "Project Technical Lead Developer, Tech231 Liberia",
    image: ""
  },
  {
    id: 2,
    content: "An exceptionally talented and highly skilled developer who delivered optimum uptime for our mobile application with remarkable efficiency, ensuring all timelines were met and within budget. His meticulous attention to detail, combined with a deep commitment to delivering a seamless and user-friendly experience, was truly impressive. He displayed an unparalleled ability to solve complex challenges and proactively improve system performance. I would enthusiastically collaborate with him again in the future.",
    author: "Okatakyie Opoku-Badu",
    position: "Founder, Chopmoney Co.",
    image: ""
  },
  {
    id: 3,
    content: "Working alongside Victor was a remarkable experience, as his expertise was instrumental in the success of our AI project, which earned the 1st runner-up position in a compan-wide hackathon. His deep knowledge of AI technologies and full stack development, coupled with his collaborative spirit, significantly contributed to the innovative and practical nature of our project. His problem-solving abilities and team-oriented approach made them an invaluable asset to our team.",
    author: "Kebede Martey",
    position: "Full Stack Developer, PurpleWave Auction Ltd",
    image: ""
  },
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Testimonials</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Don't just take my word for it — here's what colleagues have to say 
            about their experiences working with me on various projects.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
