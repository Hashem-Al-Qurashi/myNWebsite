import { useParams } from "wouter";
import CourseHeader from "@/components/course/CourseHeader";
import CourseSidebar from "@/components/course/CourseSidebar";
import VideoPlayer from "@/components/course/VideoPlayer";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Course() {
  const { id } = useParams();
  
  // Mock course data
  const course = {
    id: parseInt(id || "1"),
    title: "Advanced Web Development",
    description: "Master modern web development techniques and best practices",
    progress: 40,
    currentVideo: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    modules: [
      {
        title: "Getting Started",
        lessons: [
          { id: 1, title: "Course Introduction", duration: "5:20" },
          { id: 2, title: "Setting Up Your Environment", duration: "10:15" }
        ]
      },
      {
        title: "Core Concepts",
        lessons: [
          { id: 3, title: "HTML5 Fundamentals", duration: "15:30" },
          { id: 4, title: "CSS3 Deep Dive", duration: "20:45" }
        ]
      }
    ]
  };

  return (
    <div className="h-screen flex">
      <CourseSidebar course={course} />
      
      <main className="flex-1 flex flex-col">
        <CourseHeader course={course} />
        
        <div className="flex-1 p-6 bg-background">
          <div className="max-w-4xl mx-auto">
            <VideoPlayer url={course.currentVideo} />
            
            <ScrollArea className="h-[calc(100vh-500px)] mt-6">
              <div className="prose prose-blue max-w-none">
                <h2>Lesson Content</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                {/* Add more lesson content here */}
              </div>
            </ScrollArea>
          </div>
        </div>
      </main>
    </div>
  );
}
