import { motion } from "framer-motion";
import { X, Check } from "lucide-react";
import type { Project } from "../content/types";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
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
        <div className="p-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-3xl font-bold">{project.title}</h3>
            <button
              onClick={onClose}
              className="w-10 h-10 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center transition-colors"
              data-testid="button-close-modal"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
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
