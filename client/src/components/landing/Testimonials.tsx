
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";

export default function Testimonials() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const arrowControls = useAnimation();
  
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
  ]

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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonialImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05, 
                rotate: 2,
                y: -10,
                x: index % 2 === 0 ? 15 : -15, // Move even cards right, odd cards left
                transition: { duration: 0.3 }
              }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="testimonial-card bg-card rounded-lg shadow-md overflow-hidden relative z-30"
            >
              {/* Arrow indicator that appears on hover */}
              {hoveredIndex === index && (
                <motion.div 
                  className="absolute -top-12 left-1/2 transform -translate-x-1/2 z-40"
                  animate={arrowControls}
                >
                  <ArrowDown className="h-8 w-8 text-primary" />
                </motion.div>
              )}
              <div className="testimonial-image-container">
                <motion.img
                  src={image}
                  alt={`Testimonial ${index + 1}`}
                  className="max-w-full max-h-full w-auto h-auto"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
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
                  {index === 0 && "استفدت كثيراً من دوراتهم في تحسين مستواي"}
                  {index === 1 && "ساعدوني في الحصول على درجة 7.5 من المحاولة الأولى"}
                  {index === 2 && "أسلوب شرح ممتاز ونصائح قيمة طوال الدورة"}
                  {index === 3 && "أفضل منصة لتحضير اختبار الآيلتس بدون منازع"}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
