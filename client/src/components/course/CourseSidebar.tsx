import { ScrollArea } from "@/components/ui/scroll-area";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Check, Clock } from "lucide-react";

interface CourseSidebarProps {
  course: {
    modules: Array<{
      title: string;
      lessons: Array<{
        id: number;
        title: string;
        duration: string;
      }>;
    }>;
  };
}

export default function CourseSidebar({ course }: CourseSidebarProps) {
  return (
    <div className="w-80 border-r bg-card">
      <ScrollArea className="h-screen">
        <div className="p-4">
          <h2 className="font-semibold mb-4">Course Content</h2>
          
          <Accordion type="single" collapsible className="w-full">
            {course.modules.map((module, index) => (
              <AccordionItem key={index} value={`module-${index}`}>
                <AccordionTrigger className="text-sm">
                  {module.title}
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col gap-2">
                    {module.lessons.map((lesson) => (
                      <Button
                        key={lesson.id}
                        variant="ghost"
                        className="justify-start h-auto py-2"
                      >
                        <div className="flex items-center gap-2 text-sm">
                          <Check className="h-4 w-4" />
                          <span className="flex-1">{lesson.title}</span>
                          <Clock className="h-4 w-4" />
                          <span className="text-xs text-muted-foreground">
                            {lesson.duration}
                          </span>
                        </div>
                      </Button>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </ScrollArea>
    </div>
  );
}
