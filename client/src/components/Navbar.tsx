import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";

export default function Navbar() {
  const [location] = useLocation();
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check for dark mode preference on initial load
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      document.documentElement.classList.add("dark");
      return true;
    }
    return false;
  });
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Added state for mobile menu

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);

    if (newMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
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
            {/* Desktop menu */}
            <nav className="hidden md:flex gap-6">
              {[
                { name: "Courses", path: "/courses" },
                { name: "About", path: "/about" },
                { name: "Pricing", path: "/pricing" },
              ].map((item) => (
                <Link key={item.path} href={item.path}>
                  <div className="relative group py-2 cursor-pointer">
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
                  </div>
                </Link>
              ))}
            </nav>

            {/* Mobile menu button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {/* Add a proper hamburger icon here */}
              <span>Menu</span> {/* Placeholder - replace with an actual icon */}
            </button>

            {/* Mobile menu, show/hide based on menu state */}
            <div className={`${isMenuOpen ? "block" : "hidden"} md:hidden absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-border shadow-lg`}>
              <div className="flex flex-col px-4 pt-2 pb-3 space-y-2">
                <Link href="/">
                  <a className="block py-2 text-foreground hover:text-primary" onClick={() => setIsMenuOpen(false)}>Home</a>
                </Link>
                <Link href="/courses">
                  <a className="block py-2 text-foreground hover:text-primary" onClick={() => setIsMenuOpen(false)}>Courses</a>
                </Link>
                <Link href="/about">
                  <a className="block py-2 text-foreground hover:text-primary" onClick={() => setIsMenuOpen(false)}>About</a>
                </Link>
                <Link href="/pricing">
                  <a className="block py-2 text-foreground hover:text-primary" onClick={() => setIsMenuOpen(false)}>Pricing</a>
                </Link>
              </div>
            </div>


            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => toggleDarkMode()}
                className="rounded-full"
              >
                {isDarkMode ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </Button>
              <Button className="rounded-full" size="sm" asChild>
                <a href="/signin">Sign In</a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/assessment">حدد مستواك</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}