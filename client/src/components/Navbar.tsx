import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/lib/auth";

export default function Navbar() {
  const { user, signOut } = useAuth();

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="backdrop-blur-lg bg-background/90 sticky top-0 z-50 w-full border-b"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex h-16 justify-between">
          <div className="flex">
            <div className="flex flex-shrink-0 items-center">
              <Link href="/">
                <span className="cursor-pointer text-xl font-bold gradient-text">IELTS Mastery</span>
              </Link>
            </div>
            <div className="ml-6 hidden md:flex md:space-x-8">
              <Link href="/courses">
                <span className="cursor-pointer inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium hover:border-primary/50 hover:text-primary">
                  Courses
                </span>
              </Link>
              <Link href="/pricing">
                <span className="cursor-pointer inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium hover:border-primary/50 hover:text-primary">
                  Pricing
                </span>
              </Link>
              <Link href="/resources">
                <span className="cursor-pointer inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium hover:border-primary/50 hover:text-primary">
                  Resources
                </span>
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            {user ? (
              <div className="flex items-center space-x-4">
                <Link href="/dashboard">
                  <span className="cursor-pointer inline-flex items-center rounded-md bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary">
                    Dashboard
                  </span>
                </Link>
                <Button variant="ghost" onClick={signOut}>Sign Out</Button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link href="/sign-in">
                  <span className="cursor-pointer inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground">
                    Sign In
                  </span>
                </Link>
                <Link href="/sign-up">
                  <span className="cursor-pointer inline-flex items-center rounded-md bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground hover:bg-primary/80">
                    Sign Up
                  </span>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}