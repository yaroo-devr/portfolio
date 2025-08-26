import { motion } from "framer-motion";
import { Check } from "lucide-react";
import contentData from "../content/content.json";

export default function Experience() {
  const { experience } = contentData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  const formatDate = (dateString: string) => {
    if (dateString === "Present") return "Present";
    const [year, month] = dateString.split("-");
    const monthNames = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    return `${monthNames[parseInt(month) - 1]} ${year}`;
  };

  const getTechColors = () => {
    const colors = [
      "bg-blue-500/20 text-blue-300",
      "bg-green-500/20 text-green-300", 
      "bg-purple-500/20 text-purple-300",
      "bg-yellow-500/20 text-yellow-300",
      "bg-red-500/20 text-red-300",
      "bg-orange-500/20 text-orange-300",
      "bg-pink-500/20 text-pink-300",
      "bg-indigo-500/20 text-indigo-300"
    ];
    return colors;
  };

  return (
    <section id="experience" className="relative py-32 bg-gradient-to-b from-charcoal to-space">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric to-neon">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-electric to-neon mx-auto" />
        </motion.div>
        
        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full timeline-line" />
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                className="relative flex items-center mb-16"
                variants={itemVariants}
              >
                {/* Timeline Dot */}
                <motion.div 
                  className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-electric to-neon rounded-full border-4 border-space z-10"
                  whileInView={{ scale: [0.8, 1.2, 1] }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                />
                
                {/* Content */}
                <div className="w-full lg:w-5/12 lg:pr-8 ml-auto">
                  <motion.div 
                    className="bg-charcoal/50 backdrop-blur-md border border-gray-700 rounded-2xl p-8 hover:scale-105 transition-transform duration-300"
                    whileHover={{ scale: 1.02 }}
                    data-testid={`experience-${exp.company.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-mono text-electric">
                        {formatDate(exp.start)} - {formatDate(exp.end)}
                      </span>
                      <span className="px-3 py-1 bg-electric/20 text-electric rounded-full text-xs font-semibold">
                        {exp.end === "Present" ? "Current" : "Completed"}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-2">{exp.role}</h3>
                    <h4 className="text-lg text-neon font-semibold mb-4">{exp.company}</h4>
                    
                    <ul className="space-y-2 text-gray-300 mb-6">
                      {exp.bullets.map((bullet, bulletIndex) => (
                        <motion.li 
                          key={bulletIndex}
                          className="flex items-start"
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 * bulletIndex }}
                        >
                          <Check className="w-4 h-4 text-electric mt-1 mr-2 flex-shrink-0" />
                          {bullet}
                        </motion.li>
                      ))}
                    </ul>
                    
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tech, techIndex) => {
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
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
