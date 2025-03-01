
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function AboutUs() {
  const statItems = [
    { value: "90%", text: "من طلابنا رفعوا درجتهم خلال 6 أسابيع" },
    { value: "85%", text: "تكلموا بثقة بعد أقل من شهرين" },
    { value: "72%", text: "من مشتركينا تجاوزوا درجة 7.0 في الآيلتس" },
    { value: "100%", text: "تدريب عملي بدون حشو أو نظريات مملة" },
  ];
  
  const features = [
    {
      title: "تعليم مبني على بيانات، مش كلام فاضي",
      description: "نقيس مستواك، نحدد نقاط ضعفك، ونعطيك خطة مخصصة تضمن لك تحسّن سريع في أقصر وقت.",
      delay: 0.1,
    },
    {
      title: "استراتيجية الـ 80/20",
      description: "نركز على 20% من المهارات اللي تعطيك 80% من النتائج، يعني نتجنب الحشو ونركز على اللي يرفع درجتك بسرعة.",
      delay: 0.2,
    },
    {
      title: "تدريب مكثف على المحادثة",
      description: "راح تتكلم، تنطق، وتتدرب على العبارات الفعلية اللي تستخدم في الاختبارات والمقابلات، عشان تاخذ الثقة والطلاقه في وقت قياسي.",
      delay: 0.3,
    },
    {
      title: "محاكاة حقيقية لاختبار الآيلتس",
      description: "ما تحتاج تفاجأ يوم الاختبار! عندنا نماذج محاكية 100% مع تصحيح دقيق يعطيك نقاط القوة والضعف قبل الاختبار الرسمي.",
      delay: 0.4,
    },
    {
      title: "مدربين خبراء + دعم مستمر",
      description: "ما راح تكون لحالك! معك مدربين مختصين، يعطونك ملاحظات مباشرة وتصحيح مفصّل لكل خطأ، بالإضافة إلى دعم متواصل 24/7.",
      delay: 0.5,
    },
  ];
  
  const guarantees = [
    "منهجية فعالة تركز على أهم الأسئلة وأكثرها تكرارًا",
    "محاكاة واقعية للاختبار عشان ما تتوتر يوم الاختبار",
    "كورسات تفاعلية بتدريب مباشر وجهاً لوجه أو أونلاين",
    "خطة مخصصة لكل طالب حسب مستواه وأهدافه",
  ];

  return (
    <div className="min-h-[calc(100vh-5rem)] bg-background relative overflow-hidden rtl">
      {/* 3D Animated background */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute h-[500px] w-[500px] rounded-full"
          style={{
            background: "radial-gradient(circle at center, var(--primary) 0%, transparent 70%)",
            filter: "blur(120px)",
            top: "-10%",
            right: "-10%",
            opacity: 0.15,
          }}
          animate={{
            scale: [1, 1.2, 1],
            y: [0, 50, 0],
            rotate: [0, 45, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute h-[400px] w-[400px] rounded-full"
          style={{
            background: "radial-gradient(circle at center, var(--primary) 0%, transparent 70%)",
            filter: "blur(100px)",
            bottom: "-5%",
            left: "-5%",
            opacity: 0.1,
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, 60, 0],
            rotate: [45, 0, 45],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute h-[300px] w-[300px] rounded-full"
          style={{
            background: "radial-gradient(circle at center, var(--primary) 0%, transparent 70%)",
            filter: "blur(80px)",
            top: "40%",
            left: "30%",
            opacity: 0.08,
          }}
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
      
      {/* Hero section */}
      <section className="relative z-10 pt-20 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl font-bold mb-6 tracking-tight leading-tight">
              <span className="gradient-text">من نحن؟</span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            >
              حياك الله! إذا كنت تدور على طريقة ترفع مستواك في الإنجليزي بسرعة وبدون تعقيد، فأنت في المكان الصح!
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-lg mb-10"
            >
              احنا متخصصين في دورات IELTS والتحدث بطلاقة، وعندنا منهجية مختلفة تمامًا عن الدورات التقليدية. بالأرقام؟ 90% من طلابنا رفعوا درجتهم في الآيلتس خلال 6 أسابيع فقط، و85% قدروا يتكلمون بثقة في مقابلات العمل بعد أقل من شهرين من التدريب معنا!
            </motion.p>
          </motion.div>
        </div>
      </section>
      
      {/* Stats section with 3D effect */}
      <section className="relative z-10 py-12">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-12 text-center"
          >
            نتائج مثبتة بأرقام حقيقية
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {statItems.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20, rotateX: 15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                whileHover={{ 
                  y: -10, 
                  rotateX: 5,
                  boxShadow: "0 20px 30px rgba(0, 0, 0, 0.1)",
                  z: 20
                }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 300
                }}
                viewport={{ once: true }}
                style={{ transformStyle: "preserve-3d" }}
                className="p-6 rounded-xl bg-card/30 backdrop-blur-sm border border-primary/10 flex flex-col items-center justify-center transform perspective-1000"
              >
                <span className="text-4xl font-bold gradient-text mb-3">{stat.value}</span>
                <span className="text-center">{stat.text}</span>
                <motion.div
                  className="absolute inset-0 rounded-xl bg-primary/5"
                  style={{ 
                    transformStyle: "preserve-3d", 
                    transform: "translateZ(-10px)",
                    opacity: 0 
                  }}
                  whileHover={{ opacity: 1 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Why choose us section */}
      <section className="relative z-10 py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-3 text-center"
          >
            ليش تختارنا؟
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center mb-12 text-muted-foreground"
          >
            نقدم لك تجربة تعليمية متكاملة ومختلفة تماماً
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20, rotateY: 5 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 3,
                  z: 10
                }}
                transition={{ 
                  duration: 0.5, 
                  delay: feature.delay,
                  type: "spring",
                  stiffness: 200
                }}
                viewport={{ once: true }}
                style={{ transformStyle: "preserve-3d" }}
                className="relative p-6 rounded-xl bg-card/40 backdrop-blur-sm border border-primary/10 overflow-hidden transform perspective-1000"
              >
                <motion.div 
                  className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/20 via-primary/60 to-primary/20"
                  initial={{ scaleX: 0, opacity: 0 }}
                  whileInView={{ scaleX: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: feature.delay + 0.3 }}
                />
                
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
                
                <motion.div
                  className="absolute inset-0 bg-primary/5 -z-10 rounded-xl"
                  style={{ 
                    transformStyle: "preserve-3d", 
                    transform: "translateZ(-5px)",
                    opacity: 0 
                  }}
                  whileHover={{ opacity: 1 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* How we guarantee your success */}
      <section className="relative z-10 py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-12 text-center"
          >
            كيف نضمن نجاحك؟
          </motion.h2>
          
          <div className="max-w-3xl mx-auto">
            {guarantees.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="mb-6 flex items-center"
              >
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 400, 
                    delay: index * 0.1 + 0.2 
                  }}
                  className="w-4 h-4 mr-4 rounded-full bg-primary/80"
                />
                <span className="text-lg">{item}</span>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-center mt-16"
          >
            <Button 
              size="lg" 
              className="group text-lg px-8 py-6 rounded-xl shadow-lg shadow-primary/10"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              ابدأ الآن
              <ArrowRight className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </section>
      
      {/* Final CTA */}
      <section className="relative z-10 py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-8 tracking-tight">
              جاهز تبدأ؟ خلي حلمك في الآيلتس يتحقق معنا بأسرع وقت وأفضل طريقة!
            </h2>
            <Button size="lg" className="group text-lg px-8 py-6 rounded-xl">
              حدد مستواك الآن
              <ArrowRight className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
