import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, ArrowRight, Code, Cpu, Database } from "lucide-react";

// Sample quiz questions -  Updated to include audio questions
const questions = [
  {
    id: 1,
    type: 'reading', // Added type field
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
    type: 'reading', // Added type field
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
    type: 'reading', // Added type field
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
    type: 'reading', // Added type field
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
    type: 'reading', // Added type field
    question: "Which sentence is in the passive voice?",
    options: [
      { id: "a", text: "They built this house in 1990." },
      { id: "b", text: "This house was built in 1990." },
      { id: "c", text: "In 1990, they were building this house." },
      { id: "d", text: "Building this house took them until 1990." }
    ],
    correctAnswer: "b"
  },
  {
    id: 6,
    type: 'reading', // Added type field
    question: "Select the word with the correct spelling:",
    options: [
      { id: "a", text: "Accomodation" },
      { id: "b", text: "Accommodation" },
      { id: "c", text: "Acommodation" },
      { id: "d", text: "Acomodation" }
    ],
    correctAnswer: "b"
  },
  {
    id: 7,
    type: 'reading', // Added type field
    question: "Choose the correct comparative form: This book is _____ than the other one.",
    options: [
      { id: "a", text: "interestinger" },
      { id: "b", text: "more interesting" },
      { id: "c", text: "most interesting" },
      { id: "d", text: "interestingest" }
    ],
    correctAnswer: "b"
  },
  {
    id: 8,
    type: 'reading', // Added type field
    question: "Which word is a synonym for \"happy\"?",
    options: [
      { id: "a", text: "Sad" },
      { id: "b", text: "Angry" },
      { id: "c", text: "Joyful" },
      { id: "d", text: "Anxious" }
    ],
    correctAnswer: "c"
  },
  {
    id: 9,
    type: 'reading', // Added type field
    question: "Complete the sentence: She _____ to the cinema last night.",
    options: [
      { id: "a", text: "go" },
      { id: "b", text: "goes" },
      { id: "c", text: "going" },
      { id: "d", text: "went" }
    ],
    correctAnswer: "d"
  },
  {
    id: 10,
    type: 'reading', // Added type field
    question: "Choose the correct article: I saw _____ interesting movie yesterday.",
    options: [
      { id: "a", text: "a" },
      { id: "b", text: "an" },
      { id: "c", text: "the" },
      { id: "d", text: "no article needed" }
    ],
    correctAnswer: "b"
  },
  {
    id: 11,
    type: 'reading', // Added type field
    question: "Which sentence contains a relative clause?",
    options: [
      { id: "a", text: "I like swimming in the sea." },
      { id: "b", text: "The man who lives next door is a doctor." },
      { id: "c", text: "They arrived early at the station." },
      { id: "d", text: "She made a delicious cake for the party." }
    ],
    correctAnswer: "b"
  },
  {
    id: 12,
    type: 'reading', // Added type field
    question: "Choose the correct phrasal verb: Can you _____ the light when you leave?",
    options: [
      { id: "a", text: "turn up" },
      { id: "b", text: "turn on" },
      { id: "c", text: "turn off" },
      { id: "d", text: "turn down" }
    ],
    correctAnswer: "c"
  },
  {
    id: 13,
    type: 'reading', // Added type field
    question: "Which sentence uses the present perfect tense correctly?",
    options: [
      { id: "a", text: "I've been to Paris last year." },
      { id: "b", text: "I've never been to Paris." },
      { id: "c", text: "I've go to Paris next week." },
      { id: "d", text: "I've went to Paris before." }
    ],
    correctAnswer: "b"
  },
  {
    id: 14,
    type: 'reading', // Added type field
    question: "Choose the appropriate response to \"How do you do?\"",
    options: [
      { id: "a", text: "I'm fine, thank you." },
      { id: "b", text: "How do you do?" },
      { id: "c", text: "I'm doing my homework." },
      { id: "d", text: "Yes, I do." }
    ],
    correctAnswer: "b"
  },
  {
    id: 15,
    type: 'reading', // Added type field
    question: "Identify the adverb in the sentence: \"She sings beautifully.\"",
    options: [
      { id: "a", text: "She" },
      { id: "b", text: "Sings" },
      { id: "c", text: "Beautifully" },
      { id: "d", text: "There is no adverb" }
    ],
    correctAnswer: "c"
  },
  {
    id: 16,
    type: 'reading', // Added type field
    question: "Choose the correct conditional form: If it _____ tomorrow, we'll go to the beach.",
    options: [
      { id: "a", text: "rains" },
      { id: "b", text: "will rain" },
      { id: "c", text: "would rain" },
      { id: "d", text: "is raining" }
    ],
    correctAnswer: "a"
  },
  {
    id: 17,
    type: 'reading', // Added type field
    question: "Which word has the same meaning as \"sufficient\"?",
    options: [
      { id: "a", text: "Excessive" },
      { id: "b", text: "Inadequate" },
      { id: "c", text: "Enough" },
      { id: "d", text: "Limited" }
    ],
    correctAnswer: "c"
  },
  {
    id: 18,
    type: 'reading', // Added type field
    question: "Choose the correct form: By the time I arrived, they _____ for two hours.",
    options: [
      { id: "a", text: "were waiting" },
      { id: "b", text: "had been waiting" },
      { id: "c", text: "have been waiting" },
      { id: "d", text: "are waiting" }
    ],
    correctAnswer: "b"
  },
  {
    id: 19,
    type: 'reading', // Added type field
    question: "Which sentence contains a gerund?",
    options: [
      { id: "a", text: "She wants to swim." },
      { id: "b", text: "Swimming is good exercise." },
      { id: "c", text: "She swims every day." },
      { id: "d", text: "She will swim tomorrow." }
    ],
    correctAnswer: "b"
  },
  {
    id: 20,
    type: 'reading', // Added type field
    question: "Choose the correct modal verb: You _____ smoke in the hospital.",
    options: [
      { id: "a", text: "can't" },
      { id: "b", text: "shouldn't" },
      { id: "c", text: "mustn't" },
      { id: "d", text: "mightn't" }
    ],
    correctAnswer: "c"
  },
  {
    id: 21,
    type: 'reading', // Added type field
    question: "Which sentence uses the subjunctive mood?",
    options: [
      { id: "a", text: "I wish I were taller." },
      { id: "b", text: "I am going to the store." },
      { id: "c", text: "She has finished her homework." },
      { id: "d", text: "They will arrive tomorrow." }
    ],
    correctAnswer: "a"
  },
  {
    id: 22,
    type: 'reading', // Added type field
    question: "Choose the word with the correct prefix: The medicine had an _____ effect on his health.",
    options: [
      { id: "a", text: "imbeneficial" },
      { id: "b", text: "disbeneficial" },
      { id: "c", text: "unbeneficial" },
      { id: "d", text: "nonbeneficial" }
    ],
    correctAnswer: "c"
  },
  {
    id: 23,
    type: 'reading', // Added type field
    question: "Identify the correct sentence structure:",
    options: [
      { id: "a", text: "Although it was raining, but we went out." },
      { id: "b", text: "Although it was raining, we went out." },
      { id: "c", text: "Although it was raining, therefore we went out." },
      { id: "d", text: "We went out although it was raining but." }
    ],
    correctAnswer: "b"
  },
  {
    id: 24,
    type: 'reading', // Added type field
    question: "Choose the correct idiomatic expression: The test was very easy. It was a _____.",
    options: [
      { id: "a", text: "piece of bread" },
      { id: "b", text: "cup of tea" },
      { id: "c", text: "slice of cake" },
      { id: "d", text: "piece of cake" }
    ],
    correctAnswer: "d"
  },
  {
    id: 25,
    type: 'reading', // Added type field
    question: "Which word is a countable noun?",
    options: [
      { id: "a", text: "Water" },
      { id: "b", text: "Sugar" },
      { id: "c", text: "Book" },
      { id: "d", text: "Furniture" }
    ],
    correctAnswer: "c"
  },
  {
    id: 26,
    type: 'listening', // Added type field
    question: "Listen to the audio and choose the correct answer.",
    audioUrl: '/audio/listening-question-1.mp3', // Example audio URL - replace with your actual URL
    options: [
      { id: "a", text: "Option A" },
      { id: "b", text: "Option B" },
      { id: "c", text: "Option C" },
      { id: "d", text: "Option D" }
    ],
    correctAnswer: "a"
  }
];

