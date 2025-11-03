import { useEffect, useRef, useState } from "react";

export const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-8 text-center">
            About <span className="text-primary">Me</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mt-16">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a creative professional passionate about pushing the boundaries of design and technology. 
                With expertise in AI-powered solutions and modern web development, I bring ideas to life with 
                precision and innovation.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Every project is an opportunity to create something extraordinary, combining aesthetic 
                excellence with cutting-edge functionality to deliver experiences that resonate.
              </p>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-card backdrop-blur-sm border border-primary/20 p-8 
                            shadow-[0_0_50px_hsl(var(--primary)/0.2)] hover:shadow-[0_0_80px_hsl(var(--primary)/0.3)] 
                            transition-all duration-500 group">
                <div className="h-full flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="text-6xl font-display font-bold text-primary">5+</div>
                    <div className="text-xl font-semibold">Years Experience</div>
                    <div className="text-muted-foreground">Crafting digital excellence</div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Design</span>
                      <span className="text-sm font-semibold">95%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-primary to-secondary w-[95%] rounded-full group-hover:animate-pulse" />
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Development</span>
                      <span className="text-sm font-semibold">90%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-primary to-secondary w-[90%] rounded-full group-hover:animate-pulse" />
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm">AI Integration</span>
                      <span className="text-sm font-semibold">88%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-primary to-secondary w-[88%] rounded-full group-hover:animate-pulse" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
