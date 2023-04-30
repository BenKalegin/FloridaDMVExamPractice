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
    {
        question: "What does a double solid yellow line on the road indicate?",
        options: [
            "You may pass if the way is clear",
            "No passing is allowed in either direction",
            "Traffic is moving in opposite directions",
            "Traffic is moving in the same direction",
        ],
        correctAnswer: 1,
    },
    {
        question: "When approaching a stopped emergency vehicle with flashing lights, what should you do?",
        options: [
            "Slow down and move over one lane, if possible",
            "Speed up and pass quickly",
            "Maintain your speed and stay in your lane",
            "None of the above",
        ],
        correctAnswer: 0,
    },
    {
        question: "Which of the following is true regarding Florida's implied consent law?",
        options: [
            "You must take a breathalyzer test if arrested for DUI",
            "You must take a field sobriety test if arrested for DUI",
            "You can refuse a breathalyzer test without consequences",
            "None of the above",
        ],
        correctAnswer: 0,
    },
    {
        question: "When driving in fog, you should:",
        options: [
            "Turn on your high beam headlights",
            "Turn on your low beam headlights",
            "Turn on your hazard lights",
            "None of the above",
        ],
        correctAnswer: 1,
    },
    {
        question: "When is it legal to drive in the left lane of a multi-lane highway?",
        options: [
            "When passing another vehicle",
            "When the right lane is closed",
            "When preparing for a left turn",
            "All of the above",
        ],
        correctAnswer: 3,
    },
    {
        question: "When driving on a two-lane road with a solid yellow centerline and a broken yellow centerline, which side may pass?",
        options: [
            "The side with the solid yellow centerline",
            "The side with the broken yellow centerline",
            "Both sides may pass",
            "None of the above",
        ],
        correctAnswer: 1,
    },
    {
        question: "In Florida, a first-time conviction for racing on the highway can result in:",
        options: [
            "A fine of up to $1,000",
            "Mandatory community service",
            "Driver's license revocation for up to one year",
            "All of the above",
        ],
        correctAnswer: 3,
    },
    {
        question: "When parallel parking, you should park within how many inches from the curb?",
        options: ["6 inches", "12 inches", "18 inches", "24 inches"],
        correctAnswer: 1,
    },
    {
        question: "What should you do if your vehicle starts to hydroplane?",
        options: [
            "Turn the steering wheel sharply",
            "Apply the brakes firmly",
            "Ease off the accelerator and steer in the direction you want to go",
            "None of the above",
        ],
        correctAnswer: 2,
    },
    {
        question: "What is the minimum age to obtain a learner's license in Florida?",
        options: ["14 years", "15 years", "16 years", "17 years"],
        correctAnswer: 1,
    },
    {
        question: "Which of the following must you do when approaching a railroad crossing?",
        options: [
            "Stop and listen for an approaching train",
            "Slow down and be prepared to stop if a train is approaching",
            "Speed up and cross the tracks quickly",
            "None of the above",
        ],
        correctAnswer: 1,
    },
    {
        question: "When can you make a left turn on red?",
        options: [
            "When turning from a one-way street onto another one-way street",
            "When turning from a two-way street onto a one-way street",
            "When there is no traffic approaching from the opposite direction",
            "None of the above",
        ],
        correctAnswer: 0,
    },
    {
        question: "When two vehicles arrive at an uncontrolled intersection at the same time, who has the right of way?",
        options: [
            "The vehicle on the left",
            "The vehicle on the right",
            "The vehicle that arrived first",
            "None of the above",
        ],
        correctAnswer: 1,
    },
    {
        question: "When should you use your horn?",
        options: [
            "To greet a friend",
            "To express frustration with another driver",
            "To alert another driver of your presence when they may not see you",
            "None of the above",
        ],
        correctAnswer: 2,
    },
    {
        question: "When should you use your high beam headlights?",
        options: [
            "When driving in fog",
            "When approaching oncoming traffic",
            "When driving on a well-lit city street",
            "When driving on a dark road with no oncoming traffic",
        ],
        correctAnswer: 3,
    },
    {
        question: "When driving in a roundabout, you should:",
        options: [
            "Yield to vehicles already in the roundabout",
            "Enter the roundabout without yielding",
            "Drive in the left lane",
            "None of the above",
        ],
        correctAnswer: 0,
    },
    {
        question: "What is the maximum speed limit on an interstate highway in Florida?",
        options: ["55 mph", "65 mph", "70 mph", "75 mph"],
        correctAnswer: 2,
    },
    {
        question: "What should you do if you encounter a school bus with its stop sign extended and red lights flashing?",
        options: [
            "Stop and wait until the red lights stop flashing",
            "Pass the bus on the left",
            "Continue driving if you are in the opposite lane on a divided highway",
            "Both A and C",
        ],
        correctAnswer: 3,
    },
    {
        question: "When can you make a right turn on red?",
        options: [
            "After a complete stop and when it's safe to do so",
            "Only when there is no traffic approaching",
            "When there is a green arrow",
            "None of the above",
        ],
        correctAnswer: 0,
    },
    {
        question: "What does a flashing yellow traffic light mean?",
        options: [
            "Stop and proceed when safe",
            "Stop and wait for a green light",
            "Slow down and proceed with caution",
            "None of the above",
        ],
        correctAnswer: 2,
    },

];

shuffleArray(questions);

const shuffledQuestions = questions.map(shuffleChoices);

export default shuffledQuestions;
