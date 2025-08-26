import { useEffect } from "react";
import { motion } from "framer-motion";
import Navigation from "./Navigation";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Experience from "./Experience";
import Projects from "./Projects";
import Education from "./Education";
import Contact from "./Contact";
import Footer from "./Footer";
import ParticleBackground from "./ParticleBackground";
import useLenis from "../hooks/useLenis";

export default function Portfolio() {
  useLenis();

  useEffect(() => {
    // Add dark class to html element
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="min-h-screen bg-space text-white overflow-x-hidden">
      <ParticleBackground />
      
      {/* Grain Overlay */}
      <div className="fixed inset-0 grain-overlay pointer-events-none z-10 opacity-20" />
      
      <Navigation />
      
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
        <Footer />
      </motion.main>
    </div>
  );
}
