import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Star, Crown, Gem, ArrowRight, Zap } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";

const packages = [
  {
    id: "quick-start",
    name: "البداية السريعة",
    sessions: 8,
    price: 1800,
    originalPrice: 1900,
    description: "مناسبة لك إذا تبغى ترفع درجتك بسرعة أو عندك أساس قوي وتحتاج صقل بس",
    target: "+0.5 إلى +1 درجة",
    icon: Zap,
    color: "from-blue-500/20 to-cyan-500/20",
    borderColor: "border-blue-500/20",
    popular: false,
    payments: {
      full: 1700, // 5% discount
      twoPayments: { amount: 945, total: 1890 }, // 5% fee
      threePayments: { amount: 660, total: 1980 } // 10% fee
    }
  },
  {
    id: "most-popular",
    name: "المفضلة",
    sessions: 12,
    price: 2500,
    originalPrice: 2700,
    description: "الباقة اللي 70% من طلابنا يختارونها - توازن مثالي بين الوقت والنتيجة",
    target: "+1 إلى +1.5 درجة",
    icon: Star,
    color: "from-primary/20 to-orange-500/20",
    borderColor: "border-primary/30",
    popular: true,
    payments: {
      full: 2400, // 5% discount  
      twoPayments: { amount: 1325, total: 2650 }, // 5% fee
      threePayments: { amount: 920, total: 2750 } // 10% fee
    }
  },
  {
    id: "premium",
    name: "البريميوم",
    sessions: 15,
    price: 3000,
    originalPrice: 3200,
    description: "للي يبغى يتأكد من النجاح 100% ويوصل لأعلى الدرجات",
    target: "+1.5 إلى +2 درجة",
    icon: Crown,
    color: "from-purple-500/20 to-pink-500/20",
    borderColor: "border-purple-500/20",
    popular: false,
    payments: {
      full: 2850, // 5% discount
      twoPayments: { amount: 1575, total: 3150 }, // 5% fee  
      threePayments: { amount: 1100, total: 3300 } // 10% fee
    }
  },
  {
    id: "vip-elite",
    name: "النخبة VIP",
    sessions: 25,
    price: 4750,
    originalPrice: 5200,
    description: "للطموحين اللي يبغون تجربة تعليمية كاملة مع أفضل قيمة مقابل السعر",
    target: "إتقان كامل + درجات عالية",
    icon: Gem,
    color: "from-yellow-500/20 to-amber-500/20",
    borderColor: "border-yellow-500/30",
    popular: false,
    bestValue: true,
    payments: {
      full: 4500, // 5% discount
      twoPayments: { amount: 2500, total: 5000 }, // 5% fee
      threePayments: { amount: 1750, total: 5250 } // 10% fee
    }
  }
];

const includedFeatures = [
  "دعم واتساب 24/7",
  "مواد التدريب والاختبارات التجريبية",
  "تقييم المحادثة",
  "متابعة شخصية مع الأستاذ هاشم"
];

