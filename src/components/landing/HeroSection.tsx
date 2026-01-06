import { motion } from "framer-motion";
import revuLogo from "@/assets/revu-logo.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 overflow-hidden">
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="mb-8"
      >
        <img
          src={revuLogo}
          alt="Revu+ Logo"
          className="w-32 h-32 md:w-40 md:h-40 rounded-3xl shadow-2xl"
        />
      </motion.div>

      {/* Main Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="text-4xl md:text-6xl lg:text-7xl font-bold text-center text-foreground tracking-tight max-w-4xl"
      >
        Smart Quizzes from Your{" "}
        <span className="text-revu-blue">PDFs</span>
      </motion.h1>

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="mt-6 text-lg md:text-xl text-muted-foreground text-center max-w-2xl leading-relaxed"
      >
        Built for focus. Powered by on-device AI.
        <br />
        Your data never leaves your device.
      </motion.p>

      {/* App Store Badge */}
      <motion.a
        href="https://apps.apple.com/app/revu-plus"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="mt-10 hover:scale-105 transition-transform duration-300"
      >
        <img
          src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
          alt="Download on the App Store"
          className="h-14"
        />
      </motion.a>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2"
        >
          <div className="w-1.5 h-3 bg-revu-blue rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
