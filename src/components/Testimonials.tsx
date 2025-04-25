
import React from 'react';
import TestimonialCard from './TestimonialCard';

const testimonials = [
  {
    id: 1,
    content: "Working with this developer was a game-changer for our project. Their expertise in AI and cloud technologies helped us build a solution that exceeded our expectations. The code quality was exceptional and well-documented.",
    author: "Sarah Johnson",
    position: "CTO, FinTech Innovations",
    image: "https://randomuser.me/api/portraits/women/32.jpg"
  },
  {
    id: 2,
    content: "An exceptionally talented developer who delivered our mobile application on time and within budget. The attention to detail and commitment to creating a seamless user experience was impressive. Would definitely work with again.",
    author: "James Chen",
    position: "Product Manager, HealthTech Solutions",
    image: "https://randomuser.me/api/portraits/men/42.jpg"
  },
  {
    id: 3,
    content: "The full-stack expertise demonstrated on our e-commerce platform was remarkable. Not only did they solve complex technical challenges, but they also provided valuable insights that improved our overall architecture.",
    author: "Emily Rodriguez",
    position: "Director of Engineering, RetailConnect",
    image: "https://randomuser.me/api/portraits/women/22.jpg"
  },
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Client Testimonials</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Don't just take my word for it — here's what clients and colleagues have to say 
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
