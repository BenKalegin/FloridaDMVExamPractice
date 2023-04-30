import React from 'react';

interface Props {
    question: string;
    options: string[];
    selected: (answer: number) => void;
}

const Question: React.FC<Props> = ({ question, options, selected }) => {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        selected(parseInt(e.currentTarget.value, 10));
    };

    return (
        <div>
            <h2>{question}</h2>
            {options.map((option, index) => (
                <button key={index} value={index} onClick={handleClick}>
                    {option}
                </button>
            ))}
        </div>
    );
};

export default Question;
