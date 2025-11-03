import { Github, Linkedin, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-primary/10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <div className="text-2xl font-display font-bold mb-2">
              AI <span className="text-primary">Portfolio</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2025 All rights reserved
            </p>
          </div>

          <div className="flex gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-card/50 backdrop-blur-sm border border-primary/10 
                       hover:border-primary/30 flex items-center justify-center transition-all duration-300
                       hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)]"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-card/50 backdrop-blur-sm border border-primary/10 
                       hover:border-primary/30 flex items-center justify-center transition-all duration-300
                       hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)]"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-card/50 backdrop-blur-sm border border-primary/10 
                       hover:border-primary/30 flex items-center justify-center transition-all duration-300
                       hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)]"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
