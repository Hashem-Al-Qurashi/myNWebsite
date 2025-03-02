
import { motion } from "framer-motion";

export default function Testimonials() {
  // Array of testimonial images
  const testimonialImages = [
    "/testimonials/testomny 1.jpeg",
    "/testimonials/testomny 2.jpeg",
    "/testimonials/testomny 3.jpeg",
    "/testimonials/testomny 4.jpeg",
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonialImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-lg shadow-md overflow-hidden relative z-30"
            >
              <img
                src={image}
                alt={`Testimonial ${index + 1}`}
                className="w-full h-auto object-cover"
                onError={(e) => {
                  console.error(`Failed to load image: ${image}`);
                  e.currentTarget.src = "/placeholder.jpg"; // Fallback image
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
