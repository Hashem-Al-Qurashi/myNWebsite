import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import Testimonials from "@/components/landing/Testimonials";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <Testimonials />
      
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
