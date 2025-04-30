
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/brands/hero@3x.png";
import purplewave from "@/assets/brands/purplewave.png";
import devops from "@/assets/brands/devops.png";
import amalitech from "@/assets/brands/amalitech.png";
import tech231 from "@/assets/brands/tech231.png";
import technip from "@/assets/brands/technip.png";
import ayadata from "@/assets/brands/ayadata.png";
import infosource from "@/assets/brands/infosource.png";
const cvLink = "https://1drv.ms/w/c/8192dfa2b0486ace/Ebj2P7zEotVPlYnMmAoTc54B55ROW-kTP6G_WKYR7fRESQ?e=v0HqxD"

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center section-padding pt-24">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[50vh] bg-gradient-to-br from-primary/10 to-accent/10 rounded-b-[100%] transform scale-125 dark:from-primary/20 dark:to-accent/20"></div>
      </div>
      
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3 space-y-6 animate-fade-in">
            <div className="animate-[fade-in_0.3s_ease-out_0.1s]">
              <span className="inline-block py-1 px-3 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4 animate-pulse">
                {new Date().getFullYear() - 2016}+ Years of Experience
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight animate-[fade-in_0.3s_ease-out_0.2s]">
              <span className="block">Hi, I'm Victor Amevor</span>
              <span className="gradient-text">Software Developer</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 max-w-2xl animate-[fade-in_0.3s_ease-out_0.3s]">
              Specializing in building exceptional digital experiences with expertise in 
              AI, Full Stack, Cloud & DevOps, Mobile and UI/UX design.
            </p>
            <div className="flex flex-wrap gap-4 pt-4 animate-[fade-in_0.3s_ease-out_0.4s]">
              <Button size="lg" className="group relative overflow-hidden bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary transition-all duration-500" onClick={() => window.location.href='#projects'}>
                <span className="relative z-10 flex items-center">
                  My Projects
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Button>
              <Button size="lg" variant="outline" className="group border-primary/50 hover:border-primary"  onClick={() => window.open(cvLink, '_blank')}>
                View Resume
              </Button>
            </div>
            
              <div className="pt-10 animate-[fade-in_0.3s_ease-out_0.5s]">
                <p className="text-sm text-foreground/60 mb-4">Experience with leading brands</p>
                
                <div className="flex flex-wrap gap-2 items-center">
                  {[
                    { src: technip, alt: "TechnipFMC" },
                    { src: purplewave, alt: "Purple Wave" },
                    { src: devops, alt: "Devops Africa" },
                    { src: amalitech, alt: "Amalitech" },
                    { src: tech231, alt: "Tech231 Liberia" },
                    { src: infosource, alt: "InfoSource Solutions" },
                    { src: ayadata, alt: "AyaData" },
                  ].map((brand, index) => (
                    <div
                      key={index}
                      className="h-8 opacity-80 hover:grayscale hover:opacity-100"
                    >
                      <img src={brand.src} alt={brand.alt} className="h-full" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          <div className="lg:col-span-2 flex justify-center animate-[fade-in_0.3s_ease-out_0.6s]">
            <div className="relative w-64 h-64 md:w-80 md:h-80 animate-float">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/60 to-accent/60 opacity-30 blur-2xl"></div>
              <div className="relative w-full h-full rounded-full bg-muted flex items-center justify-center overflow-hidden border-2 border-primary/20 hover:border-primary/50 transition-all duration-500">
                <img 
                  src={heroImage} 
                  alt="Developer working on code" 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="absolute -right-1 -bottom-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-xl font-bold animate-pulse">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
