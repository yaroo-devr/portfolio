import { motion } from "framer-motion";
import { X, Check, Github, ExternalLink } from "lucide-react";
import type { Project } from "../content/types";

// Import project images
import lesFemmesImage from "@assets/53_1756277877520.png";
import tutorsStudentsImage from "@assets/WhatsApp Image 2025-08-27 at 12.00.57_41279caa_1756278883913.jpg";
import calculatorImage from "@assets/WhatsApp Image 2025-08-27 at 12.30.35_1f780578_1756279843691.jpg";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
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

  return (
    <motion.div
      className="modal-overlay fixed inset-0 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      data-testid="project-modal-overlay"
    >
      <motion.div
        className="bg-charcoal border border-gray-700 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        data-testid="project-modal-content"
      >
        {/* Project Image Header */}
        {getProjectImage(project.title) && (
          <div className="relative h-64 overflow-hidden rounded-t-2xl">
            <img 
              src={getProjectImage(project.title)!} 
              alt={project.title}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/70 to-transparent" />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-10 h-10 bg-charcoal/80 hover:bg-charcoal/90 rounded-full flex items-center justify-center transition-colors backdrop-blur-md"
              data-testid="button-close-modal"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        )}
        
        <div className="p-8">
          <div className={`flex items-center justify-between mb-6 ${!getProjectImage(project.title) ? '' : '-mt-4'}`}>
            <h3 className="text-3xl font-bold">{project.title}</h3>
            <div className="flex items-center gap-3">
              {project.links && project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg transition-colors"
                  data-testid="link-github"
                >
                  <Github className="w-4 h-4" />
                  <span className="text-sm">GitHub</span>
                </a>
              )}
              {!getProjectImage(project.title) && (
                <button
                  onClick={onClose}
                  className="w-10 h-10 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center transition-colors"
                  data-testid="button-close-modal"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>
          
          <div className="space-y-6">
            {project.description && (
              <p className="text-gray-300 text-lg leading-relaxed">
                {project.description}
              </p>
            )}
            
            {project.features && project.features.length > 0 && (
              <div>
                <h4 className="text-xl font-semibold text-electric mb-4">Key Features</h4>
                <ul className="space-y-2">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="w-4 h-4 text-electric mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            <div>
              <h4 className="text-xl font-semibold text-neon mb-4">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, index) => {
                  const colors = getTechColors();
                  const colorClass = colors[index % colors.length];
                  return (
                    <span 
                      key={index}
                      className={`px-3 py-1 ${colorClass} rounded-full text-sm`}
                    >
                      {tech}
                    </span>
                  );
                })}
              </div>
            </div>
            
            {(project.challenges || project.solution) && (
              <div className="grid md:grid-cols-2 gap-6">
                {project.challenges && (
                  <div>
                    <h4 className="text-lg font-semibold text-orange-400 mb-2">Challenge</h4>
                    <p className="text-gray-300">{project.challenges}</p>
                  </div>
                )}
                {project.solution && (
                  <div>
                    <h4 className="text-lg font-semibold text-green-400 mb-2">Solution</h4>
                    <p className="text-gray-300">{project.solution}</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
