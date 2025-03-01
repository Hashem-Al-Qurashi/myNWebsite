
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, BookOpen, BarChart } from "lucide-react";
import { Link } from "wouter";

// Sample course data
const courses = [
  {
    id: 1,
    title: "IELTS Reading Mastery",
    description: "Master IELTS reading techniques with proven strategies",
    level: "Intermediate",
    duration: "6 weeks",
    lessons: 24,
    image: "/attached_assets/testomny 1.jpeg"
  },
  {
    id: 2,
    title: "IELTS Writing Excellence",
    description: "Learn how to write high-scoring essays and reports",
    level: "Advanced",
    duration: "8 weeks",
    lessons: 32,
    image: "/attached_assets/testomny 2.jpeg"
  },
  {
    id: 3,
    title: "IELTS Speaking Confidence",
    description: "Develop fluency and confidence for your speaking test",
    level: "Beginner to Advanced",
    duration: "5 weeks",
    lessons: 20,
    image: "/attached_assets/testomny 3.jpeg"
  },
  {
    id: 4,
    title: "IELTS Listening Strategies",
    description: "Enhance your listening skills with targeted practice",
    level: "Intermediate",
    duration: "4 weeks",
    lessons: 16,
    image: "/attached_assets/testomny 4.jpeg"
  },
  {
    id: 5,
    title: "IELTS Exam Preparation",
    description: "Comprehensive preparation for all IELTS test sections",
    level: "All Levels",
    duration: "10 weeks",
    lessons: 40,
    image: "/attached_assets/testomny 1.jpeg"
  },
  {
    id: 6,
    title: "Academic Vocabulary Builder",
    description: "Expand your academic vocabulary for higher band scores",
    level: "Intermediate to Advanced",
    duration: "6 weeks",
    lessons: 24,
    image: "/attached_assets/testomny 2.jpeg"
  }
];

export default function Courses() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background">
          <motion.div
            className="absolute inset-0"
            style={{
              background: "radial-gradient(circle at 50% 50%, var(--primary) 0%, transparent 50%)",
              filter: "blur(120px)",
            }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
              scale: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
              Explore Our IELTS Courses
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              From reading and writing to speaking and listening, our specialized courses 
              cover every aspect of the IELTS exam to help you achieve your target band score.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="rounded-full px-8" size="lg">
                Get Started
              </Button>
              <Button variant="outline" className="rounded-full px-8" size="lg">
                View Assessment
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link href={`/course/${course.id}`}>
                <Card className="h-full overflow-hidden border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg group cursor-pointer">
                  <div className="relative h-48 overflow-hidden">
                    <motion.img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                    />
                    <Badge className="absolute top-4 right-4 bg-primary/90">{course.level}</Badge>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {course.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">{course.description}</p>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <BookOpen className="h-4 w-4" />
                        <span>{course.lessons} lessons</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <BarChart className="h-4 w-4" />
                        <span>{course.level}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold mb-6">Ready to Boost Your IELTS Score?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join thousands of students who have achieved their target band scores with our expert-led courses.
          </p>
          <Button className="rounded-full px-8 py-6 text-lg" size="lg">
            Start Your IELTS Journey Today
          </Button>
        </motion.div>
      </section>
    </div>
  );
}
