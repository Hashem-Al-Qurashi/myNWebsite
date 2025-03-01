import { motion } from "framer-motion";
import { Brain, Target, BookOpen, Bot } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Learning",
    description: "Personalized learning paths adapt to your style and pace",
    delay: 0.1
  },
  {
    icon: Target,
    title: "Track Progress",
    description: "Watch your skills grow with interactive progress tracking",
    delay: 0.2
  },
  {
    icon: BookOpen,
    title: "Premium Content",
    description: "Access expert-curated courses and real-world projects",
    delay: 0.3
  },
  {
    icon: Bot,
    title: "24/7 AI Assistant",
    description: "Get instant help from our intelligent tutoring system",
    delay: 0.4
  }
];

export default function Features() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Glassmorphism background effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background">
        <div className="absolute inset-0 bg-primary/5 backdrop-blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            Why Choose Our Platform
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the future of learning with our cutting-edge features
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: feature.delay,
                type: "spring",
                stiffness: 50 
              }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="group"
            >
              <Card className="relative overflow-hidden h-full border-0 bg-gradient-to-br from-background to-secondary/50 backdrop-blur-sm shadow-md hover:shadow-xl transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <CardHeader>
                  <div className="mb-6 relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-2xl transform -translate-y-1/2" />
                    <div className="relative h-14 w-14 flex items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 p-2">
                      <feature.icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-2xl font-bold">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-base">
                    {feature.description}
                  </p>
                </CardContent>

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}