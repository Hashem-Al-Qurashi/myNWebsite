import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/Navbar";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Course from "@/pages/Course";
import SignIn from "@/pages/SignIn";
import SignUp from "@/pages/SignUp";
import AssessmentQuiz from "@/pages/AssessmentQuiz";
import AboutUs from "@/pages/AboutUs";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/course/:id" component={Course} />
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/assessment" component={AssessmentQuiz} />
      <Route path="/about" component={AboutUs} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <Router />
        <Toaster />
      </div>
    </QueryClientProvider>
  );
}

export default App;