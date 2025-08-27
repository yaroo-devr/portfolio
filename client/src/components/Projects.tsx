import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Eye, Mic, Building, ShoppingBag, GraduationCap } from "lucide-react";
import ProjectModal from "./ProjectModal";
import contentData from "../content/content.json";
import type { Project } from "../content/types";

// Import project images
import lesFemmesImage from "@assets/53_1756277877520.png";
import tutorsStudentsImage from "@assets/WhatsApp Image 2025-08-27 at 12.00.57_41279caa_1756278883913.jpg";
import calculatorImage from "@assets/WhatsApp Image 2025-08-27 at 12.30.35_1f780578_1756279843691.jpg";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { projects } = contentData;

  const getProjectImage = (title: string) => {
    if (title.includes("Les Femmes")) {
      return lesFemmesImage;
    }
    if (title.includes("Tutors-Students")) {
      return tutorsStudentsImage;
    }
    if (title.includes("Calculator")) {
      return calculatorImage;
    }
    return null;
  };

  const getProjectIcon = (title: string) => {
    const iconProps = { className: "w-16 h-16" };
    
    if (title.includes("EyeScan")) {
      return <Eye {...iconProps} className="w-16 h-16 text-electric" />;
    }
    if (title.includes("VAPI")) {
      return <Mic {...iconProps} className="w-16 h-16 text-neon" />;
    }
    if (title.includes("Calculator")) {
      return <i className="devicon-javascript-original text-6xl text-yellow-400" />;
    }
    if (title.includes("n8n") || title.includes("Multi-Agent")) {
      return <i className="devicon-nodejs-original text-6xl text-green-400" />;
    }
    if (title.includes("Les Femmes")) {
      return <ShoppingBag {...iconProps} className="w-16 h-16 text-pink-400" />;
    }
    if (title.includes("Tutors-Students")) {
      return <GraduationCap {...iconProps} className="w-16 h-16 text-green-400" />;
    }
    return <Eye {...iconProps} className="w-16 h-16 text-electric" />;
  };

  const getProjectGradient = (title: string) => {
    if (title.includes("EyeScan")) {
      return "from-blue-900/30 to-purple-900/30";
    }
    if (title.includes("VAPI")) {
      return "from-green-900/30 to-blue-900/30";
    }
    if (title.includes("Calculator")) {
      return "from-yellow-900/30 to-orange-900/30";
    }
    if (title.includes("n8n") || title.includes("Multi-Agent")) {
      return "from-green-900/30 to-purple-900/30";
    }
    if (title.includes("Les Femmes")) {
      return "from-purple-900/30 to-pink-900/30";
    }
    return "from-blue-900/30 to-purple-900/30";
  };

  const getHoverBorder = (title: string) => {
    if (title.includes("EyeScan")) {
      return "hover:border-neon";
    }
    if (title.includes("VAPI")) {
      return "hover:border-electric";
    }
    if (title.includes("Calculator")) {
      return "hover:border-yellow-400";
    }
    if (title.includes("n8n") || title.includes("Multi-Agent")) {
      return "hover:border-green-400";
    }
    if (title.includes("Les Femmes")) {
      return "hover:border-electric";
    }
    return "hover:border-neon";
  };

  const getTechColors = () => {
    const colors = [
      "bg-blue-500/20 text-blue-300",
      "bg-green-500/20 text-green-300", 
      "bg-purple-500/20 text-purple-300",
      "bg-yellow-500/20 text-yellow-300",
      "bg-red-500/20 text-red-300",
      "bg-orange-500/20 text-orange-300"
    ];
    return colors;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="projects" className="relative py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric to-neon">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-electric to-neon mx-auto" />
        </motion.div>
        
        {/* Projects Grid */}
        <motion.div
          className="grid lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={`project-card bg-charcoal/50 backdrop-blur-md border border-gray-700 rounded-2xl overflow-hidden transition-all duration-500 ${getHoverBorder(project.title)} cursor-pointer`}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 30px 60px rgba(168, 85, 247, 0.3)"
              }}
              onClick={() => setSelectedProject(project)}
              data-testid={`project-${project.title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {/* Project Preview */}
              <div className={`relative h-64 bg-gradient-to-br ${getProjectGradient(project.title)} flex items-center justify-center overflow-hidden`}>
                {getProjectImage(project.title) ? (
                  <>
                    <img 
                      src={getProjectImage(project.title)!} 
                      alt={project.title}
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/30 to-transparent" />
                    <div className="absolute bottom-4 right-4">
                      {getProjectIcon(project.title)}
                    </div>
                  </>
                ) : (
                  <>
                    {getProjectIcon(project.title)}
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent" />
                  </>
                )}
              </div>
              
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <div className="flex space-x-2">
                    {project.links && project.links.github && (
                      <Github className="w-5 h-5 text-gray-400 hover:text-electric transition-colors" />
                    )}
                    {project.links && Object.keys(project.links).filter(key => key !== 'github').length > 0 && (
                      <ExternalLink className="w-5 h-5 text-gray-400 hover:text-electric transition-colors" />
                    )}
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6">
                  {project.summary}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => {
                    const colors = getTechColors();
                    const colorClass = colors[techIndex % colors.length];
                    return (
                      <span 
                        key={techIndex}
                        className={`px-3 py-1 ${colorClass} rounded-full text-xs`}
                      >
                        {tech}
                      </span>
                    );
                  })}
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
