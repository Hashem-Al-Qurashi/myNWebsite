import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, Moon, Sun } from "lucide-react";

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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
  
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen ? "bg-background/95 backdrop-blur-lg border-b" : ""
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/">
            <a className="text-xl font-bold text-primary">IELTS with Hashem</a>
          </Link>

          <div className="flex items-center gap-4 md:gap-8">
            {/* Desktop Navigation */}
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

            {/* Dark mode toggle and sign in buttons */}
            <div className="flex items-center gap-2 md:gap-4">
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
              <Button className="rounded-full hidden md:flex" size="sm" asChild>
                <a href="/signin">Sign In</a>
              </Button>
              <Button variant="ghost" size="sm" className="hidden md:flex" asChild>
                
              </Button>
              
              {/* Mobile menu toggle button */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>
        </div>
        
        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <motion.div 
            className="md:hidden py-4 border-t border-border"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex flex-col space-y-4">
              {[
                { name: "Courses", path: "/courses" },
                { name: "About", path: "/about" },
                
                { name: "Sign In", path: "/signin" },
                
              ].map((item) => (
                <Link key={item.path} href={item.path}>
                  <a 
                    className={`block px-2 py-2 text-foreground/80 hover:text-foreground hover:bg-accent/50 rounded-md ${
                      location === item.path ? "text-primary font-medium" : ""
                    }`}
                    onClick={closeMobileMenu}
                  >
                    {item.name}
                  </a>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}