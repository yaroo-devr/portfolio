import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Linkedin, Github, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import contentData from "../content/content.json";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { email, location, socials } = contentData;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // TODO: Implement actual email sending logic
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
      
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
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
    <section id="contact" className="relative py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric to-neon">Connect</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-electric to-neon mx-auto mb-8" />
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to build something amazing together? Let's discuss your next project.
          </p>
        </motion.div>
        
        <motion.div
          className="grid lg:grid-cols-2 gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Contact Info */}
          <motion.div className="space-y-8" variants={itemVariants}>
            <motion.div 
              className="bg-charcoal/50 backdrop-blur-md border border-gray-700 rounded-2xl p-8"
              whileHover={{ scale: 1.02 }}
              data-testid="contact-email"
            >
              <div className="flex items-center mb-4">
                <Mail className="w-6 h-6 text-electric mr-4" />
                <h3 className="text-xl font-semibold">Email</h3>
              </div>
              <a 
                href={`mailto:${email}`} 
                className="text-gray-300 hover:text-electric transition-colors text-lg"
              >
                {email}
              </a>
            </motion.div>
            
            <motion.div 
              className="bg-charcoal/50 backdrop-blur-md border border-gray-700 rounded-2xl p-8"
              whileHover={{ scale: 1.02 }}
              data-testid="contact-location"
            >
              <div className="flex items-center mb-4">
                <MapPin className="w-6 h-6 text-neon mr-4" />
                <h3 className="text-xl font-semibold">Location</h3>
              </div>
              <p className="text-gray-300 text-lg">{location}</p>
            </motion.div>
            
            {/* Social Links */}
            <motion.div className="flex space-x-6" variants={itemVariants}>
              {socials.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-charcoal border border-gray-700 rounded-xl flex items-center justify-center text-gray-400 hover:text-electric hover:border-electric transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  data-testid={`social-${social.label.toLowerCase()}`}
                >
                  {getSocialIcon(social.label)}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div 
            className="bg-charcoal/50 backdrop-blur-md border border-gray-700 rounded-2xl p-8"
            variants={itemVariants}
          >
            <form onSubmit={handleSubmit} className="space-y-6" data-testid="contact-form">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-300">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full bg-space border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-electric transition-colors"
                    placeholder="John"
                    required
                    data-testid="input-first-name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-300">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full bg-space border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-electric transition-colors"
                    placeholder="Doe"
                    required
                    data-testid="input-last-name"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-space border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-electric transition-colors"
                  placeholder="john@example.com"
                  required
                  data-testid="input-email"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-300">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full bg-space border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-electric transition-colors"
                  placeholder="Project Collaboration"
                  required
                  data-testid="input-subject"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-300">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full bg-space border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-electric transition-colors resize-none"
                  placeholder="Tell me about your project..."
                  required
                  data-testid="textarea-message"
                />
              </div>
              
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="magnetic-btn w-full bg-gradient-to-r from-electric to-neon text-space font-semibold py-4 rounded-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={!isSubmitting ? { scale: 1.02 } : undefined}
                whileTap={!isSubmitting ? { scale: 0.98 } : undefined}
                data-testid="button-send-message"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-space border-t-transparent" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
