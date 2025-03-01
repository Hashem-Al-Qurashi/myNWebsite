import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, BookOpen, BarChart, CheckCircle2, Zap, Target } from "lucide-react";
import { Link } from "wouter";

export default function Courses() {
  return (
    <div className="min-h-screen bg-background">
      {/* Unique Bold Header */}
      <div className="w-full py-6 bg-primary/5 backdrop-blur-sm border-b border-primary/10 sticky top-0 z-20 mb-8">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.8,
              type: "spring",
              bounce: 0.4
            }}
            className="flex justify-center items-center"
          >
            <span className="text-5xl font-black rtl bg-clip-text text-transparent bg-gradient-to-r from-primary via-cyan-400 to-primary px-3 py-1 rounded-lg border-2 border-primary/20 shadow-lg shadow-primary/10 transform hover:scale-105 transition-all duration-300">
              خاصة ومباشرة
            </span>
          </motion.div>
        </div>
      </div>

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
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70 rtl">
              دورات آيلتس متخصصة
            </h1>
            <p className="text-lg text-muted-foreground mb-8 rtl">
              نهج شامل وفعال لتطوير مهاراتك في اختبار الآيلتس واجتيازه بثقة ونجاح
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="rounded-full px-8" size="lg">
                ابدأ الآن
              </Button>
              <Link href="/quiz">
                <Button variant="outline" className="rounded-full px-8" size="lg">
                  حدد مستواك
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Three-Step Approach */}
      {/* What makes our courses special */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/30 relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 rtl gradient-text">
              إيش اللي يميز دورتي عن أي دورة ثانية؟
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-card/70 backdrop-blur-sm rounded-xl p-6 border border-primary/10 hover:border-primary/30 transition-all shadow-lg hover:shadow-primary/5"
            >
              <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 rtl text-center">دورة مخصصة وشخصية</h3>
              <p className="text-muted-foreground rtl text-center">
                بكل بساطة، دورتي خاصة ومباشرة، مو دورة معلبة للجميع! لأنك مميز وتستاهل اهتمام كامل، أكون معاك بتركيزي الكامل.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-card/70 backdrop-blur-sm rounded-xl p-6 border border-primary/10 hover:border-primary/30 transition-all shadow-lg hover:shadow-primary/5"
            >
              <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 rtl text-center">دعم متواصل ومباشر</h3>
              <p className="text-muted-foreground rtl text-center">
                عندك التواصل المباشر معي على واتساب 24/7 لأي استفسار أو دعم تحتاجه، أسمعك، أصحح لك، وأوجهك خطوة بخطوة.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-card/70 backdrop-blur-sm rounded-xl p-6 border border-primary/10 hover:border-primary/30 transition-all shadow-lg hover:shadow-primary/5"
            >
              <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 rtl text-center">فعالية مضمونة</h3>
              <p className="text-muted-foreground rtl text-center">
                كل دقيقة في المحاضرة محسوبة لصالحك، لأنك جالس مع خبير في الآيلتس. مصممة لك، عشان تضمن أعلى درجة بأقل وقت وأفضل طريقة!
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4 rtl">نهجنا المتكامل للنجاح في الآيلتس</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto rtl">
              منهجية مدروسة من ثلاث خطوات أساسية لضمان وصولك إلى الدرجة المستهدفة
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1: التطوير */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full overflow-hidden border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <BarChart className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-center rtl">
                    التطوير - الأساس الذي تبني عليه
                  </h3>
                  <div className="space-y-4 rtl">
                    <p className="text-muted-foreground">
                      عشان تقدر تهاجم الاختبار بثقة، لازم أولًا تطور مهاراتك الأربعة:
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span><strong>الاستماع</strong> – تسمع وتفهم، مو بس تهز رأسك وتقول "أوكي"!</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span><strong>القراءة</strong> – كيف تفك شفرة النصوص الطويلة بدون ما تحس نفسك غرقان في بحر كلام؟</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span><strong>الكتابة</strong> – تعبر عن أفكارك بأسلوب مرتب بدون ما تصير رواية من ٣٠٠ صفحة!</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span><strong>المحادثة</strong> – تتكلم بثقة بدون ما تعلق عند أول جملة!</span>
                      </li>
                    </ul>
                    <p className="text-muted-foreground mt-4">
                      إذا أهملت التطوير، راح تحس الاختبار وحش مستحيل تتغلب عليه! لكن مع التدريب الصح، بيصير مجرد "ورقة أسئلة" ما تخوف أبدًا!
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Step 2: التكنيكات */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full overflow-hidden border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <Zap className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-center rtl">
                    التكنيكات - تهكير الاختبار بطريقة ذكية
                  </h3>
                  <div className="space-y-4 rtl">
                    <p className="text-muted-foreground">
                      لو حاولت تجاوب بطريقة عادية، فاحتمال كبير يخلص الوقت وأنت ما حليت إلا ٢٠٪ من الاختبار! هنا يجي دور التكنيكات، وهي ببساطة حيل ذكية تساعدك تحل بسرعة وبدقة.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>كيف تقرأ سؤال وتعرف الجواب قبل حتى ما تكمل قراءة الخيارات؟</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>كيف تستغل كل ثانية في الاختبار بأفضل طريقة؟</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>كيف تخلي قسم الكتابة والمحادثة لعبتك؟</span>
                      </li>
                    </ul>
                    <p className="text-muted-foreground mt-4">
                      مع تكنيكات مدروسة، تقدر تحول الاختبار من تحدي إلى فرصة لإظهار مهاراتك!
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Step 3: التدرب */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="h-full overflow-hidden border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <Target className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-center rtl">
                    التدرب - السر اللي يضمن لك الدرجة اللي تبغاها
                  </h3>
                  <div className="space-y-4 rtl">
                    <p className="text-muted-foreground">
                      بدون تدريب، حتى لو عندك أفضل تكنيكات، راح تدخل الاختبار وتحس أنك ضايع! لازم تتمرن على الأقل على ٧ اختبارات محاكية بالكامل.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>تصير التكنيكات عندك رد فعل تلقائي</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>تعوّد نفسك على ضغط الوقت وما تتوتر</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>تعرف كيف تحافظ على تركيزك من أول دقيقة لآخر لحظة</span>
                      </li>
                    </ul>
                    <p className="text-muted-foreground mt-4">
                      التدريب المستمر هو سر الوصول للدرجة المطلوبة بثقة واطمئنان!
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Our Course? */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-primary/5">
          <motion.div
            className="absolute inset-0"
            style={{
              background: "radial-gradient(circle at 30% 50%, var(--primary) 0%, transparent 50%)",
              filter: "blur(120px)",
            }}
            animate={{
              opacity: [0.05, 0.15, 0.05],
              scale: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4 rtl">ليش دورتي مختلفة؟</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto rtl">
              عشان أضمن لك أنك بتوصل للنتيجة اللي تبغاها، عندي ٤ معايير أساسية في الدورة
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-card/70 backdrop-blur-sm p-6 rounded-xl border border-primary/10 rtl"
            >
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span>تخلص من عقدة الآيلتس</span>
              </h3>
              <p className="text-muted-foreground">
                حاب تفتك من عقدة الآيلتس وتجيب الدرجة اللي تحتاجها؟ الدورة مصممة عشان تحول قلقك لثقة ونتيجة مضمونة.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-card/70 backdrop-blur-sm p-6 rounded-xl border border-primary/10 rtl"
            >
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span>توفير الوقت والجهد</span>
              </h3>
              <p className="text-muted-foreground">
                وقتك ضيق؟ تبغى طريقة توفر لك الجهد والتعب؟ منهجنا مختصر ومركز على اللي يهمك فعلاً.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-card/70 backdrop-blur-sm p-6 rounded-xl border border-primary/10 rtl"
            >
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span>التدريب اليومي</span>
              </h3>
              <p className="text-muted-foreground">
                تقدر تلتزم بـ ٣٠ دقيقة تدريب يوميًا على الأقل؟ هذا كل اللي تحتاجه للوصول لهدفك مع دورتنا.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-card/70 backdrop-blur-sm p-6 rounded-xl border border-primary/10 rtl"
            >
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span>لمستوى فوق المبتدئ</span>
              </h3>
              <p className="text-muted-foreground">
                مستواك فوق المبتدئ؟ دورتنا مصممة لمن يعرف أساسيات اللغة ويريد تطوير مهاراته للوصول لمستويات متقدمة.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Results and Guarantee */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="order-2 md:order-1"
            >
              <div className="bg-card shadow-lg rounded-2xl overflow-hidden border border-primary/10">
                <div className="bg-primary/10 p-6 rtl">
                  <h3 className="text-2xl font-bold mb-2">نتائجنا تتكلم</h3>
                  <p className="text-muted-foreground">أرقام حقيقية لطلابنا السابقين</p>
                </div>
                <div className="p-6 space-y-6 rtl">
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center">
                      <span className="font-bold text-primary">75+</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">تكنيك تفاعلي</h4>
                      <p className="text-sm text-muted-foreground">داخل الدورة</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center">
                      <span className="font-bold text-primary">250+</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">كلمة أساسية</h4>
                      <p className="text-sm text-muted-foreground">تحفظها بطريقة ممتعة</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center">
                      <span className="font-bold text-primary">50+</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">قاعدة أساسية</h4>
                      <p className="text-sm text-muted-foreground">تتعلمها بأسلوب تطبيقي</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center">
                      <span className="font-bold text-primary">16</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">ساعة يومياً</h4>
                      <p className="text-sm text-muted-foreground">دعم مستمر مني ومن فريقي</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="order-1 md:order-2 rtl"
            >
              <h2 className="text-3xl font-bold mb-6">هل الدورة لك؟</h2>
              <p className="text-lg text-muted-foreground mb-8">
                إذا كنت فاهم أساسيات الإنجليزي، وماشي في تطوير نفسك، فممكن ما تحتاج تسجل معي. استمر، وإن شاء الله توصل!
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                لكن إذا تبغاني أكون معاك خطوة بخطوة، أعطيك كل التكنيكات اللي تحتاجها، وأضمن لك توصل بأسرع وقت – فالدورة هذي هي اللي تدور عليها!
              </p>

              <div className="bg-primary/10 p-6 rounded-xl border border-primary/20 mb-8">
                <h3 className="text-xl font-bold mb-2">وعدي لك</h3>
                <p className="text-lg">
                  إذا ما لاحظت تحسن واضح خلال ٣٠ يوم، أرجع لك فلوسك بالكامل!
                </p>
              </div>

              <Button className="w-full py-6 text-lg rounded-xl" size="lg">
                ابدأ الآن
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center rtl"
        >
          <h2 className="text-3xl font-bold mb-6">لا تخلي اختبار بسيط يكون العائق بينك وبين مستقبلك!</h2>
          <p className="text-lg text-muted-foreground mb-8">
            انضم لآلاف الطلاب اللي حققوا درجاتهم المستهدفة معنا وابدأ رحلتك نحو النجاح اليوم.
          </p>
          <Button className="rounded-full px-8 py-6 text-lg" size="lg">
            ابدأ رحلتك اليوم
          </Button>
        </motion.div>
      </section>
    </div>
  );
}