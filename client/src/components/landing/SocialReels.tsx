import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Instagram, X } from "lucide-react";

// Custom TikTok icon
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

const demoReels: SocialReel[] = [
  {
    id: "1",
    platform: "instagram",
    embedUrl: "https://www.instagram.com/reel/DImHiDygv9z/?utm_source=ig_embed&utm_campaign=loading",
    thumbnail: "./public/thumb2.jpg",
    title: "IELTS Writing Tips"
  },
  {
    id: "2",
    platform: "instagram",
    embedUrl: "https://www.instagram.com/reel/DAV9stIvBZB/?utm_source=ig_embed&utm_campaign=loading",
    thumbnail: "./public/thumb1.jpg",
    title: "IELTS Speaking Secrets "
  },
  {
    id: "3",
    platform: "tiktok",
    embedUrl: "https://www.tiktok.com/@educatorhashem/video/7494353165265947912",
    thumbnail: "./public/thumb3.jpg",
    title: "3 Types of Difficult IELTS Speaking Questions"
  },
];

export default function SocialReels() {
  const [activeReel, setActiveReel] = useState<SocialReel | null>(null);
  const [slidePosition, setSlidePosition] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Load embed scripts when a reel is opened
  useEffect(() => {
    if (activeReel?.platform === "instagram") {
      const existingScript = document.getElementById('instagram-embed-script');
      existingScript?.remove();

      const script = document.createElement('script');
      script.id = 'instagram-embed-script';
      script.src = '//www.instagram.com/embed.js';
      script.async = true;
      document.body.appendChild(script);

      return () => {
        document.getElementById('instagram-embed-script')?.remove();
      };
    } else if (activeReel?.platform === "tiktok") {
      const existingScript = document.getElementById('tiktok-embed-script');
      existingScript?.remove();

      const script = document.createElement('script');
      script.id = 'tiktok-embed-script';
      script.src = '//www.tiktok.com/embed.js';
      script.async = true;
      document.body.appendChild(script);

      return () => {
        document.getElementById('tiktok-embed-script')?.remove();
      };
    }
  }, [activeReel]);

  // Function to shift the carousel to display the next set of cards
  const handleNextClick = () => {
    setSlidePosition((prev) => prev - 100);
  };

  // Function to shift the carousel to display the previous set of cards
  const handlePrevClick = () => {
    setSlidePosition((prev) => prev + 100);
  };

  // Reset position when it exceeds a certain threshold to create infinite loop effect
  useEffect(() => {
    if (slidePosition < -300) {
      // When scrolled too far right, loop back
      setSlidePosition(0);
    } else if (slidePosition > 0) {
      // When scrolled too far left, loop back
      setSlidePosition(-300);
    }
  }, [slidePosition]);

  // Enable keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        handleNextClick();
      } else if (e.key === "ArrowLeft") {
        handlePrevClick();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const openReel = (reel: SocialReel) => setActiveReel(reel);
  const closeReel = () => setActiveReel(null);

  // Create an extended array of reels for infinite scrolling
  const extendedReels = [...demoReels, ...demoReels, ...demoReels];

  const renderInstagramEmbed = (embedUrl: string) => (
    <div className="w-full max-w-md mx-auto">
      <blockquote 
        className="instagram-media" 
        data-instgrm-permalink={embedUrl}
        data-instgrm-version="14"
        style={{ 
          background: '#FFF', 
          border: '0', 
          borderRadius: '3px', 
          boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)', 
          margin: '1px', 
          maxWidth: '540px', 
          minWidth: '326px', 
          padding: '0', 
          width: '99.375%'
        }}
      >
        <div style={{ padding: '16px' }}>
          <a 
            href={embedUrl} 
            style={{ 
              background: '#FFFFFF', 
              lineHeight: '0', 
              padding: '0 0', 
              textAlign: 'center', 
              textDecoration: 'none', 
              width: '100%' 
            }} 
            target="_blank"
            rel="noopener noreferrer"
          >
            Loading Instagram post...
          </a>
        </div>
      </blockquote>
      <p className="text-center text-gray-500 p-4">
        If the reel doesn't load, <a href={embedUrl} target="_blank" className="text-blue-500">click here</a> to view on Instagram.
      </p>
    </div>
  );

  const renderTikTokEmbed = (embedUrl: string) => {
    // Extract video ID from URL
    const videoId = embedUrl.split('/video/')[1]?.split('?')[0] || '';
    const username = embedUrl.split('@')[1]?.split('/')[0] || '';

    return (
      <div className="w-full max-w-md mx-auto">
        <blockquote 
          className="tiktok-embed" 
          cite={embedUrl}
          data-video-id={videoId} 
        >
          <section>
            <a target="_blank" href={`https://www.tiktok.com/@${username}?refer=embed`}>@{username}</a>
          </section>
        </blockquote>
        <p className="text-center text-gray-500 p-4">
          If the video doesn't load, <a href={embedUrl} target="_blank" className="text-blue-500">click here</a> to view on TikTok.
        </p>
      </div>
    );
  };

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
            شاهد أحدث الفيديوهات التعليمية والنصائح السريعة لاجتياز اختبار الايلتس
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute top-1/2 -translate-y-1/2 left-0 md:-left-4 z-10">
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-10 w-10 rounded-full bg-background/80 backdrop-blur-sm shadow-md hover:bg-background"
              onClick={handlePrevClick}
              aria-label="Previous reel"
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
              aria-label="Next reel"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>

          <div className="overflow-hidden py-8">
            {/* Carousel container showing all three reels at once */}
            <div 
              ref={carouselRef}
              className="relative"
            >
              <motion.div 
                className="flex gap-4 justify-center"
                animate={{ x: `${slidePosition}%` }}
                transition={{ type: "spring", stiffness: 200, damping: 30 }}
              >
                {extendedReels.map((reel, index) => (
                  <Card 
                    key={`${reel.id}-${index}`}
                    className="flex-shrink-0 w-64 overflow-hidden cursor-pointer border-primary/10 hover:border-primary/30 transition-all"
                    onClick={() => openReel(reel)}
                  >
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
                          <span className="text-white font-medium">
                            {reel.platform === 'instagram' ? 'Instagram' : 'TikTok'}
                          </span>
                        </div>
                        <h3 className="text-lg font-bold text-white text-center">{reel.title}</h3>
                      </div>
                    </div>
                  </Card>
                ))}
              </motion.div>
            </div>
          </div>
        </div>

        {activeReel && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={closeReel}>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-lg" 
              onClick={e => e.stopPropagation()}
            >
              <Button 
                variant="ghost" 
                size="icon" 
                className="absolute -top-12 right-0 h-10 w-10 rounded-full bg-white/10 text-white hover:bg-white/20"
                onClick={closeReel}
              >
                <X className="h-5 w-5" />
              </Button>
              <div className="bg-white rounded-xl overflow-hidden shadow-xl">
                {activeReel.platform === 'instagram' 
                  ? renderInstagramEmbed(activeReel.embedUrl)
                  : renderTikTokEmbed(activeReel.embedUrl)
                }
              </div>
            </motion.div>
          </div>
        )}

        <div className="mt-12 text-center">
          <div className="flex flex-wrap gap-4 justify-center">
            <Button 
              className="gap-2" 
              onClick={() => window.open('https://www.tiktok.com/@educatorhashem', '_blank')}
            >
              <TikTok />
              <span>Follow on TikTok</span>
            </Button>
            <Button 
              className="gap-2" 
              onClick={() => window.open('https://www.instagram.com/yourusername', '_blank')}
            >
              <Instagram className="h-5 w-5" />
              <span>Follow on Instagram</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}