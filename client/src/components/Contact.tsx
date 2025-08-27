import { motion } from "framer-motion";
import { Mail, MapPin, Linkedin, Github, MessageCircle } from "lucide-react";
import contentData from "../content/content.json";

export default function Contact() {
  const { email, location, whatsapp, socials } = contentData;

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi Yar! I'd like to discuss a project with you.");
    window.open(`https://wa.me/${whatsapp.replace('+', '')}?text=${message}`, '_blank');
  };

  const getSocialIcon = (label: string) => {
    switch (label.toLowerCase()) {
      case 'linkedin':
        return <Linkedin className="w-5 h-5" />;
      case 'github':
        return <Github className="w-5 h-5" />;
      case 'email':
        return <Mail className="w-5 h-5" />;
      default:
        return <Mail className="w-5 h-5" />;
    }
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
    <section id="contact" className="relative py-16 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          className="text-center mb-8 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 md:mb-6">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric to-neon">Connect</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-electric to-neon mx-auto mb-8" />
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to build something amazing together? Let's discuss your next project.
          </p>
        </motion.div>
        
        <motion.div
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Contact Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* WhatsApp Contact */}
            <motion.div 
              className="bg-charcoal/50 backdrop-blur-md border border-gray-700 rounded-2xl p-6 md:p-8 text-center"
              variants={itemVariants}
              whileHover={{ scale: 1.02, borderColor: "#25D366" }}
              data-testid="contact-whatsapp"
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-8 h-8 text-green-400" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">WhatsApp</h3>
              <p className="text-gray-400 mb-4">Send me a message</p>
              <button
                onClick={handleWhatsAppClick}
                className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                {whatsapp}
              </button>
            </motion.div>

            {/* Email Contact */}
            <motion.div 
              className="bg-charcoal/50 backdrop-blur-md border border-gray-700 rounded-2xl p-6 md:p-8 text-center"
              variants={itemVariants}
              whileHover={{ scale: 1.02, borderColor: "#00BFFF" }}
              data-testid="contact-email"
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-electric/20 rounded-full flex items-center justify-center">
                  <Mail className="w-8 h-8 text-electric" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-gray-400 mb-4">Drop me a line</p>
              <a 
                href={`mailto:${email}`} 
                className="text-electric hover:text-white transition-colors text-lg font-medium"
              >
                {email}
              </a>
            </motion.div>
            
            {/* Location */}
            <motion.div 
              className="bg-charcoal/50 backdrop-blur-md border border-gray-700 rounded-2xl p-6 md:p-8 text-center md:col-span-2 lg:col-span-1"
              variants={itemVariants}
              whileHover={{ scale: 1.02, borderColor: "#A855F7" }}
              data-testid="contact-location"
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-neon/20 rounded-full flex items-center justify-center">
                  <MapPin className="w-8 h-8 text-neon" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <p className="text-gray-400 mb-4">Based in</p>
              <p className="text-gray-300 text-lg font-medium">{location}</p>
            </motion.div>
          </div>
          
          {/* Social Links */}
          <motion.div 
            className="flex justify-center space-x-6 mt-12"
            variants={itemVariants}
          >
            {socials.map((social) => (
              <motion.a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-charcoal border border-gray-700 rounded-xl flex items-center justify-center text-gray-400 hover:text-electric hover:border-electric transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                data-testid={`social-${social.label.toLowerCase()}`}
              >
                {getSocialIcon(social.label)}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}