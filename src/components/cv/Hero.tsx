import { motion } from "framer-motion";
import { Github, Linkedin, MessageCircle, ChevronDown } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex flex-col justify-center relative px-6 md:px-12 lg:px-24">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px),
                              linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto w-full relative z-10">
        {/* Terminal Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <span className="code-text text-primary text-sm md:text-base">{">"} Hola, mi nombre es</span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-gradient"
        >
          Andriely Casallas
        </motion.h1>

        {/* Role */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-2xl md:text-4xl lg:text-5xl font-bold text-muted-foreground mb-8"
        >
          Full Stack Developer
          <span className="block text-xl md:text-2xl lg:text-3xl mt-2 text-accent">
            Backend & Cloud Infrastructure Enthusiast
          </span>
        </motion.h2>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="terminal-card p-4 md:p-6 mb-8 max-w-2xl"
        >
          <div className="flex items-center gap-2 mb-3 pb-3 border-b border-border">
            <div className="w-3 h-3 rounded-full bg-destructive" />
            <div className="w-3 h-3 rounded-full bg-terminal-yellow" />
            <div className="w-3 h-3 rounded-full bg-primary" />
            <span className="ml-2 text-muted-foreground text-xs code-text">about.ts</span>
          </div>
          {/* Description */}
          <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
            <span className="text-terminal-purple">const</span> <span className="text-terminal-cyan">developer</span> ={" "}
            {"{"}
            <br />
            <span className="ml-4 text-foreground">
              education:{" "}
              <span className="text-primary">
                "Estudiante de Ingeniería de Software (7mo semestre) y Tecnólogo en ADSO"
              </span>
              ,
            </span>
            <br />
            <span className="ml-4 text-foreground">
              focus: <span className="text-accent">"Backend & Cloud Infrastructure Automation"</span>,
            </span>
            <br />
            <span className="ml-4 text-foreground">
              mindset: <span className="text-accent">"SRE & DevOps Culture"</span>
            </span>
            <br />
            {"}"};
          </p>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex items-center gap-4"
        >
          <a
            href="https://wa.me/573112284689?text=Hola%20Andriely,%20vi%20tu%20perfil%20y%20me%20gustaría%20agendar%20una%20reunión%20contigo."
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="WhatsApp"
          >
            <MessageCircle size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/alejandrocasallas"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="LinkedIn"
          >
            <Linkedin size={22} />
          </a>
          <a
            href="https://github.com/alejandrocasallas"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="GitHub"
          >
            <Github size={22} />
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        onClick={() => scrollToSection("experience")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors"
        aria-label="Scroll to experience"
      >
        <ChevronDown size={32} className="animate-bounce" />
      </motion.button>
    </section>
  );
};

export default Hero;
