import { useEffect, useRef, useState } from "react";
import { Code2, Palette, Brain, Layers } from "lucide-react";

const skills = [
  {
    icon: Code2,
    title: "Development",
    items: ["React", "TypeScript", "Node.js", "Python"],
  },
  {
    icon: Palette,
    title: "Design",
    items: ["UI/UX", "Figma", "Tailwind", "Animation"],
  },
  {
    icon: Brain,
    title: "AI/ML",
    items: ["OpenAI", "TensorFlow", "NLP", "Computer Vision"],
  },
  {
    icon: Layers,
    title: "Tools",
    items: ["Git", "Docker", "AWS", "Vercel"],
  },
];

export const Skills = () => {
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
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-4">
            Skills & <span className="text-primary">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Technologies and tools I work with
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`transition-all duration-700 delay-${index * 100} ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="p-8 rounded-2xl bg-gradient-card backdrop-blur-sm border border-primary/10 
                            hover:border-primary/30 transition-all duration-500 group h-full
                            hover:shadow-[0_0_40px_hsl(var(--primary)/0.2)]">
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 
                              group-hover:scale-110 transition-transform duration-500">
                  <skill.icon className="w-8 h-8 text-primary" />
                </div>
                
                <h3 className="text-2xl font-display font-bold mb-4 group-hover:text-primary transition-colors">
                  {skill.title}
                </h3>
                
                <ul className="space-y-2">
                  {skill.items.map((item, i) => (
                    <li key={i} className="flex items-center text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
