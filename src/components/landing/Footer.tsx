import { motion } from "framer-motion";
import revuLogo from "@/assets/revu-logo.png";

const Footer = () => {
  return (
    <footer className="py-16 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-8"
        >
          {/* Logo and tagline */}
          <div className="flex items-center gap-4">
            <img
              src={revuLogo}
              alt="Revu+"
              className="w-12 h-12 rounded-xl"
            />
            <div>
              <p className="font-semibold text-foreground">Revu+</p>
              <p className="text-sm text-muted-foreground">Smart Quizzes from Your PDFs</p>
            </div>
          </div>

          {/* App Store badge */}
          <a
            href="https://apps.apple.com/app/revu-plus"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-105 transition-transform duration-300"
          >
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="Download on the App Store"
              className="h-10"
            />
          </a>

          {/* Contact */}
          <a
            href="mailto:Vedang_k@icloud.com"
            className="text-sm text-muted-foreground hover:text-revu-blue transition-colors"
          >
            📩 Vedang_k@icloud.com
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-12 pt-8 border-t border-border text-center"
        >
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Revu+. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
