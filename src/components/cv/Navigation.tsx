 import { useState, useEffect } from "react";
 import { motion } from "framer-motion";
 import { Menu, X } from "lucide-react";
 
 const navItems = [
   { label: "Experiencia", href: "#experience" },
   { label: "Stack", href: "#stack" },
   { label: "Seguridad", href: "#security" },
   { label: "Contacto", href: "#contact" },
 ];
 
 const Navigation = () => {
   const [isScrolled, setIsScrolled] = useState(false);
   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
 
   useEffect(() => {
     const handleScroll = () => {
       setIsScrolled(window.scrollY > 50);
     };
     window.addEventListener("scroll", handleScroll);
     return () => window.removeEventListener("scroll", handleScroll);
   }, []);
 
   const scrollToSection = (href: string) => {
     const element = document.querySelector(href);
     element?.scrollIntoView({ behavior: "smooth" });
     setIsMobileMenuOpen(false);
   };
 
   return (
     <motion.nav
       initial={{ y: -100 }}
       animate={{ y: 0 }}
       transition={{ duration: 0.5 }}
       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
         isScrolled
           ? "bg-background/80 backdrop-blur-md border-b border-border"
           : "bg-transparent"
       }`}
     >
       <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
         {/* Logo */}
         <button
           onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
           className="code-text text-lg font-bold text-primary hover:text-accent transition-colors"
         >
           {"<AC />"}
         </button>
 
         {/* Desktop Nav */}
         <ul className="hidden md:flex items-center gap-8">
           {navItems.map((item) => (
             <li key={item.label}>
               <button
                 onClick={() => scrollToSection(item.href)}
                 className="nav-link"
               >
                 <span className="text-primary mr-1">#</span>
                 {item.label}
               </button>
             </li>
           ))}
         </ul>
 
         {/* Mobile Menu Button */}
         <button
           onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
           className="md:hidden text-muted-foreground hover:text-primary transition-colors"
           aria-label="Toggle menu"
         >
           {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
         </button>
       </div>
 
       {/* Mobile Menu */}
       {isMobileMenuOpen && (
         <motion.div
           initial={{ opacity: 0, y: -20 }}
           animate={{ opacity: 1, y: 0 }}
           exit={{ opacity: 0, y: -20 }}
           className="md:hidden bg-card border-b border-border"
         >
           <ul className="px-6 py-4 space-y-4">
             {navItems.map((item) => (
               <li key={item.label}>
                 <button
                   onClick={() => scrollToSection(item.href)}
                   className="nav-link block w-full text-left"
                 >
                   <span className="text-primary mr-1">#</span>
                   {item.label}
                 </button>
               </li>
             ))}
           </ul>
         </motion.div>
       )}
     </motion.nav>
   );
 };
 
 export default Navigation;