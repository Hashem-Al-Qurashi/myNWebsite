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
                          <AvatarImage src={testimonial.image} alt={testimonial.name} />
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