import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";

interface CourseHeaderProps {
  course: {
    title: string;
    description: string;
    progress: number;
  };
}

export default function CourseHeader({ course }: CourseHeaderProps) {
  return (
    <div className="border-b bg-card p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-2">{course.title}</h1>
        <p className="text-muted-foreground mb-4">{course.description}</p>
        
        <div className="flex items-center gap-4">
          <div className="flex-1">
            <div className="flex justify-between text-sm mb-2">
              <span>Progress</span>
              <span>{course.progress}%</span>
            </div>
            <Progress value={course.progress} className="h-2" />
          </div>
          
          <Button>Continue Learning</Button>
        </div>
      </div>
    </div>
  );
}
