import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Database, 
  Server, 
  Workflow, 
  Zap, 
  Brain, 
  Mic, 
  Users, 
  Building 
} from "lucide-react";
import contentData from "../content/content.json";

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const { skills } = contentData;

  const filters = [
    { key: "all", label: "All" },
    { key: "frontend", label: "Frontend" },
    { key: "backend", label: "Backend" },
    { key: "tools", label: "Tools" },
    { key: "automation", label: "Automation" },
    { key: "ai", label: "AI" },
    { key: "crm", label: "CRM" },
  ];

  const getSkillIcon = (iconName: string, skillName: string) => {
    const iconProps = { className: "w-10 h-10 mb-4 mx-auto" };
    
    switch (iconName) {
      case "react":
        return <i className="devicon-react-original text-4xl text-blue-400 mb-4 block" />;
      case "redux":
        return <i className="devicon-redux-original text-4xl text-purple-400 mb-4 block" />;
      case "javascript":
        return <i className="devicon-javascript-original text-4xl text-yellow-400 mb-4 block" />;
      case "python":
        return <i className="devicon-python-original text-4xl text-blue-500 mb-4 block" />;
      case "cplusplus":
        return <i className="devicon-cplusplus-original text-4xl text-blue-600 mb-4 block" />;
      case "docker":
        return <i className="devicon-docker-original text-4xl text-blue-500 mb-4 block" />;
      case "git":
        return <i className="devicon-git-original text-4xl text-red-500 mb-4 block" />;
      case "android":
        return <i className="devicon-android-original text-4xl text-green-500 mb-4 block" />;
      case "nodejs":
        return <i className="devicon-nodejs-original text-4xl text-green-500 mb-4 block" />;
      case "api":
        return <Server {...iconProps} className="w-10 h-10 text-green-400 mb-4 mx-auto" />;
      case "database":
        return <Database {...iconProps} className="w-10 h-10 text-orange-400 mb-4 mx-auto" />;
      case "workflow":
        if (skillName.includes("n8n")) {
          return <Workflow {...iconProps} className="w-10 h-10 text-purple-400 mb-4 mx-auto" />;
        }
        if (skillName.includes("Make")) {
          return <Zap {...iconProps} className="w-10 h-10 text-yellow-400 mb-4 mx-auto" />;
        }
        if (skillName.includes("Go High Level")) {
          return <Users {...iconProps} className="w-10 h-10 text-orange-400 mb-4 mx-auto" />;
        }
        return <Workflow {...iconProps} className="w-10 h-10 text-purple-400 mb-4 mx-auto" />;
      case "ai":
        if (skillName.includes("GPT")) {
          return <Brain {...iconProps} className="w-10 h-10 text-green-400 mb-4 mx-auto" />;
        }
        if (skillName.includes("VAPI")) {
          return <Mic {...iconProps} className="w-10 h-10 text-blue-400 mb-4 mx-auto" />;
        }
        return <Brain {...iconProps} className="w-10 h-10 text-green-400 mb-4 mx-auto" />;
      default:
        if (skillName.includes("Dolibarr")) {
          return <Building {...iconProps} className="w-10 h-10 text-red-400 mb-4 mx-auto" />;
        }
        return <Database {...iconProps} className="w-10 h-10 text-gray-400 mb-4 mx-auto" />;
    }
  };

  const getHoverColor = (group: string) => {
    switch (group) {
      case "frontend":
        return "hover:border-blue-400";
      case "backend":
        return "hover:border-green-400";
      case "tools":
        return "hover:border-orange-400";
      case "automation":
        return "hover:border-purple-400";
      case "ai":
        return "hover:border-emerald-400";
      case "crm":
        return "hover:border-red-400";
      default:
        return "hover:border-electric";
    }
  };

  const filteredSkills = activeFilter === "all" 
    ? skills 
    : skills.filter(skill => skill.group === activeFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -20, scale: 0.9 },
  };

  return (
    <section id="skills" className="relative py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric to-neon">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-electric to-neon mx-auto mb-8" />
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <motion.button
                key={filter.key}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  activeFilter === filter.key
                    ? "bg-electric text-space"
                    : "bg-charcoal border border-gray-700 text-gray-300 hover:text-electric hover:border-electric"
                }`}
                onClick={() => setActiveFilter(filter.key)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                data-testid={`filter-${filter.key}`}
              >
                {filter.label}
              </motion.button>
            ))}
          </div>
        </motion.div>
        
        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <AnimatePresence mode="wait">
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={`${skill.name}-${activeFilter}`}
                className={`skill-card bg-charcoal/50 backdrop-blur-md border border-gray-700 rounded-2xl p-6 text-center transition-all duration-300 ${getHoverColor(skill.group)}`}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ 
                  scale: 1.02,
                  y: -8,
                  boxShadow: "0 25px 50px rgba(0, 212, 255, 0.2)"
                }}
                data-testid={`skill-${skill.name.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {getSkillIcon(skill.icon, skill.name)}
                <h3 className="font-semibold text-white text-sm">{skill.name}</h3>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
