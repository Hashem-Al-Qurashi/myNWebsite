
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, ShieldCheck, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Courses() {
  // Animation variants for staggered animations
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300 } }
  };

  // Core IELTS components
  const coreComponents = [
    {
      title: "التطوير",
      subtitle: "الأساس الذي تبني عليه",
      description: "عشان تقدر تهاجم الاختبار بثقة، لازم أولًا تطور مهاراتك الأربعة:",
      items: [
        "الاستماع – تسمع وتفهم، مو بس تهز رأسك وتقول \"أوكي\"!",
        "القراءة – كيف تفك شفرة النصوص الطويلة بدون ما تحس نفسك غرقان في بحر كلام؟",
        "الكتابة – تعبر عن أفكارك بأسلوب مرتب بدون ما تصير رواية من ٣٠٠ صفحة!",
        "المحادثة – تتكلم بثقة بدون ما تعلق عند أول جملة"
      ],
      conclusion: "إذا أهملت التطوير، راح تحس الاختبار وحش مستحيل تتغلب عليه! لكن مع التدريب الصح، بيصير مجرد \"ورقة أسئلة\" ما تخوف أبدًا!"
    },
    {
      title: "التكنيكات",
      subtitle: "تهكير الاختبار بطريقة ذكية",
      description: "لو حاولت تجاوب بطريقة عادية، فاحتمال كبير يخلص الوقت وأنت ما حليت إلا ٢٠٪ من الاختبار! هنا يجي دور التكنيكات، وهي ببساطة حيل ذكية تساعدك تحل بسرعة وبدقة، بدل ما تضيع وقتك في التفكير الطويل.",
      items: [
        "كيف تقرأ سؤال وتعرف الجواب قبل حتى ما تكمل قراءة الخيارات؟",
        "كيف تستغل كل ثانية في الاختبار بأفضل طريقة؟",
        "كيف تخلي قسم الكتابة والمحادثة لعبتك؟"
      ]
    },
    {
      title: "التدرب",
      subtitle: "السر الذي يضمن لك الدرجة التي تبغاها",
      description: "بدون تدريب، حتى لو عندك أفضل تكنيكات، راح تدخل الاختبار وتحس أنك ضايع! لازم تتمرن على الأقل على ٧ اختبارات محاكية بالكامل، عشان:",
      items: [
        "تصير التكنيكات عندك رد فعل تلقائي",
        "تعوّد نفسك على ضغط الوقت وما تتوتر",
        "تعرف كيف تحافظ على تركيزك من أول دقيقة لآخر لحظة"
      ]
    }
  ];

  // Course features
  const courseStats = [
    { value: "+250", text: "سر تفاعلي داخل الدورة" },
    { value: "+100", text: "كلمة أساسية تحفظها بطريقة ممتعة" },
    { value: "+50", text: "قاعدة أساسية تتعلمها بأسلوب تطبيقي" },
    { value: "16", text: "ساعة يوميًا دعم مستمر مني ومن فريقي" }
  ];

  // Course criteria
  const courseCriteria = [
    "حاب تفتك من عقدة الآيلتس وتجيب الدرجة اللي تحتاجها؟",
    "وقتك ضيق؟ تبغى طريقة توفر لك الجهد والتعب؟",
    "تقدر تلتزم بـ ٣٠ دقيقة تدريب يوميًا على الأقل؟",
    "مستواك فوق المبتدئ؟"
  ];

  return (
    <div className="min-h-[calc(100vh-5rem)] bg-background relative overflow-hidden rtl">
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
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute h-[300px] w-[300px] rounded-full"
        style={{
          background: "radial-gradient(circle at center, var(--primary) 0%, transparent 70%)",
          filter: "blur(80px)",
          bottom: "10%",
          left: "5%",
          opacity: 0.15,
        }}
        animate={{
          scale: [1.2, 1, 1.2],
          x: [0, 40, 0],
          rotate: [45, 0, 45],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <div className="container mx-auto px-4 py-24 relative z-10">
        {/* Hero section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-20"
        >
          <h1 className="text-5xl font-bold mb-8 tracking-tight leading-tight">
            <span className="gradient-text">حقق هدفك في الآيلتس</span>
            <br />
            <span className="text-foreground/90">بأسهل وأسرع طريقة!</span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            إذا ودّك تجيب درجة قوية في اختبار الآيلتس، فخليني أقول لك شيء مهم: <strong className="text-primary">ما تحتاج تكون شكسبير!</strong> مهما كنت تعتقد أن في عوائق تمنعك، الحقيقة أنها مجرد أوهام!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="bg-card/40 backdrop-blur-md p-6 rounded-xl border border-primary/10 mb-8"
          >
            <h2 className="text-2xl font-bold mb-4 text-primary">الحل بسيط في <span className="gradient-text">"ثلاثية الآيلتس"</span></h2>
            <p className="text-lg">اللي بتخليك تقتنص أعلى الدرجات بكل سهولة</p>
          </motion.div>
        </motion.div>

        {/* The three core components */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20"
        >
          {coreComponents.map((component, index) => (
            <motion.div
              key={index}
              variants={item}
              className="relative"
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <Card className="h-full bg-card/40 backdrop-blur-sm border-primary/10 overflow-hidden">
                <CardContent className="p-8">
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl z-0"></div>
                  
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-6">
                      <span className="text-2xl font-bold">{index + 1}</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-2 gradient-text">{component.title}</h3>
                    <p className="text-lg font-semibold mb-4">{component.subtitle}</p>
                    
                    <p className="text-muted-foreground mb-6">{component.description}</p>
                    
                    <ul className="space-y-3 mb-6">
                      {component.items && component.items.map((item, i) => (
                        <motion.li 
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-start gap-3"
                        >
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                          <span>{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                    
                    {component.conclusion && (
                      <p className="text-sm font-medium border-t border-primary/10 pt-4 mt-4">
                        {component.conclusion}
                      </p>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Why our course is different */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 gradient-text">ليش دورتي مختلفة؟</h2>
            <p className="text-lg max-w-2xl mx-auto">
              عشان أضمن لك أنك بتوصل للنتيجة اللي تبغاها، عندي <strong className="text-primary">٤ معايير أساسية</strong> في الدورة:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {courseCriteria.map((criterion, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 p-4 rounded-lg bg-card/30 backdrop-blur-sm border border-primary/10"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <ShieldCheck className="h-5 w-5 text-primary" />
                </div>
                <p className="font-medium">{criterion}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Is this course for you? */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center gradient-text">هل الدورة لك؟</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="p-6 rounded-xl bg-card/30 backdrop-blur-sm border border-muted/30"
              >
                <p className="text-lg mb-2">
                  إذا كنت فاهم أساسيات الإنجليزي، وماشي في تطوير نفسك، فممكن ما تحتاج تسجل معي. استمر، وإن شاء الله توصل!
                </p>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="p-6 rounded-xl bg-primary/10 backdrop-blur-sm border border-primary/30"
              >
                <p className="text-lg mb-2">
                  <strong className="text-primary">لكن إذا تبغاني أكون معاك خطوة بخطوة</strong>، أعطيك كل التكنيكات اللي تحتاجها، وأضمن لك توصل بأسرع وقت – فالدورة هذي هي اللي تدور عليها!
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* My promise to you */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-block mb-8"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full"></div>
                <div className="relative bg-card/70 backdrop-blur-md p-8 rounded-2xl border border-primary/30">
                  <h2 className="text-3xl font-bold mb-4 gradient-text">وعدي لك</h2>
                  <p className="text-xl font-bold mb-0">
                    إذا ما لاحظت تحسن واضح خلال <span className="text-primary">٣٠ يوم</span>، أرجع لك فلوسك بالكامل!
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Course Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              <span className="gradient-text">نتائجنا تتكلم</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {courseStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 300
                }}
                viewport={{ once: true }}
                style={{ transformStyle: "preserve-3d" }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  rotateX: 5
                }}
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
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-2xl font-bold mb-6">
            <strong className="text-primary">لا تخلي اختبار بسيط يكون العائق بينك وبين مستقبلك!</strong>
          </h2>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Button size="lg" className="px-8 py-6 text-lg font-semibold" onClick={() => console.log("CTA clicked")}>
              ابدأ الآن <ArrowRight className="mr-2 h-5 w-5" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
