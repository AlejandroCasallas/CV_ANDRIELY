import { motion } from "framer-motion";
import { Github, Linkedin, MessageCircle, Mail, Globe } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 md:px-12 lg:px-24 bg-card/30">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-title justify-center"
        >
          Contacto
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-muted-foreground mb-8 max-w-xl mx-auto"
        >
          ¿Interesado en trabajar juntos? Estoy abierto a nuevas oportunidades y colaboraciones en proyectos de
          desarrollo backend y cloud.
        </motion.p>

        {/* Contact Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-10"
        >
          <a
            href="https://wa.me/573112284689?text=Hola%20Andriely,%20vi%20tu%20perfil%20y%20me%20gustaría%20agendar%20una%20reunión%20contigo."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-bold text-lg transition-all duration-300 hover:glow-primary hover:scale-105"
          >
            <MessageCircle size={24} />
            Contáctame por WhatsApp
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex items-center justify-center gap-6"
        >
          <a
            href="https://www.linkedin.com/in/alejandrocasallas"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://github.com/alejandrocasallas"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
          <a href="mailto:casallas17032007@gmail.com" className="social-link" aria-label="Email">
            <Mail size={24} />
          </a>
        </motion.div>

        {/* Language Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 flex flex-col items-center justify-center gap-3 p-6 rounded-lg bg-card/50 border border-border/50 max-w-md mx-auto"
        >
          <div className="flex items-center gap-2">
            <Globe size={24} className="text-primary" />
            <span className="text-lg font-semibold text-foreground">Idiomas</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 text-base">
            <span className="px-4 py-2 rounded-md bg-primary/10 border border-primary/30">
              <span className="text-foreground font-medium">Inglés</span>{" "}
              <span className="text-primary font-bold">B2 Certificado</span>
            </span>
            <span className="px-4 py-2 rounded-md bg-secondary/50 border border-border">
              <span className="text-foreground font-medium">Español</span>{" "}
              <span className="text-muted-foreground">Nativo</span>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