const levels = [
  { name: "Beginner", description: "You're just starting your English learning journey.", score: [0, 1, 2, 3, 4, 5] },
  { name: "Elementary", description: "You have basic knowledge but need more practice.", score: [6, 7, 8, 9, 10, 11, 12] },
  { name: "Intermediate", description: "You have good foundations and can participate in conversations.", score: [13, 14, 15, 16, 17, 18, 19] },
  { name: "Advanced", description: "You have strong knowledge and communication skills.", score: [20, 21, 22, 23, 24, 25] }
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
                <div className="mb-6">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="flex items-center">
                      <Cpu className="w-4 h-4 mr-1 text-primary" />
                      Processing question {currentQuestion + 1} of {questions.length}
                    </span>
                    <span className="font-mono text-sm">{Math.round(progress)}%</span>
                  </div>

                  {/* Tech-inclined progress bar */}
                  <div className="w-full h-3 bg-primary/10 rounded-full overflow-hidden relative">
                    <div 
                      className="absolute inset-0 bg-primary/5 w-full"
                      style={{
                        backgroundImage: `repeating-linear-gradient(
                          to right,
                          transparent,
                          transparent 10px,
                          rgba(0, 0, 0, 0.05) 10px,
                          rgba(0, 0, 0, 0.05) 20px
                        )`,
                      }}
                    ></div>
                    <motion.div 
                      className="h-full bg-gradient-to-r from-primary to-primary/80 relative"
                      initial={{ width: 0 }}
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="absolute top-0 right-0 h-full w-1 bg-white/30"></div>
                      <div className="absolute inset-0 z-10">
                        <div 
                          className="w-full h-full"
                          style={{
                            backgroundImage: `linear-gradient(
                              90deg,
                              transparent 0%,
                              transparent 40%,
                              rgba(255, 255, 255, 0.5) 45%,
                              transparent 50%,
                              transparent 100%
                            )`,
                            backgroundSize: '200% 100%',
                            animation: 'scanning 2s linear infinite',
                          }}
                        ></div>
                      </div>
                    </motion.div>
                  </div>

                  <style jsx global>{`
                    @keyframes scanning {
                      0% { background-position: -100% 0; }
                      100% { background-position: 100% 0; }
                    }
                  `}</style>
                </div>

                <h2 className="text-xl font-semibold mb-6 flex items-center">
                  <Code className="mr-2 text-primary h-5 w-5" />
                  {questions[currentQuestion].question}
                </h2>

                {/* Audio player for listening questions */}
                {questions[currentQuestion].type === 'listening' && (
                  <div className="mb-6 bg-primary/5 rounded-lg p-4 flex flex-col items-center">
                    <audio 
                      controls 
                      src={questions[currentQuestion].audioUrl}
                      className="w-full max-w-md mb-2"
                    >
                      Your browser does not support the audio element.
                    </audio>
                    <p className="text-sm text-muted-foreground">
                      Listen to the audio carefully before selecting your answer
                    </p>
                  </div>
                )}

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
                        className="flex-1 py-3 px-4 rounded-md hover:bg-primary/5 cursor-pointer transition-colors border border-transparent hover:border-primary/10"
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
                    <h3 className="text-xl font-semibold mb-2 flex items-center justify-center">
                      <Database className="mr-2 h-5 w-5 text-primary" />
                      Your level: {determineLevel().name}
                    </h3>
                    <p>{determineLevel().description}</p>
                  </div>

                  <Button className="w-full" onClick={() => window.location.href = "/"}>
                    Return to Home
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
}