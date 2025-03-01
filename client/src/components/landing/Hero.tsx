import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-bg">
      {/* Animated background effects */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          background: "radial-gradient(circle at 50% 50%, var(--primary) 0%, transparent 50%)",
          filter: "blur(120px)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[600px] h-[600px] rounded-full"
            style={{
              background: `radial-gradient(circle at 50% 50%, hsl(${210 + i * 20}, 100%, 50%, 0.1) 0%, transparent 70%)`,
              filter: "blur(60px)",
              top: `${30 + i * 20}%`,
              left: `${20 + i * 25}%`,
            }}
            animate={{
              y: [0, 30, 0],
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.4, 0.3],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-7xl font-bold mb-6 tracking-tight">
              <span className="gradient-text">Future of Learning</span>
              <br />
              <span className="text-foreground/90">Is Here.</span>
            </h1>

            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Experience the next generation of education with AI-powered personalized learning 
              and immersive course content.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex gap-6 items-center justify-center"
            >
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 rounded-full bg-gradient-to-r from-primary via-cyan-500 to-primary hover:opacity-90 transition-all duration-300 hover:scale-105 shadow-lg shadow-primary/25"
              >
                Start Learning
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <span className="text-sm text-muted-foreground">
                No credit card required
              </span>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto"
            >
              {[
                { number: "50K+", label: "Active Students" },
                { number: "200+", label: "Expert Courses" },
                { number: "95%", label: "Success Rate" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <h3 className="text-3xl font-bold gradient-text mb-1">{stat.number}</h3>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}