
import { useState } from "react";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sara",
    image: "/images/testimonials/testomny 1.jpeg",
    rating: 5,
    review: "درجتي في الايلتس كانت ٥.٥ وصلت إلى ٧.٥ في أقل من شهرين بعد الكورس.",
  },
  {
    id: 2,
    name: "Ahmed",
    image: "/images/testimonials/testomny 2.jpeg",
    rating: 5,
    review: "الكورس ساعدني أحقق درجة ٨ في الايلتس، مستوى عالي من التعليم والدعم.",
  },
  {
    id: 3,
    name: "Fatima",
    image: "/images/testimonials/testomny 3.jpeg",
    rating: 5,
    review: "من أفضل منصات التحضير للايلتس، المدرسين خبراء والمحتوى ممتاز.",
  },
  {
    id: 4,
    name: "Mohammed",
    image: "/images/testimonials/testomny 4.jpeg",
    rating: 5,
    review: "بفضل طريقة الشرح المبسطة قدرت أحقق التقدم اللي محتاجه في وقت قصير.",
  }
];

export default function NewTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-16 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            نجاحات طلابنا
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-muted-foreground max-w-2xl"
          >
            مئات الطلاب حققوا نتائج استثنائية في اختبار IELTS
          </motion.p>
        </div>
        
        <div className="flex items-center justify-center mb-8">
          <button 
            onClick={handlePrev}
            className="p-2 rounded-full bg-background border border-border hover:bg-primary/10 transition-all"
            aria-label="Previous testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
          
          <div className="mx-4 overflow-hidden">
            <div className="flex max-w-4xl">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="w-full"
              >
                <Card className="border-primary/10 bg-background shadow-xl">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row items-center gap-6">
                      <div className="md:w-1/3 flex flex-col items-center">
                        <Avatar className="h-24 w-24 mb-3 rounded-full border-2 border-primary">
                          <AvatarImage 
                            src={testimonials[currentIndex].image} 
                            alt={testimonials[currentIndex].name}
                            onError={(e) => {
                              console.error(`Failed to load image: ${testimonials[currentIndex].image}`);
                              e.currentTarget.onerror = null;
                              e.currentTarget.src = "/placeholder.jpg";
                            }} 
                          />
                          <AvatarFallback>{testimonials[currentIndex].name[0]}</AvatarFallback>
                        </Avatar>
                        <h3 className="text-xl font-semibold mb-1">{testimonials[currentIndex].name}</h3>
                        <div className="flex space-x-1">
                          {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                          ))}
                        </div>
                      </div>
                      
                      <div className="md:w-2/3">
                        <p className="text-lg leading-relaxed text-right">
                          "{testimonials[currentIndex].review}"
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
          
          <button 
            onClick={handleNext}
            className="p-2 rounded-full bg-background border border-border hover:bg-primary/10 transition-all"
            aria-label="Next testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
        </div>
        
        <div className="flex justify-center space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 w-8 rounded-full transition-all ${
                currentIndex === index ? "bg-primary" : "bg-border"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
      
      {/* Background decorations */}
      <div className="absolute -bottom-16 -right-16 h-40 w-40 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute top-20 -left-16 h-40 w-40 rounded-full bg-primary/5 blur-3xl" />
    </section>
  );
}
