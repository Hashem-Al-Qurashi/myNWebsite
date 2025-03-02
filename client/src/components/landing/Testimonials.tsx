
import { motion } from "framer-motion";

export default function Testimonials() {
  // Using properly formatted paths to the testimonial images
  const testimonialImages = [
    "/attached_assets/testomny-1.jpeg",
    "/attached_assets/testomny-2.jpeg",
    "/attached_assets/testomny-3.jpeg",
    "/attached_assets/testomny-4.jpeg",
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
                transition: { duration: 0.3 }
              }}
              className="testimonial-card bg-card rounded-lg shadow-md overflow-hidden relative z-30"
            >
              <div className="testimonial-image-container">
                <motion.img
                  src={image}
                  alt={`Testimonial ${index + 1}`}
                  className="w-full h-auto object-contain"
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
