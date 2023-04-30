import React, { useState } from 'react';
import {questions} from './questions';
import Question from "./Question";

const Quiz: React.FC = () => {
    const [incorrectQuestions, setIncorrectQuestions] = useState<string[]>([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);

    const showResults = (updatedScore: number) => {
        let results = `Quiz completed! Your score is ${updatedScore}/${questions.length}.`;

        if (incorrectQuestions.length > 0) {
            results += "\n\nYou answered the following questions incorrectly:";
            incorrectQuestions.forEach((questionIndex) => {
                results += `\n\n${questionIndex}`;
            });
        }

        alert(results);
    };

    const handleAnswer = (answer: number) => {
        let updatedScore = score;
        if (answer === questions[currentQuestion].correctAnswer) {
            updatedScore++;
        } else {
            setIncorrectQuestions([...incorrectQuestions,
                questions[currentQuestion].question
                + "\nyour answer: "  + questions[currentQuestion].options[answer]
                + "\ncorrect:" + questions[currentQuestion].options[questions[currentQuestion].correctAnswer]]);
        }
        if (currentQuestion + 1 < questions.length) {
            setCurrentQuestion(currentQuestion + 1);
            setScore(updatedScore);
        } else {
            // Move the alert to a separate function (see step 3)
            setScore(updatedScore);
            showResults(updatedScore);
            setCurrentQuestion(0);
            setScore(0);
            setIncorrectQuestions([]);
        }
    };


    return (
        <div>
            <Question
                question={questions[currentQuestion].question}
                options={questions[currentQuestion].options}
                selected={handleAnswer}
            />
        </div>
    );
};

export default Quiz;
