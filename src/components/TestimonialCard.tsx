
import React from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface Testimonial {
  id: number;
  content: string;
  author: string;
  position: string;
  image: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  const initials = testimonial.author
    .split(' ')
    .map(name => name[0])
    .join('');

  return (
    <Card className="h-full hover:shadow-md transition-all duration-300">
      <CardContent className="pt-6">
        <div className="mb-6">
          <svg className="h-8 w-8 text-primary/30" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 8c-2.2 0-4.1.8-5.6 2.3C3 11.8 2 13.7 2 16c0 2.3 1 4.2 2.4 5.6C5.9 23.2 7.8 24 10 24c2.2 0 4.1-.8 5.6-2.4C17 20.2 18 18.3 18 16c0-1.7-.7-3.2-1.5-4.4-.9-1.2-2-2.2-3.3-3-.5-.3-1.1.1-1 .7.3 2-.4 3.5-1.5 4.8-.6.7-1.3 1.3-2.1 1.9 0-.1.1-.1.1-.2.6-1.1 1-2.2 1-3.4 0-1.1-.2-2.2-.7-3.1-.4-.9-1.1-1.6-1.9-2.1-.3-.2-.7-.2-.9 0-.2.2-.2.5-.2.8z" />
            <path d="M24 8c-2.2 0-4.1.8-5.6 2.3-1.4 1.5-2.4 3.4-2.4 5.7 0 2.3 1 4.2 2.4 5.6 1.5 1.6 3.4 2.4 5.6 2.4 2.2 0 4.1-.8 5.6-2.4 1.4-1.4 2.4-3.3 2.4-5.6 0-1.7-.7-3.2-1.5-4.4-.9-1.2-2-2.2-3.3-3-.5-.3-1.1.1-1 .7.3 2-.4 3.5-1.5 4.8-.6.7-1.3 1.3-2.1 1.9 0-.1.1-.1.1-.2.6-1.1 1-2.2 1-3.4 0-1.1-.2-2.2-.7-3.1-.4-.9-1.1-1.6-1.9-2.1-.3-.2-.7-.2-.9 0-.2.2-.2.5-.2.8z" />
          </svg>
        </div>
        <p className="text-foreground/80 mb-6">{testimonial.content}</p>
      </CardContent>
      <CardFooter className="flex items-center gap-4 pt-0">
        <Avatar>
          <AvatarImage src={testimonial.image} alt={testimonial.author} />
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
        <div>
          <p className="font-medium">{testimonial.author}</p>
          <p className="text-sm text-foreground/70">{testimonial.position}</p>
        </div>
      </CardFooter>
    </Card>
  );
};

export default TestimonialCard;
