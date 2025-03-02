
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Instagram, TiktokIcon } from "lucide-react";

// Custom TikTok icon since it's not in lucide-react
const TikTok = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M9 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"></path>
    <path d="M15 8c0 1.657-1.343 3-3 3S9 9.657 9 8"></path>
    <path d="M15 2h-3v6"></path>
    <path d="M15 5c3 0 3 3 5 3v3s-5 0-5-6z"></path>
  </svg>
);

interface SocialReel {
  id: string;
  platform: "instagram" | "tiktok";
  embedUrl: string;
  thumbnail: string;
  title: string;
}

// Sample reels data - replace these with your actual reels
const demoReels: SocialReel[] = [
  {
    id: "1",
    platform: "instagram",
    embedUrl: "https://www.instagram.com/reel/DAV9stIvBZB/?utm_source=ig_embed&amp;utm_campaign=loading" ,
    thumbnail: "/placeholder.jpg", // Using placeholder image
    title: "IELTS Speaking Tips"
  },
  {
    id: "2",
    platform: "tiktok",
    embedUrl: "https://www.instagram.com/reel/DAV9stIvBZB/?utm_source=ig_embed&amp;utm_campaign=loading",
    thumbnail: "/placeholder.jpg",
    title: "Writing Section Strategy"
  },
  {
    id: "3",
    platform: "instagram",
    embedUrl: "https://www.instagram.com/reel/DAV9stIvBZB/?utm_source=ig_embed&amp;utm_campaign=loading",
    thumbnail: "/placeholder.jpg",
    title: "Vocabulary Building"
  },
  {
    id: "4",
    platform: "tiktok",
    embedUrl: "https://www.tiktok.com/embed/placeholder4",
    thumbnail: "/placeholder.jpg",
    title: "Listening Test Secrets"
  },
  {
    id: "5",
    platform: "instagram",
    embedUrl: "https://www.instagram.com/p/placeholder5/embed",
    thumbnail: "/placeholder.jpg",
    title: "Reading Comprehension"
  }
];

export default function SocialReels() {
  const [activeReel, setActiveReel] = useState<SocialReel | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const reelsPerPage = { mobile: 1, tablet: 2, desktop: 3 };
  
  const handleNextClick = () => {
    setCurrentIndex(prev => 
      prev + reelsPerPage.desktop >= demoReels.length 
        ? 0 
        : prev + 1
    );
  };
  
  const handlePrevClick = () => {
    setCurrentIndex(prev => 
      prev <= 0 
        ? Math.max(0, demoReels.length - reelsPerPage.desktop) 
        : prev - 1
    );
  };

  const openReel = (reel: SocialReel) => {
    setActiveReel(reel);
  };

  const closeReel = () => {
    setActiveReel(null);
  };

  const visibleReels = demoReels.slice(
    currentIndex,
    currentIndex + reelsPerPage.desktop
  );

  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-muted/30">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">تابعني على وسائل التواصل الاجتماعي</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto rtl">
            شاهد أحدث الفيديوهات التعليمية والنصائح السريعة لاجتياز اختبار الآيلتس
          </p>
        </motion.div>

        <div className="relative">
          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 md:-left-4 z-10">
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-10 w-10 rounded-full bg-background/80 backdrop-blur-sm shadow-md hover:bg-background"
              onClick={handlePrevClick}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
          </div>
          
          <div className="absolute top-1/2 -translate-y-1/2 right-0 md:-right-4 z-10">
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-10 w-10 rounded-full bg-background/80 backdrop-blur-sm shadow-md hover:bg-background"
              onClick={handleNextClick}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>

          {/* Reels Carousel */}
          <div className="overflow-hidden py-4">
            <div 
              className="flex transition-transform duration-500 ease-in-out gap-4 md:gap-6"
              style={{ transform: `translateX(${-currentIndex * (100 / reelsPerPage.desktop)}%)` }}
            >
              {demoReels.map((reel) => (
                <motion.div
                  key={reel.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)"
                  }}
                  transition={{ duration: 0.4 }}
                  viewport={{ once: true }}
                  className="min-w-full md:min-w-[calc(50%-12px)] lg:min-w-[calc(33.333%-16px)] flex-shrink-0"
                  onClick={() => openReel(reel)}
                >
                  <Card className="overflow-hidden cursor-pointer h-full border-primary/10 hover:border-primary/30 transition-all">
                    <div className="relative aspect-[9/16] overflow-hidden">
                      <img 
                        src={reel.thumbnail} 
                        alt={reel.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                            {reel.platform === 'instagram' ? (
                              <Instagram className="h-4 w-4 text-white" />
                            ) : (
                              <TikTok />
                            )}
                          </div>
                          <span className="text-white font-medium">{reel.platform === 'instagram' ? 'Instagram' : 'TikTok'}</span>
                        </div>
                        <h3 className="text-xl font-bold text-white rtl">{reel.title}</h3>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal for displaying embedded reel */}
        {activeReel && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={closeReel}>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-2xl" 
              onClick={e => e.stopPropagation()}
            >
              <Button 
                variant="ghost" 
                size="icon" 
                className="absolute -top-12 right-0 h-10 w-10 rounded-full bg-white/10 text-white"
                onClick={closeReel}
              >
                ×
              </Button>
              <div className="bg-card rounded-xl overflow-hidden">
                <div className="aspect-[9/16] w-full">
                  <iframe 
                    src={activeReel.embedUrl} 
                    className="w-full h-full border-0" 
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </motion.div>
          </div>
        )}

        <div className="mt-12 text-center">
          <div className="flex flex-wrap gap-4 justify-center">
            <Button className="gap-2" onClick={() => window.open('https://www.tiktok.com/@yourusername', '_blank')}>
              <TikTok />
              <span>Follow on TikTok</span>
            </Button>
            <Button className="gap-2" onClick={() => window.open('https://www.instagram.com/yourusername', '_blank')}>
              <Instagram className="h-5 w-5" />
              <span>Follow on Instagram</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
