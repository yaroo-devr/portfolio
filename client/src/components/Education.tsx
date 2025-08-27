import { motion } from "framer-motion";
import { Award, Globe, ExternalLink } from "lucide-react";
import contentData from "../content/content.json";

export default function Education() {
  const { education, certifications, languages } = contentData;

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

  const formatDate = (dateString: string) => {
    if (dateString === "Present") return "Present";
    const [year, month] = dateString.split("-");
    const monthNames = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    return `${monthNames[parseInt(month) - 1]} ${year}`;
  };

  const getLanguageBadgeColor = (level: string) => {
    switch (level.toLowerCase()) {
      case 'native':
        return 'bg-blue-500/20 text-blue-300';
      case 'fluent':
        return 'bg-green-500/20 text-green-300';
      case 'intermediate':
        return 'bg-yellow-500/20 text-yellow-300';
      case 'beginner':
        return 'bg-red-500/20 text-red-300';
      default:
        return 'bg-gray-500/20 text-gray-300';
    }
  };

  return (
    <section className="relative py-32 bg-gradient-to-b from-charcoal to-space">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            Education & <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric to-neon">Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-electric to-neon mx-auto" />
        </motion.div>
        
        <motion.div
          className="grid lg:grid-cols-2 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Education */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-6 text-electric">Education</h3>
            
            {education.map((edu, index) => (
              <motion.div
                key={index}
                className="bg-charcoal/50 backdrop-blur-md border border-gray-700 rounded-2xl p-8 hover:scale-105 transition-transform duration-300"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                data-testid={`education-${edu.degree.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold mb-2">{edu.degree}</h4>
                    <p className="text-gray-300">{edu.institution}</p>
                  </div>
                  <div className="text-right">
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      edu.end === "Present" 
                        ? "bg-electric/20 text-electric" 
                        : "bg-gray-700 text-gray-300"
                    }`}>
                      {edu.end === "Present" ? "Current" : "Completed"}
                    </span>
                    <p className="text-sm text-gray-400 mt-2">
                      {formatDate(edu.start)} - {formatDate(edu.end)}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Certifications & Languages */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-6 text-neon">Certifications & Languages</h3>
            
            {/* Certifications */}
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className="bg-charcoal/50 backdrop-blur-md border border-gray-700 rounded-2xl p-8 hover:scale-105 transition-transform duration-300"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                data-testid={`certification-${cert.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div className="flex items-start justify-between mb-2">
                  <h4 className="text-lg font-semibold flex items-center flex-1">
                    <Award className="w-5 h-5 text-electric mr-2 flex-shrink-0" />
                    {cert.title}
                  </h4>
                  {cert.url && (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-2 p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors flex-shrink-0"
                      data-testid={`certification-link-${index}`}
                    >
                      <ExternalLink className="w-4 h-4 text-electric" />
                    </a>
                  )}
                </div>
                <p className="text-gray-300 mb-1">{cert.issuer}</p>
                {cert.description && (
                  <p className="text-sm text-gray-400">{cert.description}</p>
                )}
              </motion.div>
            ))}
            
            {/* Languages */}
            <motion.div
              className="bg-charcoal/50 backdrop-blur-md border border-gray-700 rounded-2xl p-8 hover:scale-105 transition-transform duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              data-testid="languages-section"
            >
              <h4 className="text-lg font-semibold mb-4 flex items-center">
                <Globe className="w-5 h-5 text-neon mr-2" />
                Languages
              </h4>
              <div className="space-y-3">
                {languages.map((lang, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-gray-300">{lang.name}</span>
                    <span className={`px-3 py-1 rounded-full text-sm ${getLanguageBadgeColor(lang.level)}`}>
                      {lang.level}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
