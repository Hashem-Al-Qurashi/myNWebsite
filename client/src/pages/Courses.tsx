
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Video, FileText, Clock } from "lucide-react";
import { useNavigate } from "wouter";

const courseCategories = [
  {
    title: "IELTS Reading",
    description: "Master skimming, scanning, and detailed reading techniques",
    icon: BookOpen,
    color: "from-blue-500 to-cyan-400",
    count: "12 lessons",
    level: "Beginner to Advanced"
  },
  {
    title: "IELTS Writing",
    description: "Learn structure, vocabulary, and high-scoring response templates",
    icon: FileText,
    color: "from-violet-500 to-purple-400",
    count: "15 lessons",
    level: "All Levels"
  },
  {
    title: "IELTS Listening",
    description: "Develop note-taking and prediction skills for all sections",
    icon: Video,
    color: "from-amber-500 to-orange-400",
    count: "10 lessons",
    level: "Beginner to Advanced"
  },
  {
    title: "IELTS Speaking",
    description: "Practice fluency, pronunciation, and coherent responses",
    icon: Clock,
    color: "from-emerald-500 to-green-400",
    count: "8 lessons",
    level: "All Levels"
  },
];

export default function Courses() {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen relative overflow-hidden gradient-bg py-24">
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
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-6 rtl">
            دوراتنا المتخصصة في الآيلتس
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto rtl mb-8">
            تعلم مع خبراء الآيلتس واحصل على الدرجة التي تحتاجها
          </p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 rounded-full bg-gradient-to-r from-primary via-cyan-500 to-primary hover:opacity-90 transition-all duration-300 hover:scale-105 shadow-lg shadow-primary/25"
              onClick={() => navigate("/assessment")}
            >
              حدد مستواك مجاناً
            </Button>
          </motion.div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {courseCategories.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <Card className="h-full overflow-hidden bg-card/50 backdrop-blur-sm border-primary/10 hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex justify-between items-center mb-2">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${course.color} shadow-lg`}>
                      <course.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <span className="font-medium">{course.count}</span> • {course.level}
                    </div>
                  </div>
                  <CardTitle className="text-2xl">{course.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">{course.description}</p>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Button 
                      className="w-full rounded-lg"
                      onClick={() => navigate(`/course/${course.title.toLowerCase().replace(/\s+/g, "-")}`)}
                    >
                      عرض الدورة
                    </Button>
                  </motion.div>
                </CardContent>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent opacity-0 transition-opacity"
                  whileHover={{ opacity: 1 }}
                />
              </Card>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="p-8 bg-card/60 backdrop-blur-sm rounded-2xl border border-primary/10 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 rtl">لماذا تختار دوراتنا؟</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 rtl">
              {[
                "منهج مصمم من قبل معلمين حاصلين على درجات عالية",
                "تدريبات وامتحانات محاكية للامتحان الحقيقي",
                "دعم مستمر ومتابعة شخصية من المدربين",
                "ضمان تحسين الدرجة أو استرداد الأموال",
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                >
                  <div className="h-2 w-2 rounded-full bg-primary shrink-0" />
                  <p>{feature}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
