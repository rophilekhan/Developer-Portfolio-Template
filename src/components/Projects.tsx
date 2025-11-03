import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "AI Dashboard",
    description: "Advanced analytics platform with machine learning insights",
    category: "Web Application",
    color: "from-cyan-500 to-blue-500",
  },
  {
    title: "E-Commerce Platform",
    description: "Modern shopping experience with seamless checkout",
    category: "Full Stack",
    color: "from-blue-500 to-purple-500",
  },
  {
    title: "Portfolio Studio",
    description: "Creative showcase with stunning animations",
    category: "Design System",
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Mobile App UI",
    description: "Intuitive interface for social networking",
    category: "UI/UX Design",
    color: "from-pink-500 to-rose-500",
  },
  {
    title: "SaaS Platform",
    description: "Cloud-based solution for team collaboration",
    category: "Web Application",
    color: "from-amber-500 to-orange-500",
  },
  {
    title: "AI Assistant",
    description: "Intelligent chatbot with natural language processing",
    category: "AI/ML",
    color: "from-emerald-500 to-teal-500",
  },
];

export const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setVisibleProjects((prev) => [...prev, index]);
          }
        });
      },
      { threshold: 0.2 }
    );

    const projectCards = sectionRef.current?.querySelectorAll("[data-index]");
    projectCards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Showcasing my latest work and creative endeavors
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              data-index={index}
              className={`transition-all duration-700 delay-${index * 100} ${
                visibleProjects.includes(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <Card className="group bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/30 
                             transition-all duration-500 overflow-hidden h-full cursor-pointer
                             hover:shadow-[0_0_40px_hsl(var(--primary)/0.2)]">
                <div className={`h-48 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <ExternalLink className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="text-sm text-primary mb-2 font-semibold">
                    {project.category}
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {project.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
