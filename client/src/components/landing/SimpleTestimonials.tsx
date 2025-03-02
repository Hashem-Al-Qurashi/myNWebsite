
import { motion } from "framer-motion";

export default function SimpleTestimonials() {
  // Using the images directly from attached_assets folder
  const testimonials = [
    { imageSrc: "/attached_assets/testomny 1.jpeg" },
    { imageSrc: "/attached_assets/testomny 2.jpeg" },
    { imageSrc: "/attached_assets/testomny 3.jpeg" },
    { imageSrc: "/attached_assets/testomny 4.jpeg" },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">شهادات العملاء</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-lg overflow-hidden shadow-md"
            >
              <img
                src={item.imageSrc}
                alt={`Testimonial ${index + 1}`}
                className="w-full h-64 object-cover"
                onError={(e) => {
                  console.error(`Failed to load image: ${item.imageSrc}`);
                  e.currentTarget.src = "/attached_assets/testomny 1.jpeg"; // Fallback image
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
