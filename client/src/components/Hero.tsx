import { motion } from "framer-motion";
import { ChevronDown, Linkedin, Github, Mail } from "lucide-react";
import contentData from "../content/content.json";

export default function Hero() {
  const { name, role, tagline, socials } = contentData;

  const getSocialIcon = (label: string) => {
    switch (label.toLowerCase()) {
      case 'linkedin':
        return <Linkedin className="w-6 h-6" />;
      case 'github':
        return <Github className="w-6 h-6" />;
      case 'email':
        return <Mail className="w-6 h-6" />;
      default:
        return <Mail className="w-6 h-6" />;
    }
  };

  const handleViewWork = () => {
    const projectsSection = document.querySelector('#projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadCV = () => {
    // TODO: Implement CV download functionality
    console.log('Download CV clicked');
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-space via-charcoal to-space" />
      
      {/* Split Screen Layout */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-screen py-20 lg:py-0">
        {/* Left Content */}
        <motion.div 
          className="space-y-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="space-y-4">
            <motion.p 
              className="font-mono text-electric text-sm uppercase tracking-wider"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              👋 Hello, I'm
            </motion.p>
            
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-none"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <span className="glitch-text" data-text="Yar">Yar</span><br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric to-neon">
                Muhammad
              </span>
            </motion.h1>
          </div>
          
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-300">
              {role}
            </h2>
            <p className="text-base sm:text-lg text-gray-400 max-w-lg leading-relaxed">
              {tagline}
            </p>
          </motion.div>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
          >
            <button 
              className="magnetic-btn bg-gradient-to-r from-electric to-neon text-space font-semibold px-6 py-3 md:px-8 md:py-4 rounded-full text-sm md:text-base"
              onClick={handleViewWork}
              data-testid="button-view-work"
            >
              View My Work
            </button>
            <button 
              className="magnetic-btn border-2 border-electric text-electric font-semibold px-6 py-3 md:px-8 md:py-4 rounded-full hover:bg-electric hover:text-space transition-all duration-300 text-sm md:text-base"
              onClick={handleDownloadCV}
              data-testid="button-download-cv"
            >
              Download CV
            </button>
          </motion.div>
          
          <motion.div 
            className="flex space-x-6 pt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            {socials.map((social) => (
              <motion.a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-electric transition-colors duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                data-testid={`link-${social.label.toLowerCase()}`}
              >
                {getSocialIcon(social.label)}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
        
        {/* Right Visual */}
        <motion.div 
          className="relative order-first lg:order-last"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="relative w-full max-w-md mx-auto">
            {/* Floating Elements - Hidden on mobile to avoid blur interference */}
            <motion.div 
              className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-electric/20 to-neon/20 rounded-full blur-xl hidden md:block"
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
              className="absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-br from-neon/20 to-electric/20 rounded-full blur-xl hidden md:block"
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 3 }}
            />
            
            {/* Code Block Mockup */}
            <motion.div 
              className="bg-charcoal/80 backdrop-blur-md border border-gray-700 rounded-2xl p-4 md:p-6 shadow-2xl mt-8 lg:mt-0"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex space-x-2 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full" />
                <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                <div className="w-3 h-3 bg-green-500 rounded-full" />
              </div>
              <div className="font-mono text-xs sm:text-sm space-y-2">
                <div className="text-gray-400">// Building the future</div>
                <div className="text-electric">const developer = {`{`}</div>
                <div className="ml-4 text-white">name: <span className="text-green-400">"{name}"</span>,</div>
                <div className="ml-4 text-white">role: <span className="text-green-400">"Software Engineer"</span>,</div>
                <div className="ml-4 text-white">focus: [<span className="text-green-400">"Mobile"</span>, <span className="text-green-400">"AI"</span>, <span className="text-green-400">"Automation"</span>],</div>
                <div className="ml-4 text-white">passion: <span className="text-green-400">"Innovation"</span></div>
                <div className="text-electric">{`}`}</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="cursor-pointer"
          onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
          data-testid="scroll-indicator"
        >
          <ChevronDown className="w-6 h-6 text-electric" />
        </motion.div>
      </motion.div>
    </section>
  );
}
