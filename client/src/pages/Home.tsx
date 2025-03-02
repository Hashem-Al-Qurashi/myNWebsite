import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import { Button } from "@/components/ui/button";
import React from "react";
import { motion } from "framer-motion";


const testimonials = [
  { image: "/attached_assets/testomny 1.jpeg", quote: "Testimonial 1" },
  { image: "/attached_assets/testomny 2.jpeg", quote: "Testimonial 2" },
  { image: "/attached_assets/testomny 3.jpeg", quote: "Testimonial 3" },
  { image: "/attached_assets/testomny 4.jpeg", quote: "Testimonial 4" },
];

function NewTestimonials() {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-100 p-6 rounded-lg shadow-md"
            >
              <img
                src={testimonial.image}
                alt={`Testimonial ${index + 1}`}
                className="w-full mb-4 rounded-lg"
              />
              <p className="text-lg">{testimonial.quote}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <NewTestimonials />

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