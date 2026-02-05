 import Navigation from "@/components/cv/Navigation";
 import Hero from "@/components/cv/Hero";
 import Experience from "@/components/cv/Experience";
 import TechStack from "@/components/cv/TechStack";
 import SecurityNote from "@/components/cv/SecurityNote";
 import Contact from "@/components/cv/Contact";
 import Footer from "@/components/cv/Footer";
 
 const Index = () => {
   return (
     <div className="min-h-screen bg-background">
       <Navigation />
       <main>
         <Hero />
         <Experience />
         <TechStack />
         <SecurityNote />
         <Contact />
       </main>
       <Footer />
     </div>
   );
 };
 
 export default Index;
