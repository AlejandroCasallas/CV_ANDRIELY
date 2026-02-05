import { motion } from "framer-motion";
import { ExternalLink, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    role: "Analista Cloud JR",
    company: "Montechelo",
    period: "Oct 2024 – May 2025",
    highlights: [
      "Automatización de servidores y tareas operativas con Bash, Python y Ansible, reduciendo hasta 70% de intervenciones manuales",
      "Orquestación de pipelines CI/CD con Jenkins y API de Azure para el provisionamiento dinámico de infraestructura y configuración de Nginx",
      "Contenerización de servicios internos utilizando Docker para estandarizar entornos de desarrollo, pruebas y despliegue",
      "Implementación de Webhooks y automatización de despliegues event-driven con notificaciones de estado vía email",
      "Gobernanza de Git (GitFlow Enforcer): Administración del repositorio principal asegurando trazabilidad en Pull Requests y estándares de código",
      "Soporte en infraestructura empresarial sobre Nutanix y automatización con Terraform para la creación de MVs",
    ],
    tags: ["Jenkins", "Python", "Ansible", "Terraform", "Docker", "Azure API", "Linux", "Nginx", "Bash"],
  },
  {
    role: "Desarrollador Full Stack & DB Manager",
    company: "SENA - Fábrica de Software",
    period: "Mar 2024 – Nov 2024",
    link: "https://synchronize-center.com/",
    projectName: "Synchronize",
    highlights: [
      "Desarrollo del backend del proyecto Synchronize utilizando PHP, estructurando módulos tipo API mediante reglas de enrutamiento",
      "Diseño, normalización y mantenimiento de bases de datos relacionales (MySQL), optimizando modelos y consultas",
      "Construcción de endpoints para CRUD, autenticación y manejo de sesiones con consumo desde JS puro",
      "Refactorización del código bajo principios de Clean Code y arquitectura por capas para mejorar la escalabilidad",
      "Trabajo bajo metodología Scrum utilizando Git para el control de versiones y revisiones de código en equipo",
    ],
    tags: ["PHP", "MySQL", "JavaScript", "Clean Code", "Scrum", "GitFlow", "SMTP", "Analisis de Procesos"],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          Experiencia de Impacto
        </motion.h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="terminal-card"
            >
              {/* Terminal Header */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-secondary/30">
                <div className="w-3 h-3 rounded-full bg-destructive" />
                <div className="w-3 h-3 rounded-full bg-terminal-yellow" />
                <div className="w-3 h-3 rounded-full bg-primary" />
                <span className="ml-2 text-muted-foreground text-xs code-text">
                  {exp.company.toLowerCase().replace(/\s/g, "-")}.log
                </span>
              </div>

              <div className="p-6">
                {/* Role & Company */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-1">{exp.role}</h3>
                    <div className="flex items-center gap-2 text-primary font-medium">
                      <MapPin size={14} />
                      <span>{exp.company}</span>
                      {exp.link && (
                        <a
                          href={exp.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-accent hover:underline"
                        >
                          <span className="text-sm">({exp.projectName})</span>
                          <ExternalLink size={12} />
                        </a>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm mt-2 md:mt-0">
                    <Calendar size={14} />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Highlights */}
                <ul className="space-y-2 mb-4">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground text-sm">
                      <span className="text-primary mt-1.5 text-xs">▹</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.tags.map((tag) => (
                    <span key={tag} className="tech-badge-primary text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
