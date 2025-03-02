import { Routes, Route, Link } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Navbar } from './components/Navbar'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp';
import AssessmentQuiz from './pages/AssessmentQuiz';
import AboutUs from './pages/AboutUs';
import Courses from './pages/Courses';
import Course from './pages/Course';
import NotFound from './pages/not-found';
import './App.css'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-background text-foreground relative transition-colors duration-300"> {/* Retained transition */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course/:id" element={<Course />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/assessment" element={<AssessmentQuiz />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="*" element={<NotFound />} /> {/* Catch-all route */}
        </Routes>
        <Toaster />
      </div>
    </QueryClientProvider>
  )
}

export default App