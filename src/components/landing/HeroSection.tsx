import { motion } from "framer-motion";
import revuLogo from "@/assets/revu-logo.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 overflow-hidden">
      {/* Logo */}
<motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
  className="mb-10"
>
  <div
    className="
      w-[140px] h-[140px]
      md:w-[168px] md:h-[168px]
      lg:w-[180px] lg:h-[180px]
      rounded-[28px]
      bg-black
      shadow-2xl
      flex items-center justify-center
    "
  >
    <img
      src={revuLogo}
      alt="Revu+ Logo"
      className="
        w-[96px] h-[96px]
        md:w-[112px] md:h-[112px]
        lg:w-[120px] lg:h-[120px]
        object-contain
      "
    />
  </div>
</motion.div>

      {/* Main Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="text-4xl md:text-6xl lg:text-7xl font-bold text-center text-foreground tracking-tight max-w-4xl"
      >
        Create quizzes directly from your{" "}
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
        href="https://apps.apple.com/in/app/revu/id6747489737"
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
