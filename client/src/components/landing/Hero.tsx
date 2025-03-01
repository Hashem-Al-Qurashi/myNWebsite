import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5"
        style={{
          backdropFilter: 'blur(100px)',
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <motion.h1 
            className="text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Master Skills.
            <br />
            <span className="text-primary">Faster.</span>
          </motion.h1>

          <motion.p
            className="text-xl text-muted-foreground mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Learn from industry experts and accelerate your career with our interactive courses and AI-powered learning assistant.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button size="lg" className="text-lg px-8">
              Start Learning for Free
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
