import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";

export default function Navbar() {
  const [location] = useLocation();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-lg border-b" : ""
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/">
            <a className="text-xl font-bold text-primary">EduPro</a>
          </Link>

          <div className="flex items-center gap-8">
            <nav className="hidden md:flex gap-6">
              {[
                { name: "Courses", path: "/courses" },
                { name: "About", path: "/about" },
                { name: "Pricing", path: "/pricing" },
              ].map((item) => (
                <Link key={item.path} href={item.path}>
                  <a className="relative group py-2">
                    <span className="text-foreground/80 group-hover:text-foreground transition-colors">
                      {item.name}
                    </span>
                    <motion.span
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"
                      initial={{ scaleX: 0 }}
                      animate={{
                        scaleX: location === item.path ? 1 : 0,
                      }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                  </a>
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleDarkMode}
                className="rounded-full"
              >
                {isDarkMode ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </Button>
              <Link href="/signin">
                <Button className="rounded-full" size="sm">Sign In</Button>
              </Link>
              <Link href="/signup">
                <Button className="rounded-full" size="sm">Sign Up</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}