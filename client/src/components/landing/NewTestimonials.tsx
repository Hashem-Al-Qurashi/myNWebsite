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
import { Image } from "@/components/ui/image";

const testimonials = [
  {
    id: 1,
    name: "أحمد القحطاني",
    role: "طالب الآيلتس",
    content: "أسلوب شرح مميز وسهل وأمثلة واقعية تساعد على الفهم بشكل أسرع.",
    avatarSrc: "/images/testimonials/testomny 1.jpeg"
  },
  {
    id: 2,
    name: "سارة المهيري",
    role: "طالبة الآيلتس",
    content: "الدورة كانت تحول كبير في مستواي، حصلت على الدرجة اللي أبيها بأقل من شهرين.",
    avatarSrc: "/images/testimonials/testomny 2.jpeg"
  },
  {
    id: 3,
    name: "محمد العتيبي",
    role: "طالب الآيلتس",
    content: "المدرسين محترفين ودائماً جاهزين للمساعدة. تقييمهم لنقاط ضعفي ساعدني كثير.",
    avatarSrc: "/images/testimonials/testomny 3.jpeg"
  },
  {
    id: 4,
    name: "نورة السعيد",
    role: "طالبة الآيلتس",
    content: "أنصح بشدة بهذه الدورة لأي شخص يريد تحسين مستواه في الآيلتس بسرعة وفعالية.",
    avatarSrc: "/images/testimonials/testomny 4.jpeg"
  }
];

export default function NewTestimonials() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="container px-4 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">آراء طلابنا</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            شوف آراء طلابنا اللي حققوا نتائج مذهلة بعد إكمال دورتنا
          </p>
        </motion.div>

        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3 p-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full border border-primary/10 bg-card/50 backdrop-blur-lg">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="mb-4 flex items-center">
                        <Avatar className="h-12 w-12 border-2 border-primary/20">
                          <AvatarImage src={testimonial.avatarSrc} alt={testimonial.name} />
                          <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div className="mr-4">
                          <h4 className="font-medium">{testimonial.name}</h4>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </div>
                      <p className="text-muted-foreground flex-grow">{testimonial.content}</p>
                      <div className="mt-4 flex justify-end">
                        <img 
                          src={testimonial.avatarSrc} 
                          alt={`Testimonial from ${testimonial.name}`}
                          className="w-32 h-32 rounded-md object-cover shadow-lg"
                          onError={(e) => {
                            console.log("Image failed to load:", testimonial.avatarSrc);
                            e.currentTarget.src = "/placeholder.jpg";
                          }}
                        />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-0 -translate-x-1/2" />
          <CarouselNext className="absolute right-0 translate-x-1/2" />
        </Carousel>
      </div>
    </section>
  );
}