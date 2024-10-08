'use client'
import React, { useState, useEffect } from 'react';

const quizData = [
    {
        "type": "multiple",
        "difficulty": "hard",
        "category": "General Knowledge",
        "question": "The Swedish word &quot;Grunka&quot; means what in English?",
        "correct_answer": "Thing",
        "incorrect_answers": [
            "People",
            "Place",
            "Pineapple"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "easy",
        "category": "Entertainment: Video Games",
        "question": "Aperture Science CEO Cave Johnson is voiced by which American actor?",
        "correct_answer": "J.K. Simmons",
        "incorrect_answers": [
            "Nolan North",
            "John Patrick Lowrie",
            "Christopher Lloyd"
        ]
    },
];

const QuizApp = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedOption, setSelectedOption] = useState('');
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [timeLeft, setTimeLeft] = useState(60);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prevTime => {
                if (prevTime === 0) {
                    clearInterval(timer);
                    setShowResult(true);
                }
                return prevTime - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const handleOptionSelect = (option: React.SetStateAction<string>) => {
        setSelectedOption(option);
    };

    const handleNextQuestion = () => {
        if (selectedOption === quizData[currentQuestion].correct_answer) {
            setScore(score + 1);
        }
        setSelectedOption('');
        if (currentQuestion + 1 < quizData.length) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setShowResult(true);
        }
    };

    const handleSkipQuestion = () => {
        setSelectedOption('');
        if (currentQuestion + 1 < quizData.length) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setShowResult(true);
        }
    };

    const resetQuiz = () => {
        setCurrentQuestion(0);
        setSelectedOption('');
        setScore(0);
        setShowResult(false);
        setTimeLeft(60);
    };

    return (
        <div className=" mt-10 p-6 bg-white rounded-lg shadow-xl">
            {showResult ? (
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4">Quiz Result</h2>
                    <p className="text-lg">Your Score: {score} / {quizData.length}</p>
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
                        onClick={resetQuiz}
                    >
                        Restart Quiz
                    </button>
                </div>
            ) : (
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4">Question {currentQuestion + 1}</h2>
                    <p className="text-lg mb-4" dangerouslySetInnerHTML={{ __html: quizData[currentQuestion].question }}></p>
                    <div className="md:flex justify-center">
                        {[...quizData[currentQuestion].incorrect_answers, quizData[currentQuestion].correct_answer].sort().map((option, index) => (
                            <button
                                key={index}
                                onClick={() => handleOptionSelect(option)}
                                className={`py-2 px-4 rounded lg:mr-4 m-1 ${selectedOption === option ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'} hover:bg-blue-700 hover:text-white`}
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                    <div className="mt-4">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4"
                            onClick={handleNextQuestion}
                            disabled={!selectedOption}
                        >
                            {currentQuestion === quizData.length - 1 ? 'Finish' : 'Next Question'}
                        </button>
                        <button
                            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                            onClick={handleSkipQuestion}
                        >
                            Skip
                        </button>
                    </div>
                    <div className="mt-4">
                        <p>Time Left: {timeLeft} seconds</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default QuizApp;
