import React, { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function QuizComponent() {
    const { categoryId, quizId } = useParams();
    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [timer, setTimer] = useState(10);
    const [quizStarted, setQuizStarted] = useState(false);
    const [error, setError] = useState(null);
    const [selectedOption, setSelectedOption] = useState(null);
    const [userId, setUserId] = useState(1);
    const [quizCompleted, setQuizCompleted] = useState(false);
    const [answers, setAnswers] = useState([]);
    const [isAnswered, setIsAnswered] = useState(false);
    const [timerInterval, setTimerInterval] = useState(null);

    useEffect(() => {
        axios
            .get(`http://127.0.0.1:8000/api/categories/${categoryId}/quizzes/${quizId}/questions`)
            .then((response) => {
                setQuestions(response.data.questions || []);
            })
            .catch(() => {
                setError('Error fetching quiz data');
            });
    }, [categoryId, quizId]);

    const handleNextQuestion = useCallback(() => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
            setSelectedOption(null);
            setIsAnswered(false);
            setTimer(10);
        } else {
            setQuizCompleted(true);
            clearInterval(timerInterval);
        }
    }, [currentQuestionIndex, questions.length, timerInterval]);

    useEffect(() => {
        if (quizStarted && !quizCompleted && questions.length > 0) {
            const newTimerInterval = setInterval(() => {
                setTimer((prevTimer) => {
                    if (prevTimer > 0) {
                        return prevTimer - 1;
                    } else {
                        handleNextQuestion();
                        return 10;
                    }
                });
            }, 1000);

            setTimerInterval(newTimerInterval);

            return () => clearInterval(newTimerInterval);
        }
    }, [quizStarted, questions.length, currentQuestionIndex, quizCompleted, handleNextQuestion]);

    const handleStartQuiz = () => {
        setQuizStarted(true);
        setTimer(10);
    };

    const handleAnswerClick = (option) => {
        if (isAnswered) return;

        setSelectedOption(option);
        setAnswers((prevAnswers) => {
            const newAnswers = [...prevAnswers];
            newAnswers[currentQuestionIndex] = option;
            return newAnswers;
        });

        const correctOption = questions[currentQuestionIndex]?.correct_option;

        if (option === correctOption) {
            setScore((prevScore) => prevScore + 5);
        }

        setIsAnswered(true);
    };

    const handleRestartQuiz = () => {
        setQuizStarted(false);
        setCurrentQuestionIndex(0);
        setScore(0);
        setTimer(10);
        setSelectedOption(null);
        setIsAnswered(false);
        setQuizCompleted(false);
        setAnswers([]);
    };

    const handleSubmitQuiz = () => {
        const quizResult = {
            user_id: userId,
            quiz_id: quizId,
            score: score,
        };

        axios
            .post('http://127.0.0.1:8000/api/quiz_results', quizResult)
            .then(() => {
                alert('Quiz submitted successfully!');
                setQuizCompleted(true);
            })
            .catch((error) => {
                console.error('Error submitting quiz result:', error);
            });
    };

    if (error) {
        return <div className="text-red-500 text-center mt-10">{error}</div>;
    }

    return (
        <div className="quiz-container mt-10 text-white bg-black min-h-screen flex flex-col items-center justify-center">
            {!quizStarted ? (
                <div className="start-screen text-center">
                    <h2 className="text-3xl font-bold text-orange-500 mb-5">Welcome to the Quiz</h2>
                    <button
                        className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg"
                        onClick={handleStartQuiz}
                    >
                        Start Quiz
                    </button>
                </div>
            ) : quizCompleted ? (
                <div className="completed-quiz">
                    <h2 className="text-3xl font-bold text-orange-500 mb-5">Quiz Completed!</h2>
                    <p className="text-lg mb-5">
                        Your score: <span className="text-orange-500 font-bold">{score}</span> / {questions.length * 5}
                    </p>

                    <div className="correct-answers">
                        <h3 className="text-xl font-bold text-orange-500 mb-3">Correct Answers</h3>
                        <ul className="list-disc pl-5">
                            {questions.map((question, index) => (
                                <li key={index}>
                                    <div className="question">
                                        <p className="font-semibold">{question.question}</p>
                                        <p className={answers[index] === question.correct_option ? 'text-green-500' : 'text-red-500'}>
                                            Your Answer: {answers[index]} - Correct Answer: {question.correct_option}
                                        </p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <button
                        className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg"
                        onClick={handleRestartQuiz}
                    >
                        Restart Quiz
                    </button>
                    <button
                        className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg mt-3"
                        onClick={handleSubmitQuiz}
                    >
                        Submit Quiz
                    </button>
                </div>
            ) : currentQuestionIndex < questions.length ? (
                <div className="question-screen w-11/12 max-w-3xl bg-gray-800 p-6 rounded-lg shadow-lg">
                    <div className="timer text-right text-orange-500 text-lg mb-4">
                        Time Remaining: <span>{timer}s</span>
                    </div>
                    <div className="question">
                        <h3 className="text-xl font-bold mb-3">
                            Question {currentQuestionIndex + 1} of {questions.length}
                        </h3>
                        <p className="text-lg mb-5">{questions[currentQuestionIndex]?.question}</p>
                        <div className="options grid grid-cols-1 md:grid-cols-2 gap-4">
                            {['A', 'B', 'C', 'D'].map((option, index) => (
                                <button
                                    key={index}
                                    className={`px-4 py-2 rounded-lg text-white font-semibold ${
                                        selectedOption === questions[currentQuestionIndex][`option_${option.toLowerCase()}`]
                                            ? 'bg-orange-500 border-2 border-orange-500'
                                            : 'bg-gray-700 hover:bg-gray-600'
                                    }`}
                                    onClick={() => handleAnswerClick(option)}
                                    disabled={isAnswered}
                                >
                                    {option}) {questions[currentQuestionIndex][`option_${option.toLowerCase()}`]}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="flex justify-end mt-5">
                        <button
                            className={`px-6 py-2 rounded-lg font-semibold ${
                                selectedOption ? 'bg-orange-500 hover:bg-orange-600 text-white' : 'bg-gray-500 text-gray-300 cursor-not-allowed'
                            }`}
                            onClick={handleNextQuestion}
                            disabled={!isAnswered}
                        >
                            {currentQuestionIndex === questions.length - 1 ? 'Submit Quiz' : 'Next Question'}
                        </button>
                    </div>
                </div>
            ) : (
                <div className="score-screen text-center">
                    <h2 className="text-3xl font-bold text-orange-500 mb-5">Quiz Completed!</h2>
                    <p className="text-lg mb-5">
                        Your score: <span className="text-orange-500 font-bold">{score}</span> / {questions.length * 5}
                    </p>
                    <button
                        className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg"
                        onClick={handleRestartQuiz}
                    >
                        Restart Quiz
                    </button>
                    <button
                        className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg mt-3"
                        onClick={handleSubmitQuiz}
                    >
                        Submit Quiz
                    </button>
                </div>
            )}
        </div>
    );
}

export default QuizComponent;
