export interface Question {
    question: string;
    options: string[];
    correctAnswer: number;
}
// Shuffle array elements using Fisher-Yates algorithm
function shuffleArray(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Shuffle answer choices for a question
function shuffleChoices(question: Question) {
    const choices = question.options.map((option, index) => ({ option, index }));
    //shuffleArray(choices);
    const correctAnswer = choices.findIndex((choice) => choice.index === question.correctAnswer);
    return { ...question, options: choices.map((choice) => choice.option), correctAnswer };
}
export const questions: Question[] = [
    {
        question: "What is the speed limit in a residential area in Florida, unless otherwise posted?",
        options: ["20 mph", "25 mph", "30 mph", "35 mph"],
        correctAnswer: 2,
    },
    {
        question: "What should you do if an oncoming vehicle has its high beams on?",
        options: [
            "Flash your high beams",
            "Look toward the right edge of the road",
            "Turn on your high beams",
            "Slow down and stop",
        ],
        correctAnswer: 1,
    },
    {
        question: "What should you do when you approach a flashing yellow traffic signal?",
        options: [
            "Come to a complete stop",
            "Slow down and proceed with caution",
            "Speed up to cross the intersection",
            "Treat it like a yield sign",
        ],
        correctAnswer: 1,
    },
    {
        question: "What is the safe following distance under normal driving conditions?",
        options: [
            "1 second",
            "2 seconds",
            "3 seconds",
            "4 seconds",
        ],
        correctAnswer: 2,
    },
    {
        question: "What should you do if your vehicle starts to hydroplane?",
        options: [
            "Apply the brakes firmly",
            "Steer in the opposite direction of the skid",
            "Ease off the accelerator and steer in the direction you want to go",
            "Speed up to regain control",
        ],
        correctAnswer: 2,
    },
    {
        question: "Under which of the following conditions should you use your parking lights?",
        options: [
            "When parked on the side of the road",
            "When driving in heavy traffic",
            "When driving in foggy conditions",
            "None of the above",
        ],
        correctAnswer: 0,
    },
    {
        question: "When merging onto a highway, who has the right-of-way?",
        options: [
            "The vehicle merging",
            "The vehicle already on the highway",
            "The faster vehicle",
            "The slower vehicle",
        ],
        correctAnswer: 1,
    },
    {
        question: "When can you pass another vehicle on the right?",
        options: [
            "When the vehicle is making a left turn",
            "When the vehicle is making a right turn",
            "When the vehicle is stopped at a stop sign",
            "None of the above",
        ],
        correctAnswer: 0,
    },
    {
        question: "What should you do if you are involved in a hit-and-run accident?",
        options: [
            "Leave the scene",
            "Try to catch the other driver",
            "Note down the details and report the incident to the police",
            "None of the above",
        ],
        correctAnswer: 2,
    },
    {
        question: "When can you drive in a bicycle lane?",
        options: [
            "Never",
            "When passing a slower vehicle",
            "When preparing to make a right turn",
            "When the bicycle lane is empty",
        ],
        correctAnswer: 2,
    },
    {
        question: "What is the purpose of a rumble strip?",
        options: [
            "To indicate a change in the speed limit",
            "To alert drivers when they are drifting out of their lane",
            "To separate lanes of traffic",
            "To provide traction in wet weather",
        ],
        correctAnswer: 1,
    },
    {
        question: "What is the proper hand signal for slowing down or stopping?",
        options: [
            "Left arm extended downward",
            "Left arm extended horizontally",
            "Left arm extended upward",
            "None of the above",
        ],
        correctAnswer: 0,
    },
    {
        question: "What is the proper hand signal for a right turn?",
        options: [
            "Left arm extended downward",
            "Left arm extended horizontally",
            "Left arm extended upward",
            "None of the above",
        ],
        correctAnswer: 2,
    },
    {
        question: "What is the proper hand signal for a left turn?",
        options: [
            "Left arm extended downward",
            "Left arm extended horizontally",
            "Left arm extended upward",
            "None of the above",
        ],
        correctAnswer: 1,
    },
    {
        question: "What is the following distance you should maintain under normal driving conditions?",
        options: [
            "One car length for every 10 mph",
            "Two car lengths for every 10 mph",
            "Three car lengths for every 10 mph",
            "Four car lengths for every 10 mph",
        ],
        correctAnswer: 0,
    },
    {
        question: "What is the standard speed limit for a school zone?",
        options: ["15 mph", "20 mph", "25 mph", "30 mph"],
        correctAnswer: 1,
    },
    {
        question: "What is the proper procedure for changing lanes?",
        options: [
            "Signal, check mirrors, and change lanes",
            "Signal, check mirrors, check blind spots, and change lanes",
            "Check mirrors, signal, and change lanes",
            "Check mirrors, check blind spots, signal, and change lanes",
        ],
        correctAnswer: 1,
    },
    {
        question: "How should you position your hands on the steering wheel?",
        options: ["8 and 4", "9 and 3", "10 and 2", "11 and 1"],
        correctAnswer: 1,
    },
    {
        question: "When can you pass on the right?",
        options: [
            "When there is enough space on the shoulder",
            "When there is a designated passing lane",
            "When the vehicle in front is making a left turn and there is enough space",
            "Both B and C",
        ],
        correctAnswer: 3,
    },
    {
        question: "What should you do if an oncoming vehicle is heading toward you in your lane?",
        options: [
            "Honk your horn and flash your headlights",
            "Slow down and move to the right",
            "Speed up and move to the left",
            "Both A and B",
        ],
        correctAnswer: 3,
    },
    {
        question: "What should you do if you experience a tire blowout?",
        options: [
            "Brake hard and steer to the side of the road",
            "Ease off the gas, maintain control, and pull off the road",
            "Accelerate to maintain control",
            "None of the above",
        ],
        correctAnswer: 1,
    },
    {
        question: "What is the proper way to enter a freeway?",
        options: [
            "Slow down and yield to traffic",
            "Accelerate to match the flow of traffic",
            "Stop at the end of the entrance ramp and wait for an opening",
            "None of the above",
        ],
        correctAnswer: 1,
    },
];

shuffleArray(questions);

const shuffledQuestions = questions.map(shuffleChoices);

export default shuffledQuestions;
