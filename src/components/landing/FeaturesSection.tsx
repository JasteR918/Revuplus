import { motion } from "framer-motion";
import { FileText, Shield, Zap, Globe, WifiOff } from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "Quiz Generator from PDFs",
    description: "Turn notes, textbooks, and handouts into smart quizzes in seconds.",
  },
  {
    icon: Shield,
    title: "100% On-Device AI",
    description: "No servers. No tracking. Your content stays yours.",
  },
  {
    icon: Zap,
    title: "Fast & Focused",
    description: "Built with Apple-first performance and fluid SwiftUI animations.",
  },
  {
    icon: Globe,
    title: "Loved in 150+ Countries",
    description: "Used by students across classrooms, hostels, and self-study spaces worldwide.",
  },
  {
    icon: WifiOff,
    title: "Works Completely Offline",
    description: "Perfect for low-connectivity environments.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

const FeaturesSection = () => {
  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-3xl md:text-5xl font-bold text-center text-foreground mb-16"
        >
          Why <span className="text-revu-blue">Revu+</span>
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="group p-8 rounded-3xl bg-card border border-border hover:border-revu-blue/30 hover:shadow-xl hover:shadow-revu-blue/5 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-revu-blue/10 flex items-center justify-center mb-6 group-hover:bg-revu-blue/20 transition-colors duration-300">
                <feature.icon className="w-7 h-7 text-revu-blue" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
