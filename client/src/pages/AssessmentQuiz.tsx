
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, ArrowRight } from "lucide-react";

// Sample quiz questions
const questions = [
  {
    id: 1,
    question: "Choose the correct sentence:",
    options: [
      { id: "a", text: "She don't like coffee." },
      { id: "b", text: "She doesn't likes coffee." },
      { id: "c", text: "She doesn't like coffee." },
      { id: "d", text: "She not like coffee." }
    ],
    correctAnswer: "c"
  },
  {
    id: 2,
    question: "Complete the sentence: If I _____ rich, I would buy a house.",
    options: [
      { id: "a", text: "am" },
      { id: "b", text: "were" },
      { id: "c", text: "was" },
      { id: "d", text: "be" }
    ],
    correctAnswer: "b"
  },
  {
    id: 3,
    question: "Choose the word that means \"to make something better\":",
    options: [
      { id: "a", text: "Worsen" },
      { id: "b", text: "Improve" },
      { id: "c", text: "Maintain" },
      { id: "d", text: "Reduce" }
    ],
    correctAnswer: "b"
  },
  {
    id: 4,
    question: "Choose the correct preposition: I'm arriving _____ Dubai next week.",
    options: [
      { id: "a", text: "at" },
      { id: "b", text: "on" },
      { id: "c", text: "to" },
      { id: "d", text: "in" }
    ],
    correctAnswer: "d"
  },
  {
    id: 5,
    question: "Which sentence is in the passive voice?",
    options: [
      { id: "a", text: "They built this house in 1990." },
      { id: "b", text: "This house was built in 1990." },
      { id: "c", text: "In 1990, they were building this house." },
      { id: "d", text: "Building this house took them until 1990." }
    ],
    correctAnswer: "b"
  }
];

// Level definitions
const levels = [
  { name: "Beginner", description: "You're just starting your English learning journey.", score: [0, 1] },
  { name: "Elementary", description: "You have basic knowledge but need more practice.", score: [2, 3] },
  { name: "Intermediate", description: "You have good foundations and can participate in conversations.", score: [4] },
  { name: "Advanced", description: "You have strong knowledge and communication skills.", score: [5] }
];

export default function AssessmentQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  
  const handleNext = () => {
    // Check if answer is correct
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption("");
    } else {
      setQuizCompleted(true);
    }
  };
  
  const determineLevel = () => {
    return levels.find(level => level.score.includes(score)) || levels[0];
  };
  
  const progress = ((currentQuestion + 1) / questions.length) * 100;
  
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-3xl font-bold text-center mb-2">تحديد المستوى</h1>
          <p className="text-muted-foreground text-center mb-8 text-lg rtl">
            أجب على الأسئلة التالية لتحديد مستواك في اللغة الإنجليزية
          </p>
          
          {!quizCompleted ? (
            <Card className="border border-primary/10 shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-1">
                    <span>Question {currentQuestion + 1} of {questions.length}</span>
                    <span>{Math.round(progress)}%</span>
                  </div>
                  <Progress value={progress} className="h-2" />
                </div>
                
                <h2 className="text-xl font-semibold mb-6">
                  {questions[currentQuestion].question}
                </h2>
                
                <RadioGroup value={selectedOption} onValueChange={setSelectedOption} className="space-y-3">
                  {questions[currentQuestion].options.map((option) => (
                    <div key={option.id} className="flex items-center">
                      <RadioGroupItem 
                        value={option.id} 
                        id={`option-${option.id}`}
                        className="mr-2"
                      />
                      <Label 
                        htmlFor={`option-${option.id}`}
                        className="flex-1 py-3 px-4 rounded-md hover:bg-primary/5 cursor-pointer transition-colors"
                      >
                        {option.text}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
                
                <Button 
                  className="mt-8 w-full"
                  onClick={handleNext}
                  disabled={!selectedOption}
                >
                  {currentQuestion < questions.length - 1 ? (
                    <>Next <ArrowRight className="ml-2 h-4 w-4" /></>
                  ) : (
                    "Finish Quiz"
                  )}
                </Button>
              </CardContent>
            </Card>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="border border-primary/10 shadow-lg text-center">
                <CardContent className="p-8">
                  <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="h-10 w-10 text-green-600" />
                  </div>
                  
                  <h2 className="text-2xl font-bold mb-2">Assessment Complete!</h2>
                  <p className="text-muted-foreground mb-6">
                    You scored {score} out of {questions.length}
                  </p>
                  
                  <div className="bg-primary/5 p-6 rounded-lg mb-6">
                    <h3 className="text-xl font-semibold mb-2">
                      Your level: {determineLevel().name}
                    </h3>
                    <p>{determineLevel().description}</p>
                  </div>
                  
                  <div className="flex flex-col gap-4">
                    <Button className="w-full" size="lg">
                      View Recommended Courses
                    </Button>
                    <Button variant="outline" className="w-full" size="lg" onClick={() => window.location.href = "/"}>
                      Return to Homepage
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
