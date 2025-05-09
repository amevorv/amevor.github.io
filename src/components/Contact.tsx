
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Interested in working together? Feel free to reach out through any of the channels below 
            or use the contact form to send me a message directly.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-xl font-medium mb-4">Contact Information</h3>
            
            <div className="space-y-4">
              <Card className="p-4 flex items-start gap-4">
                <Mail className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium">Email</p>
                  <a href="mailto:victoramevor7@gmail.com" className="text-foreground/70 hover:text-primary transition-colors">
                    victoramevor7@gmail.com
                  </a>
                </div>
              </Card>
              
              <Card className="p-4 flex items-start gap-4">
                <Phone className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium">Phone</p>
                  <a href="tel:+233245296501" className="text-foreground/70 hover:text-primary transition-colors">
                  (+233) 24 529 6501
                  </a>
                </div>
              </Card>
              
              <Card className="p-4 flex items-start gap-4">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-foreground/70">Achimota, G. Accra, Ghana</p>
                </div>
              </Card>
            </div>
            
            <div className="pt-6">
              <h3 className="text-xl font-medium mb-4">Connect</h3>
              <div className="flex gap-4">
                <a 
                  href="https://github.com/amevorv" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 flex items-center justify-center rounded-full bg-background border border-border hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a 
                  href="https://linkedin.com/in/vicoyce" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 flex items-center justify-center rounded-full bg-background border border-border hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="lg:col-span-3">
            <Card className="p-6">
              <h3 className="text-xl font-medium mb-6">Send Me a Message</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground/70 mb-1">
                      Full Name
                    </label>
                    <Input id="name" placeholder="John Doe" className="w-full" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground/70 mb-1">
                      Email Address
                    </label>
                    <Input id="email" type="email" placeholder="john@example.com" className="w-full" />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground/70 mb-1">
                    Subject
                  </label>
                  <Input id="subject" placeholder="How can I help you?" className="w-full" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground/70 mb-1">
                    Message
                  </label>
                  <Textarea id="message" placeholder="Write your message here..." className="w-full min-h-32" />
                </div>
                <Button 
                    className="w-full md:w-auto"  
                    onClick={(e) => {
                      e.preventDefault();
                      const name = (document.getElementById('name') as HTMLInputElement).value;
                      const email = (document.getElementById('email') as HTMLInputElement).value;
                      const subject = (document.getElementById('subject') as HTMLInputElement).value;
                      const message = (document.getElementById('message') as HTMLTextAreaElement).value;
                      const bodyContent = `Name: ${name}\n\n${message}`;
                      const encodedBody = encodeURIComponent(bodyContent);
                      const encodedSubject = encodeURIComponent(subject);
                      const mailtoLink = `mailto:victoramevor7@gmail.com?subject=${encodedSubject}&body=${encodedBody}`;
                      console.log(mailtoLink); // For debugging
                      window.location.href = mailtoLink;
                    }}>
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
