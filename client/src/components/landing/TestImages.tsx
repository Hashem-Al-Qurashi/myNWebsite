
import { useEffect } from 'react';

export default function TestImages() {
  useEffect(() => {
    console.log("TestImages component mounted");
  }, []);

  const images = [
    "/images/testimonials/testomny 1.jpeg",
    "/images/testimonials/testomny 2.jpeg",
    "/images/testimonials/testomny 3.jpeg",
    "/images/testimonials/testomny 4.jpeg"
  ];

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Testing Images</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((src, index) => (
          <div key={index} className="border p-2 rounded">
            <p className="mb-2">Image {index + 1}</p>
            <img 
              src={src} 
              alt={`Test image ${index + 1}`}
              className="w-full h-40 object-cover rounded"
              onLoad={() => console.log(`Image loaded: ${src}`)}
              onError={(e) => {
                console.error(`Failed to load: ${src}`);
                e.currentTarget.src = "/placeholder.jpg";
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
