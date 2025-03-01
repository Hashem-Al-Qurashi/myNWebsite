import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Full Stack Developer",
    image: "https://images.unsplash.com/photo-1544972917-3529b113a469",
    quote: "The AI-powered learning assistant helped me master complex programming concepts in record time."
  },
  {
    name: "Michael Chen",
    role: "Data Scientist",
    image: "https://images.unsplash.com/photo-1660463531472-a86bb8f9f48e",
    quote: "The personalized curriculum and hands-on projects accelerated my career growth significantly."
  },
  {
    name: "Emily Rodriguez",
    role: "Product Designer",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7",
    quote: "From beginner to professional, this platform provided the perfect learning path for my UX career."
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
          <h2 className="text-4xl font-bold mb-4">
            Success Stories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of learners who have transformed their careers
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
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full bg-card/50 backdrop-blur-sm border-primary/10 hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-6">
                        <Avatar className="h-14 w-14 border-2 border-primary/20">
                          <AvatarImage src={testimonial.image} alt={testimonial.name} />
                          <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                        </Avatar>
                        <div className="ml-4">
                          <h4 className="font-semibold">{testimonial.name}</h4>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </div>
                      <p className="italic text-foreground/80">"{testimonial.quote}"</p>
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
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Alex Johnson",
    role: "Product Designer",
    content: "This platform completely transformed our design workflow. It's intuitive, powerful, and a joy to use every day.",
    image: "/avatar-1.png",
  },
  {
    name: "Sarah Williams",
    role: "Web Developer",
    content: "I can't believe how much time I've saved with this tool. The integration is seamless and the results are stunning.",
    image: "/avatar-2.png",
  },
  {
    name: "Michael Chen",
    role: "Startup Founder",
    content: "From concept to launch in half the time. This platform has been instrumental in our success.",
    image: "/avatar-3.png",
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Director",
    content: "Our team's productivity has skyrocketed since we started using this tool. Absolutely worth the investment.",
    image: "/avatar-4.png",
  },
];

export function Testimonials() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-background to-transparent z-10" />
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-background to-transparent z-10" />
      
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[30%] left-[10%] h-[400px] w-[400px] rounded-full bg-primary/10 blur-[100px]" />
        <div className="absolute bottom-[10%] right-[10%] h-[300px] w-[300px] rounded-full bg-accent/10 blur-[100px]" />
      </div>
      
      <div className="container px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            What Our Users Say
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Join thousands of satisfied customers using our platform to create amazing experiences.
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
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="border-0 bg-gradient-to-br from-background via-background to-secondary/50 shadow-md h-full">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <Avatar>
                          <AvatarFallback className="bg-primary/10 text-primary">
                            {testimonial.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </div>
                      <p className="text-muted-foreground italic">"{testimonial.content}"</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-2 mt-8">
            <CarouselPrevious className="static transform-none rounded-full" />
            <CarouselNext className="static transform-none rounded-full" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
