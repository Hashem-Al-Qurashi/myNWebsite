import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useMediaQuery } from "@/lib/hooks/use-media-query";
import { MessageCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-bg">
      {/* Animated background effects */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, var(--primary) 0%, transparent 50%)",
          filter: "blur(120px)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[600px] h-[600px] rounded-full"
            style={{
              background: `radial-gradient(circle at 50% 50%, hsl(${210 + i * 20}, 100%, 50%, 0.1) 0%, transparent 70%)`,
              filter: "blur(60px)",
              top: `${30 + i * 20}%`,
              left: `${20 + i * 25}%`,
            }}
            animate={{
              y: [0, 30, 0],
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.4, 0.3],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center rtl p-8 rounded-3xl light:bg-white/60 light:backdrop-blur-md light:depth-effect" // Added light mode styling
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-6xl font-bold mb-6 tracking-tight leading-tight">
              <span className="gradient-text">
                احصل على درجتك المطلوبة في الآيلتس
              </span>
              <br />
              <span className="text-foreground/90">بأسهل وأسرع طريقة!</span>
            </h1>

            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              93% من طلابنا رفعوا درجتهم بمعدل +1.5 Band خلال 8 أسابيع فقط!
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex gap-6 items-center justify-center flex-wrap"
            >
              <Link href="/assessment">
                <Button
                  size="lg"
                  className="text-lg px-8 py-6 rounded-full bg-gradient-to-r from-primary via-cyan-500 to-primary hover:opacity-90 transition-all duration-300 hover:scale-105 shadow-lg shadow-primary/25 light:hero-button-primary"
                >
                  حدد مستواك!
                  <ArrowRight className="mr-2 h-5 w-5" />
                </Button>
              </Link>
              <a
                href="https://drive.google.com/drive/u/0/folders/1Ot95zTg6wV9mAI25B9_v7wtd0_hrVzld"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-6 rounded-full border-primary/20 hover:bg-primary/10 transition-all duration-300 light:hero-button-secondary"
                >
                  خطة مذاكرة ترفعك درجة كاملة مجاناً
                  <Download className="mr-2 h-5 w-5" />
                </Button>
              </a>

            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-3xl mx-auto"
            >
              {[
                { number: "+٩٣٪", label: "نسبة النجاح" },
                { number: "+١٫٥", label: "معدل تحسن الدرجة" },
                { number: "+١٠٠٠", label: "طالب ناجح" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="text-center bg-card/30 backdrop-blur-sm rounded-2xl p-6 border border-primary/10"
                >
                  <h3 className="text-3xl font-bold gradient-text mb-2">
                    {stat.number}
                  </h3>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </motion.div>

            {/* WhatsApp Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="fixed bottom-6 left-6 z-50"
            >
              <Button
                size="lg"
                className="rounded-full bg-green-500 hover:bg-green-600 transition-all duration-300 shadow-lg"
                onClick={() =>
                  window.open("https://wa.me/your-number", "_blank")
                }
              >
                <MessageCircle className="h-6 w-6 mr-2" />
                تواصل معنا عبر واتساب
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}