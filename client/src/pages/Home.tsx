import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import { Button } from "@/components/ui/button";
import React from "react";
import { motion } from "framer-motion";
import SocialReels from "@/components/landing/SocialReels"; // Added import
import Testimonials from "@/components/landing/Testimonials";

function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <Testimonials />
      <SocialReels /> {/* Added SocialReels component */}

      <section className="py-20 bg-gradient-to-b from-background to-primary/5">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">جاهز نبدأ؟</h2>
          <p className="text-lg text-muted-foreground mb-8">
            ! بلا قيود – تعلم بالسرعة التي تناسبك
          </p>
          <Button size="lg" className="text-lg px-8">
            JOIN NOW
          </Button>
        </div>
      </section>
    </div>
  );
}

export default Home;