import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import useScrollProgress from "../hooks/useScrollProgress";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const scrollProgress = useScrollProgress();

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-space/80 backdrop-blur-md border-b border-gray-800">
        <div 
          className="scroll-progress fixed top-0 left-0 h-1 z-50 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
        
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div 
              className="font-mono text-electric font-bold text-xl cursor-pointer"
              whileHover={{ scale: 1.05 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              data-testid="logo"
            >
              YM
            </motion.div>
            
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <motion.button
                  key={item.label}
                  className="hover:text-electric transition-colors duration-300"
                  onClick={() => scrollToSection(item.href)}
                  whileHover={{ y: -2 }}
                  data-testid={`nav-${item.label.toLowerCase()}`}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
            
            <button 
              className="md:hidden p-2"
              onClick={() => setIsOpen(!isOpen)}
              data-testid="mobile-menu-toggle"
              aria-label="Toggle mobile menu"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <motion.div
        className={`fixed inset-0 z-40 bg-space/95 backdrop-blur-md md:hidden ${
          isOpen ? 'block' : 'hidden'
        }`}
        initial={{ opacity: 0 }}
        animate={{ opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {navItems.map((item, index) => (
            <motion.button
              key={item.label}
              className="text-2xl font-semibold hover:text-electric transition-colors duration-300"
              onClick={() => scrollToSection(item.href)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 20 }}
              transition={{ delay: index * 0.1 }}
              data-testid={`mobile-nav-${item.label.toLowerCase()}`}
            >
              {item.label}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </>
  );
}
