import { motion } from "framer-motion";

export default function Testimonials() {
  // Since your images are in the public folder as confirmed
  // Vite treats the public folder as the root directory for static assets
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
              className="bg-card rounded-lg shadow-md overflow-hidden relative z-30"
            >
              {/* Using the debugging technique to see exactly what's happening */}
              <div className="text-xs bg-red-100 p-1">Debug: {image}</div>
              <img
                src={image}
                alt={`Testimonial ${index + 1}`}
                className="w-full h-auto object-cover"
                onError={(e) => {
                  console.error(`Failed to load image: ${image}`);
                  // Adding fallback to a data URI so it always works
                  e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23f0f0f0'/%3E%3Ctext x='50' y='50' font-family='Arial' font-size='12' text-anchor='middle' alignment-baseline='middle' fill='%23999'%3EImage not found%3C/text%3E%3C/svg%3E";
                  // Remove the debug info after error
                  const parent = e.target.parentElement;
                  if (parent && parent.querySelector('div')) {
                    parent.querySelector('div').style.backgroundColor = '#fee2e2';
                  }
                }}
                onLoad={(e) => {
                  // On successful load, update the debug info
                  const parent = e.target.parentElement;
                  if (parent && parent.querySelector('div')) {
                    parent.querySelector('div').style.backgroundColor = '#dcfce7';
                    parent.querySelector('div').textContent = 'Loaded: ' + image;
                  }
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}