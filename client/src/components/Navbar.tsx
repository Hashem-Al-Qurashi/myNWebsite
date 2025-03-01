import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Moon, Sun, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  useEffect(() => {
    const isDark = localStorage.getItem("darkMode") === "true";
    setIsDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full py-4 bg-background/80 backdrop-blur-md z-50 sticky top-0 border-b border-border/40"
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold gradient-text">
            English Pro
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-foreground/80 hover:text-primary transition-colors">
              الرئيسية
            </Link>
            <Link href="/courses" className="text-foreground/80 hover:text-primary transition-colors">
              الدورات
            </Link>
            <Link href="/about" className="text-foreground/80 hover:text-primary transition-colors">
              من نحن
            </Link>
            <Link href="/contact" className="text-foreground/80 hover:text-primary transition-colors">
              تواصل معنا
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:block">
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

// New Courses Page Component
import React from 'react';

const CoursesPage = () => {
  const courseData = [
    { title: "Achieve your IELTS goal the easiest and fastest way!", description: "Develop your four skills: Listening, Reading, Writing, and Speaking. Learn smart techniques to solve questions quickly and accurately. Practice with at least 7 full mock tests to build confidence and manage your time effectively." },
    { title: "Master IELTS Techniques", description: "Learn how to read a question and find the answer before even finishing reading the options; How to use every second in the exam in the best way; How to make the writing and speaking sections your game." },
    { title: "IELTS Practice and Preparation", description: "Practice makes perfect!  Regular practice will turn techniques into automatic responses, accustom you to time pressure, and help maintain focus.  Includes many mock tests." },
  ];

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">IELTS Courses</h1>
      {courseData.map((course, index) => (
        <div key={index} className="mb-6 border p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-2">{course.title}</h2>
          <p>{course.description}</p>
        </div>
      ))}
    </div>
  );
};

export default CoursesPage;