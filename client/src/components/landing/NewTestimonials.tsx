
import { useState } from "react";
import { motion } from "framer-motion";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  location: string;
  image: string;
  quote: string;
  improvement: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Ahmed Hassan",
    role: "Band 7.5 Achiever",
    location: "UAE",
    image: "./attached_assets/testomny 1.jpeg",
    quote: "Before joining, I struggled with IELTS Reading (Band 5.5). After following the proven strategies here, I achieved Band 7.5! The personalized feedback made all the difference.",
    improvement: "5.5 → 7.5",
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "Band 8.0 Achiever",
    location: "Singapore",
    image: "./attached_assets/testomny 2.jpeg",
    quote: "The writing templates and speaking strategies helped me secure Band 8.0. The mock tests are incredibly close to the real exam. Worth every minute!",
    improvement: "6.0 → 8.0",
  },
  {
    id: 3,
    name: "Maria Rodriguez",
    role: "Band 7.0 Achiever",
    location: "Mexico",
    image: "./attached_assets/testomny 3.jpeg",
    quote: "The listening practice materials are excellent! I went from Band 6.0 to 7.0 in just 6 weeks. The step-by-step approach really works.",
    improvement: "6.0 → 7.0",
  },
  {
    id: 4,
    name: "John Smith",
    role: "Band 7.5 Achiever",
    location: "Canada",
    image: "./attached_assets/testomny 4.jpeg",
    quote: "The structured approach and weekly feedback sessions were game-changers. Improved my speaking score from 6.5 to 7.5!",
    improvement: "6.5 → 7.5",
  },
];

export default function NewTestimonials() {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-primary/5 relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 rtl">
            قصص النجاح
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto rtl">
            انضم إلى آلاف الطلاب الذين حققوا درجاتهم المستهدفة في الآيلتس
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="testimonial-card bg-card/80 backdrop-blur-sm border border-primary/10 rounded-xl overflow-hidden h-full transition-all duration-300">
                <div className="relative">
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="testimonial-image-container relative w-full h-52 overflow-hidden"
                  >
                    <motion.div
                      whileHover={{ scale: 1.15 }}
                      transition={{ duration: 0.4 }}
                      className="w-full h-full"
                    >
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          console.error(`Failed to load image: ${testimonial.image}`);
                          e.currentTarget.src = "./attached_assets/testomny 1.jpeg"; // Fallback image
                        }}
                      />
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="font-semibold text-lg">{testimonial.name}</p>
                      <p className="text-sm opacity-80">{testimonial.location}</p>
                    </div>
                  </motion.div>
                </div>
                <div className="p-6">
                  <div className="mb-4 p-2 bg-primary/10 rounded-lg text-center">
                    <span className="text-sm font-semibold gradient-text">
                      Band Score Improvement: {testimonial.improvement}
                    </span>
                  </div>
                  <p className="italic text-foreground/80 line-clamp-4">"{testimonial.quote}"</p>
                  <p className="mt-4 text-sm text-primary font-medium">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
