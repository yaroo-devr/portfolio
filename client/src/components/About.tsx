import { motion } from "framer-motion";
import contentData from "../content/content.json";

export default function About() {
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

  const stats = [
    { value: "5+", label: "Projects" },
    { value: "2+", label: "Years Learning" },
    { value: "15+", label: "Technologies" },
    { value: "3", label: "Languages" },
  ];

  return (
    <section id="about" className="relative py-32 bg-gradient-to-b from-space to-charcoal">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.h2 
            className="text-5xl md:text-6xl font-black mb-6"
            variants={itemVariants}
          >
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric to-neon">Me</span>
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-electric to-neon mx-auto"
            variants={itemVariants}
          />
        </motion.div>
        
        <motion.div
          className="grid lg:grid-cols-2 gap-16 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.div className="space-y-6" variants={itemVariants}>
            <p className="text-xl leading-relaxed text-gray-300">
              As a Software Engineer at MiniByte AI, I specialize in creating cross-platform mobile applications and intelligent automation systems. My expertise spans from React Native development to AI integration, with a passion for building solutions that make complex workflows simple.
            </p>
            <p className="text-lg leading-relaxed text-gray-400">
              Currently pursuing my Bachelor's in Software Engineering at International Islamic University Islamabad, I combine academic knowledge with hands-on industry experience to deliver cutting-edge mobile and automation solutions.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-2 gap-6"
            variants={containerVariants}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-charcoal/50 backdrop-blur-md border border-gray-700 rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                data-testid={`stat-${stat.label.toLowerCase().replace(' ', '-')}`}
              >
                <div className={`text-3xl font-black mb-2 ${index % 2 === 0 ? 'text-electric' : 'text-neon'}`}>
                  {stat.value}
                </div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
