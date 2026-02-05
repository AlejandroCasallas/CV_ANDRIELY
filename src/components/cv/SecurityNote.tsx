 import { motion } from "framer-motion";
 import { Shield, Lock, Code2 } from "lucide-react";
 
 const SecurityNote = () => {
   return (
     <section id="security" className="py-20 px-6 md:px-12 lg:px-24">
       <div className="max-w-4xl mx-auto">
         <motion.h2
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5 }}
           className="section-title"
         >
           Seguridad & Confidencialidad
         </motion.h2>
 
         <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5 }}
           className="terminal-card overflow-hidden"
         >
           {/* Header */}
           <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-terminal-yellow/10">
             <Shield size={16} className="text-terminal-yellow" />
             <span className="text-terminal-yellow text-sm code-text font-medium">
               security.md
             </span>
           </div>
 
           <div className="p-6">
             <div className="flex items-start gap-4">
               <div className="p-3 rounded-lg bg-terminal-yellow/10 text-terminal-yellow">
                 <Lock size={24} />
               </div>
               <div>
                 <h3 className="text-lg font-bold text-foreground mb-2">
                   Manejo de Infraestructura Crítica
                 </h3>
                 <p className="text-muted-foreground leading-relaxed mb-4">
                   Trabajo con infraestructura empresarial bajo estándares de seguridad estrictos. 
                   Por razones de confidencialidad, no se comparten accesos privados ni credenciales 
                   de los proyectos en los que he participado.
                 </p>
                 
                 <div className="flex items-center gap-3 p-4 rounded-lg bg-secondary/50 border border-border">
                   <Code2 size={20} className="text-primary" />
                   <p className="text-sm text-foreground">
                     <span className="text-primary font-medium">Snippets de código</span> disponibles 
                     para revisión técnica bajo solicitud.
                   </p>
                 </div>
               </div>
             </div>
           </div>
         </motion.div>
       </div>
     </section>
   );
 };
 
 export default SecurityNote;