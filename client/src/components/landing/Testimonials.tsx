
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Ahmed Hassan",
    role: "Band 7.5 Achiever",
    location: "UAE",
    image: "/attached_assets/testomny 1.jpeg",
    quote: "Before joining, I struggled with IELTS Reading (Band 5.5). After following the proven strategies here, I achieved Band 7.5! The personalized feedback made all the difference.",
    improvement: "5.5 → 7.5",
  },
  {
    name: "Sarah Chen",
    role: "Band 8.0 Achiever",
    location: "Singapore",
    image: "/attached_assets/testomny 2.jpeg",
    quote: "The writing templates and speaking strategies helped me secure Band 8.0. The mock tests are incredibly close to the real exam. Worth every minute!",
    improvement: "6.0 → 8.0",
  },
  {
    name: "Maria Rodriguez",
    role: "Band 7.0 Achiever",
    location: "Mexico",
    image: "/attached_assets/testomny 3.jpeg",
    quote: "The listening practice materials are excellent! I went from Band 6.0 to 7.0 in just 6 weeks. The step-by-step approach really works.",
    improvement: "6.0 → 7.0",
  },
  {
    name: "John Smith",
    role: "Band 7.5 Achiever",
    location: "Canada",
    image: "/attached_assets/testomny 4.jpeg",
    quote: "The structured approach and weekly feedback sessions were game-changers. Improved my speaking score from 6.5 to 7.5!",
    improvement: "6.5 → 7.5"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Glassmorphism background */}
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
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 rtl">
            قصص النجاح
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto rtl">
            انضم إلى آلاف الطلاب الذين حققوا درجاتهم المستهدفة في الآيلتس
          </p>
        </motion.div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 p-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="h-full"
                >
                  <Card className="h-full bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/30 hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6">
                      <motion.div 
                        className="relative group"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Avatar className="h-24 w-24 border-2 border-primary/20 mx-auto mb-6 overflow-hidden">
                          <motion.div
                            className="w-full h-full"
                            whileHover={{ scale: 1.15 }}
                            transition={{ duration: 0.4 }}
                          >
                            <AvatarImage 
                              src={testimonial.image}
                              alt={testimonial.name}
                              className="object-cover"
                            />
                            <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                          </motion.div>
                        </Avatar>
                        <div className="text-center mb-4">
                          <h4 className="font-semibold">{testimonial.name}</h4>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                          <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                        </div>
                      </motion.div>
                      <div className="mb-4 p-2 bg-primary/10 rounded-lg text-center">
                        <span className="text-sm font-semibold gradient-text">
                          Band Score Improvement: {testimonial.improvement}
                        </span>
                      </div>
                      <p className="italic text-foreground/80 text-sm">"{testimonial.quote}"</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
}