export default function Pricing() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden rtl">
      {/* Animated Background Effects */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute h-[600px] w-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle at center, var(--primary) 0%, transparent 70%)",
            filter: "blur(120px)",
            top: "-10%",
            right: "-10%",
            opacity: 0.1,
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
            opacity: 0.08,
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
      </div>

      {/* Hero Section */}
      <section className="relative z-10 pt-20 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl font-bold mb-6 tracking-tight leading-tight">
              <span className="gradient-text">اختر الباقة اللي تناسبك</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              كلها تضمن لك تحقيق حلمك في الايلتس - اختار حسب هدفك وميزانيتك
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="relative z-10 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <Card className={`relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-background/80 dark:bg-card/50 backdrop-blur-sm ${pkg.borderColor} border-2 ${pkg.popular || pkg.bestValue ? 'scale-105' : ''}`}>
                  {/* Popular Badge */}
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                      <Badge className="bg-primary text-white px-4 py-1 text-sm font-semibold">
                        ⭐ الأكثر طلباً
                      </Badge>
                    </div>
                  )}
                  
                  {/* Best Value Badge */}
                  {pkg.bestValue && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                      <Badge className="bg-gradient-to-r from-yellow-500 to-amber-500 text-white px-4 py-1 text-sm font-semibold">
                        💎 أفضل قيمة
                      </Badge>
                    </div>
                  )}

                  <CardContent className="p-6">
                    {/* Package Header */}
                    <div className="text-center mb-6">
                      <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${pkg.color} flex items-center justify-center mx-auto mb-4`}>
                        <pkg.icon className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                      <p className="text-sm text-muted-foreground">{pkg.sessions} جلسات</p>
                    </div>

                    {/* Pricing */}
                    <div className="text-center mb-6">
                      <div className="mb-2">
                        {pkg.originalPrice > pkg.price && (
                          <span className="text-lg text-muted-foreground line-through ml-2">
                            {pkg.originalPrice} ريال
                          </span>
                        )}
                        <span className="text-3xl font-bold gradient-text">
                          {pkg.price}
                        </span>
                        <span className="text-lg text-muted-foreground"> ريال</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {Math.round(pkg.price / pkg.sessions)} ريال للجلسة
                      </p>
                    </div>

                    {/* Description */}
                    <div className="mb-6">
                      <p className="text-sm text-muted-foreground mb-3">
                        {pkg.description}
                      </p>
                      <div className="bg-primary/5 rounded-lg p-3">
                        <p className="text-sm font-semibold text-primary">
                          الهدف: {pkg.target}
                        </p>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <Button 
                      className="w-full mb-4"
                      onClick={() => window.open(WHATSAPP_URL, "_blank")}
                    >
                      احجز مكانك الحين
                      <ArrowRight className="mr-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Options */}
      <section className="relative z-10 py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">
              ادفع بالطريقة اللي تريحك
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-card/70 backdrop-blur-sm p-6 rounded-xl border border-primary/10"
              >
                <h3 className="text-xl font-semibold mb-4 text-center">
                  💰 ادفع كامل
                </h3>
                <p className="text-center text-2xl font-bold text-green-600 mb-2">
                  خصم 5%
                </p>
                <p className="text-sm text-muted-foreground text-center">
                  وفر فلوسك واحجز مكانك بأقل سعر
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-card/70 backdrop-blur-sm p-6 rounded-xl border border-primary/10"
              >
                <h3 className="text-xl font-semibold mb-4 text-center">
                  📅 دفعتين
                </h3>
                <p className="text-center text-2xl font-bold text-primary mb-2">
                  +5%
                </p>
                <p className="text-sm text-muted-foreground text-center">
                  قسط المبلغ على دفعتين - سهل ومريح
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-card/70 backdrop-blur-sm p-6 rounded-xl border border-primary/10"
              >
                <h3 className="text-xl font-semibold mb-4 text-center">
                  📅 ثلاث دفعات
                </h3>
                <p className="text-center text-2xl font-bold text-orange-600 mb-2">
                  +10%
                </p>
                <p className="text-sm text-muted-foreground text-center">
                  أقساط صغيرة - أسهل على الميزانية
                </p>
              </motion.div>
            </div>

            {/* Payment Example */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-primary/5 rounded-xl p-6 border border-primary/20"
            >
              <h3 className="text-xl font-bold mb-4 text-center">
                مثال: باقة المفضلة (2500 ريال)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="bg-background/50 rounded-lg p-4">
                  <p className="font-semibold text-green-600">كامل</p>
                  <p className="text-2xl font-bold">2400 ريال</p>
                  <p className="text-xs text-muted-foreground">وفر 100 ريال</p>
                </div>
                <div className="bg-background/50 rounded-lg p-4">
                  <p className="font-semibold text-primary">دفعتين</p>
                  <p className="text-2xl font-bold">1325 × 2</p>
                  <p className="text-xs text-muted-foreground">المجموع: 2650 ريال</p>
                </div>
                <div className="bg-background/50 rounded-lg p-4">
                  <p className="font-semibold text-orange-600">ثلاث دفعات</p>
                  <p className="text-2xl font-bold">920 × 3</p>
                  <p className="text-xs text-muted-foreground">المجموع: 2760 ريال</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* What's Included */}
      <section className="relative z-10 py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-8">شامل كل الباقات</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {includedFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 bg-card/30 p-4 rounded-lg"
                >
                  <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" />
                  <span className="text-right">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-8 tracking-tight">
              ابدأ رحلتك للنجاح اليوم!
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              انضم لآلاف الطلاب اللي حققوا أحلامهم معنا
            </p>
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 rounded-full"
              onClick={() => window.open(WHATSAPP_URL, "_blank")}
            >
              احجز استشارتك المجانية الحين
              <ArrowRight className="mr-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}