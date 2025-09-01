import { motion } from "framer-motion";
import { Linkedin, Github, Mail, ArrowUp } from "lucide-react";
import contentData from "../content/content.json";

export default function Footer() {
  const { socials } = contentData;

  const getSocialIcon = (label: string) => {
    switch (label.toLowerCase()) {
      case "linkedin":
        return <Linkedin className="w-5 h-5" />;
      case "github":
        return <Github className="w-5 h-5" />;
      case "email":
        return <Mail className="w-5 h-5" />;
      default:
        return <Mail className="w-5 h-5" />;
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative py-16 bg-gradient-to-t from-charcoal to-space border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            className="mb-8 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="font-mono text-electric font-bold text-2xl mb-2">
              YM
            </div>
            <p className="text-gray-400">
              © 2024 Yar Muhammad. All rights reserved.
            </p>
          </motion.div>

          <motion.div
            className="flex items-center space-x-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex space-x-4">
              {socials.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-electric transition-colors duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  data-testid={`footer-social-${social.label.toLowerCase()}`}
                >
                  {getSocialIcon(social.label)}
                </motion.a>
              ))}
            </div>

            <motion.button
              onClick={scrollToTop}
              className="w-10 h-10 bg-electric/20 border border-electric rounded-full flex items-center justify-center text-electric hover:bg-electric/30 hover:border-electric hover:text-electric transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              data-testid="button-back-to-top"
              aria-label="Back to top"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "0",
                minWidth: "40px",
                minHeight: "40px",
              }}
            >
              <ArrowUp
                className="w-6 h-6 transition-colors duration-300"
                style={{
                  display: "block",
                  margin: "auto",
                }}
              />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
