import { motion } from "framer-motion";
import { Check, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const premiumFeatures = [
  "Advanced quiz controls",
  "More questions per quiz",
  "Difficulty selection",
  "Enhanced revision flow",
];

const PremiumSection = () => {
  return (
    <section className="py-24 md:py-32 px-6 bg-gradient-to-b from-revu-blue/5 to-transparent">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-revu-blue/10 text-revu-blue text-sm font-medium mb-6">
            ✨ Invite Only
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Premium Early Access
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Revu+ Premium is currently available via invite-only access.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mt-12 p-8 md:p-12 rounded-3xl bg-card border border-border shadow-xl"
        >
          <h3 className="text-2xl font-bold text-foreground mb-6">
            Premium Scholar includes:
          </h3>
          
          <ul className="space-y-4 mb-10">
            {premiumFeatures.map((feature, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                className="flex items-center gap-3"
              >
                <div className="w-6 h-6 rounded-full bg-revu-blue/10 flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-revu-blue" />
                </div>
                <span className="text-foreground">{feature}</span>
              </motion.li>
            ))}
          </ul>

          <div className="border-t border-border pt-8">
            <p className="text-muted-foreground mb-6">
              To request an invite code, get in touch directly:
            </p>
            <Button
              asChild
              size="lg"
              className="bg-revu-blue hover:bg-revu-blue/90 text-white rounded-full px-8 gap-2 group"
            >
              <a href="mailto:Vedang_k@icloud.com">
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Request Invite
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PremiumSection;
