 import { motion } from "framer-motion";
 
 const techCategories = [
   {
     title: "Backend",
     label: "Dominio",
     color: "primary",
     techs: [
       { name: "Python (FastAPI)", level: "Fuerte" },
       { name: "Java (Spring)", level: "Bases" },
       { name: "PHP", level: "Fuerte" },
       { name: "Node.js", level: "Intermedio" },
     ],
   },
   {
     title: "Cloud / DevOps",
     label: "Dominio",
     color: "accent",
     techs: [
       { name: "AWS (EC2, S3, RDS)", level: "Junior" },
       { name: "Terraform", level: "Bases" },
       { name: "Docker", level: "Intermedio" },
       { name: "Azure DevOps", level: "Junior" },
       { name: "CI/CD Pipelines", level: "Intermedio" },
       { name: "Jenkins", level: "Intermedio" },
     ],
   },
   {
     title: "Bases de Datos",
     label: "Dominio",
     color: "primary",
     techs: [
       { name: "MySQL", level: "Fuerte" },
       { name: "SQL Server", level: "Bases" },
       { name: "MongoDB", level: "Básico" },
     ],
   },
   {
     title: "Frontend & Mobile",
     label: "En Aprendizaje",
     color: "muted",
     techs: [
       { name: "Angular", level: "En proceso" },
       { name: "Flutter", level: "En proceso" },
       { name: "JavaScript", level: "Intermedio" },
       { name: "HTML5 / CSS3", level: "Intermedio" },
     ],
   },
 ];
 
 const TechStack = () => {
   return (
     <section id="stack" className="py-20 px-6 md:px-12 lg:px-24 bg-card/30">
       <div className="max-w-4xl mx-auto">
         <motion.h2
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5 }}
           className="section-title"
         >
           Stack Tecnológico
         </motion.h2>
 
         <div className="grid md:grid-cols-2 gap-6">
           {techCategories.map((category, index) => (
             <motion.div
               key={category.title}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: index * 0.1 }}
               className="terminal-card"
             >
               {/* Header */}
               <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-secondary/30">
                 <div className="flex items-center gap-2">
                   <div className="w-3 h-3 rounded-full bg-destructive" />
                   <div className="w-3 h-3 rounded-full bg-terminal-yellow" />
                   <div className="w-3 h-3 rounded-full bg-primary" />
                 </div>
                 <span
                   className={`text-xs code-text px-2 py-0.5 rounded ${
                     category.label === "En Aprendizaje"
                       ? "bg-terminal-yellow/20 text-terminal-yellow"
                       : "bg-primary/20 text-primary"
                   }`}
                 >
                   {category.label}
                 </span>
               </div>
 
               <div className="p-4">
                 <h3 className="text-lg font-bold mb-4 text-foreground code-text">
                   <span className="text-terminal-purple">class</span>{" "}
                   <span className="text-terminal-cyan">{category.title.replace(/\s|\//g, "")}</span>{" "}
                   {"{"}
                 </h3>
 
                 <div className="space-y-2 pl-4">
                   {category.techs.map((tech) => (
                     <div
                       key={tech.name}
                       className="flex items-center justify-between group"
                     >
                       <span className="text-muted-foreground text-sm group-hover:text-foreground transition-colors">
                         <span className="text-primary">•</span> {tech.name}
                       </span>
                       <span className="text-xs text-muted-foreground/70 code-text">
                         // {tech.level}
                       </span>
                     </div>
                   ))}
                 </div>
 
                 <p className="text-lg font-bold mt-4 text-foreground code-text">{"}"}</p>
               </div>
             </motion.div>
           ))}
         </div>
       </div>
     </section>
   );
 };
 
 export default TechStack;