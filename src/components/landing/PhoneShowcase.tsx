import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import iphoneMockup1 from "@/assets/iphone-mockup-1.png";
import iphoneMockup2 from "@/assets/iphone-mockup-2.png";
import iphoneProduct from "@/assets/iphone-product.png";

const PhoneShowcase = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Parallax transforms for first phone
  const phone1Y = useTransform(scrollYProgress, [0, 0.3], [100, 0]);
  const phone1Opacity = useTransform(scrollYProgress, [0, 0.15], [0, 1]);
  const phone1Scale = useTransform(scrollYProgress, [0, 0.3], [0.8, 1]);
  const phone1Rotate = useTransform(scrollYProgress, [0, 0.3], [15, 0]);

  // Parallax transforms for second phone
  const phone2Y = useTransform(scrollYProgress, [0.25, 0.55], [150, 0]);
  const phone2Opacity = useTransform(scrollYProgress, [0.25, 0.4], [0, 1]);
  const phone2Scale = useTransform(scrollYProgress, [0.25, 0.55], [0.7, 1]);

  // Parallax transforms for product showcase
  const phone3Y = useTransform(scrollYProgress, [0.5, 0.8], [100, 0]);
  const phone3Opacity = useTransform(scrollYProgress, [0.5, 0.65], [0, 1]);
  const phone3Scale = useTransform(scrollYProgress, [0.5, 0.8], [0.85, 1]);

  return (
    <div ref={containerRef} className="relative">
      {/* First Phone - Slides in from right with rotation */}
      <section className="min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex-1 text-center lg:text-left"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Premium
            </h2>
            <p className="mt-4 text-2xl md:text-3xl text-revu-blue font-medium">
              Quizzes, without compromise
            </p>
            <p className="mt-6 text-lg text-muted-foreground max-w-md">
              Unlock the full potential of your study materials with advanced AI-powered quiz generation.
            </p>
          </motion.div>

          <motion.div
            style={{
              y: phone1Y,
              opacity: phone1Opacity,
              scale: phone1Scale,
              rotateY: phone1Rotate,
            }}
            className="flex-1 flex justify-center"
          >
            <img
              src={iphoneMockup1}
              alt="Revu+ Premium on iPhone"
              className="w-full max-w-md drop-shadow-2xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Second Phone - Slides up with scale */}
      <section className="min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden bg-gradient-to-b from-transparent via-revu-blue/5 to-transparent">
        <div className="max-w-6xl mx-auto flex flex-col items-center gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
              Designed for{" "}
              <span className="text-revu-blue">Students</span>
            </h2>
            <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl">
              Clean interface. Fluid animations. Zero distractions.
            </p>
          </motion.div>

          <motion.div
            style={{
              y: phone2Y,
              opacity: phone2Opacity,
              scale: phone2Scale,
            }}
            className="flex justify-center"
          >
            <img
              src={iphoneMockup2}
              alt="Revu+ Interface"
              className="w-full max-w-lg drop-shadow-2xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Third Phone - Product showcase with feature callouts */}
      <section className="min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
              Everything You Need
            </h2>
            <p className="mt-4 text-lg md:text-xl text-muted-foreground">
              Premium Early Access • Invite Only
            </p>
          </motion.div>

          <motion.div
            style={{
              y: phone3Y,
              opacity: phone3Opacity,
              scale: phone3Scale,
            }}
            className="relative flex justify-center w-full"
          >
            <img
              src={iphoneProduct}
              alt="Revu+ Product Features"
              className="w-full max-w-4xl drop-shadow-2xl"
            />

            {/* Floating feature labels */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="absolute left-4 md:left-[5%] top-1/4 hidden md:block"
            >
              <div className="bg-card/90 backdrop-blur-sm px-4 py-2 rounded-full border border-revu-blue/20 shadow-lg">
                <span className="text-sm font-medium text-foreground">On Device AI</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute right-4 md:right-[5%] top-1/3 hidden md:block"
            >
              <div className="bg-card/90 backdrop-blur-sm px-4 py-2 rounded-full border border-revu-blue/20 shadow-lg">
                <span className="text-sm font-medium text-foreground">Up to 20 questions</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="absolute right-4 md:right-[10%] bottom-1/4 hidden md:block"
            >
              <div className="bg-card/90 backdrop-blur-sm px-4 py-2 rounded-full border border-revu-blue/20 shadow-lg">
                <span className="text-sm font-medium text-foreground">Practice at your level</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PhoneShowcase;
