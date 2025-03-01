import { motion } from "framer-motion";
import { Brain, Target, BookOpen, Bot } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Brain,
    title: "Personalized Learning",
    description: "AI-driven pathways adapt to your learning style and pace"
  },
  {
    icon: Target,
    title: "Goal-Oriented",
    description: "Set and track progress towards your learning objectives"
  },
  {
    icon: BookOpen,
    title: "Expert Content",
    description: "Learn from industry professionals and thought leaders"
  },
  {
    icon: Bot,
    title: "AI Assistant",
    description: "24/7 support to answer questions and guide your learning"
  }
];

export default function Features() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose Our Platform
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <feature.icon className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
