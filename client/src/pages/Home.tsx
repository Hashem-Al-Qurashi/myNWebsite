import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      
      <section className="py-20 bg-gradient-to-b from-background to-primary/5">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">جاهز نبدأ؟</h2>
          <p className="text-lg text-muted-foreground mb-8">
        !  بلا قيود – تعلم بالسرعة التي تناسبك          </p>
          <Button size="lg" className="text-lg px-8">
JOIN NOW          </Button>
        </div>
      </section>
    </div>
  );
}
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import Testimonials from "@/components/landing/Testimonials";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <Hero />
      
      {/* Features Section */}
      <Features />
      
      {/* Testimonials Section */}
      <Testimonials />
      
      {/* CTA Section */}
      <section className="py-20 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center rtl"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center mx-auto">لا تخلي اختبار بسيط يكون العائق بينك وبين مستقبلك!</h2>
          <p className="text-sm md:text-lg text-muted-foreground mb-8">
            انضم لآلاف الطلاب اللي حققوا درجاتهم المستهدفة معنا وابدأ رحلتك نحو النجاح اليوم.
          </p>
          <Button as={Link} href="/courses" className="rounded-full px-8 py-6 text-lg" size="lg">
            ابدأ رحلتك اليوم
          </Button>
        </motion.div>
      </section>
    </div>
  );
}
