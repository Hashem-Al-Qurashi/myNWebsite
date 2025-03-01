import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-[30%] right-[10%] h-[600px] w-[600px] rounded-full bg-accent/30 blur-[100px]" />
        <div className="absolute -bottom-[20%] left-[10%] h-[600px] w-[600px] rounded-full bg-primary/20 blur-[100px]" />
      </div>

      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              Design. Prototype. Create.
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Build beautiful websites without code. Drag, drop, and customize to create your perfect site.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex gap-4 items-center"
            >
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 rounded-full bg-primary hover:bg-primary/90 transition-all duration-300 hover:scale-105"
              >
                Start Learning Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <span className="text-sm text-muted-foreground">
                No credit card required
              </span>
            </motion.div>
            <Button size="lg" variant="outline" className="rounded-full px-8 font-medium">
              Learn More
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="relative w-full max-w-5xl mt-8"
          >
            <div className="overflow-hidden rounded-2xl border shadow-xl">
              <div className="aspect-[16/9] overflow-hidden bg-gradient-to-br from-accent/20 to-primary/20">
                <div className="rounded-lg bg-card/50 backdrop-blur-sm p-6 border border-border/40 flex items-center justify-center h-full">
                  <p className="text-2xl font-medium">Your App Screenshot Here</p>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 h-20 w-20 rounded-full bg-accent blur-xl opacity-70" />
            <div className="absolute -bottom-6 -left-6 h-20 w-20 rounded-full bg-primary blur-xl opacity-70" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}