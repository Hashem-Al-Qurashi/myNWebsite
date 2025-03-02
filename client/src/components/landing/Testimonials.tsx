import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useMediaQuery } from "@/lib/hooks/use-media-query";

export default function Testimonials() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const arrowControls = useAnimation();
  const isMobile = useMediaQuery("(max-width: 640px)");

  // Start the continuous spiral animation for the arrow
  useEffect(() => {
    if (hoveredIndex !== null) {
      arrowControls.start({
        rotate: [0, 360],
        y: [0, 5, 0],
        transition: { 
          rotate: { repeat: Infinity, duration: 2, ease: "linear" },
          y: { repeat: Infinity, duration: 1, ease: "easeInOut" }
        }
      });
    }
  }, [hoveredIndex, arrowControls]);

  // Using properly formatted paths to the testimonial images
  const testimonialImages = [
    "./public/testomny-1.jpeg",
    "./public/testomny-2.jpeg",
    "./public/testomny-3.jpeg",
    "./public/testomny-4.jpeg",
  ];

  const testimonialTexts = [
    "استفدت كثيراً من دوراتهم في تحسين مستواي",
    "ساعدوني في الحصول على درجة 7.5 من المحاولة الأولى",
    "أسلوب شرح ممتاز ونصائح قيمة طوال الدورة",
    "أفضل منصة لتحضير اختبار الآيلتس بدون منازع"
  ];

  return (
    <section className="py-16 bg-background relative z-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-10"
        >
          شهادات العملاء
        </motion.h2>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {testimonialImages.map((image, index) => (
              <CarouselItem key={index} className={`${isMobile ? 'basis-full' : 'basis-1/2 md:basis-1/3 lg:basis-1/4'}`}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                  onHoverStart={() => setHoveredIndex(index)}
                  onHoverEnd={() => setHoveredIndex(null)}
                  className="testimonial-card bg-card rounded-lg shadow-md overflow-hidden relative z-30 h-full hardware-accelerated will-change-transform reduce-motion-mobile"
                >
                  {/* Arrow indicator that appears on hover */}
                  {hoveredIndex === index && (
                    <motion.div 
                      className="absolute -top-12 left-1/2 transform -translate-x-1/2 z-40"
                      animate={arrowControls}
                    >
                      <ArrowRight className="h-8 w-8 text-primary" />
                    </motion.div>
                  )}
                  <div className="testimonial-image-container">
                    <img
                      src={image}
                      alt={`Testimonial ${index + 1}`}
                      className="max-w-full max-h-full w-auto h-auto"
                      loading="lazy"
                      onError={(e) => {
                        console.error(`Failed to load image: ${image}`);
                        // Adding fallback to a placeholder
                        e.currentTarget.src = '/placeholder.jpg';
                      }}
                    />
                    <motion.div 
                      className="testimonial-overlay"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                  <motion.div 
                    className="p-4 text-center"
                    whileHover={{ backgroundColor: "rgba(var(--primary-rgb), 0.05)" }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="font-bold mb-1">عميل {index + 1}</h3>
                    <p className="text-sm text-muted-foreground">
                      {testimonialTexts[index]}
                    </p>
                  </motion.div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="carousel-nav-arrow absolute left-0 top-1/2 -translate-y-1/2 z-30" />
          <CarouselNext className="carousel-nav-arrow absolute right-0 top-1/2 -translate-y-1/2 z-30" />
        </Carousel>
      </div>
    </section>
  );
}