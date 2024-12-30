import React, { useEffect, useState, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../AuthContext';

function QuizComponent() {
    const { categoryId, quizId } = useParams();
    const navigate = useNavigate();
    const { isAuthenticated } = useAuth();
    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [timer, setTimer] = useState(20);
    const [quizStarted, setQuizStarted] = useState(false);
    const [error, setError] = useState(null);
    const [selectedOption, setSelectedOption] = useState(null);
    const [userId, setUserId] = useState(null);
    const [quizCompleted, setQuizCompleted] = useState(false);
    const [answers, setAnswers] = useState([]);
    const [completedStatus, setCompletedStatus] = useState(0);

    useEffect(() => {
        const fetchUserData = async () => {
            if (isAuthenticated) {
                const token = localStorage.getItem('auth_token');
                try {
                    const response = await axios.get('http://127.0.0.1:8000/api/user', {
                        headers: { 'Authorization': `Bearer ${token}` },
                    });
                    setUserId(response.data.id);
                } catch (error) {
                    console.error("Error fetching user data:", error);
                    setError('Failed to fetch user data');
                }
            }
        };

        fetchUserData();
    }, [isAuthenticated]);

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
        const currentQuestion = questions[currentQuestionIndex];
        const correctOption = currentQuestion?.correct_option;

        if (selectedOption === correctOption) {
            setScore((prevScore) => prevScore + 5);
        }

        setAnswers((prevAnswers) => {
            const updatedAnswers = [...prevAnswers];
            updatedAnswers[currentQuestionIndex] = selectedOption;
            return updatedAnswers;
        });

        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
            setSelectedOption(null);
            setTimer(20);
        } else {
            setQuizCompleted(true);
        }
    }, [selectedOption, currentQuestionIndex, questions]);

    useEffect(() => {
        if (quizCompleted) {
            const totalPossibleScore = questions.length * 5;
            const userScore = score;

            if (userScore === totalPossibleScore) {
                setCompletedStatus(1);
            } else {
                setCompletedStatus(0);
            }
        }
    }, [quizCompleted, score, questions.length]);

    useEffect(() => {
        let interval;
        if (quizStarted && !quizCompleted) {
            interval = setInterval(() => {
                setTimer((prevTimer) => {
                    if (prevTimer > 0) {
                        return prevTimer - 1;
                    } else {
                        handleNextQuestion();
                        return 20;
                    }
                });
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [quizStarted, quizCompleted, handleNextQuestion]);

    const handleStartQuiz = () => {
        setQuizStarted(true);
        setTimer(20);
    };

    const handleAnswerClick = (option) => {
        setSelectedOption(option);
    };

    const handleRestartQuiz = () => {
        setQuizStarted(false);
        setCurrentQuestionIndex(0);
        setScore(0);
        setTimer(20);
        setSelectedOption(null);
        setQuizCompleted(false);
        setAnswers([]);
        setCompletedStatus(0);
    };

    const handleSubmitQuiz = () => {
        const quizResult = {
            user_id: userId,
            quiz_id: quizId,
            score: score,
            completed: completedStatus,
        };

        axios
            .post('http://127.0.0.1:8000/api/quiz_results', quizResult)
            .then(() => {
                alert('Quiz submitted successfully!');
                navigate('/quizzes');
            })
            .catch((error) => {
                console.error('Error submitting quiz result:', error);
            });
    };

    if (error) {
        return <div className="text-red-500 text-center mt-10">{error}</div>;
    }

    if (questions.length === 0) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="text-center m-36">
                    <h2>No questions found for this quiz.</h2>
                </div>
            </div>
        );
    }

    return (
        <div className="quiz-container mt-10 text-black bg-gray-200 min-h-screen flex flex-col items-center justify-center">
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
                <div className="completed-quiz text-center">
                    <h2 className="text-3xl font-bold text-orange-500 mb-5">Quiz Completed!</h2>
                    <p className="text-lg mb-5">
                        Your score: <span className="text-orange-500 font-bold">{score}</span> / {questions.length * 5}
                    </p>
                    <div className="correct-answers text-left mb-5">
                        <h3 className="text-xl font-bold text-orange-500 mb-3">Correct Answers</h3>
                        <ul className="list-disc pl-5">
                            {questions.map((question, index) => (
                                <li key={index}>
                                    <p className="font-semibold">{question.question}</p>
                                    <p
                                        className={answers[index] === question.correct_option
                                            ? 'text-green-500'
                                            : 'text-red-500'
                                        }
                                    >
                                        Your Answer: {answers[index] || 'None'} - Correct Answer: {question.correct_option}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="actions flex justify-center gap-4">
                        {completedStatus === 0 && (
                            <button
                                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg"
                                onClick={handleRestartQuiz}
                            >
                                Restart Quiz
                            </button>
                        )}
                        <button
                            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg"
                            onClick={handleSubmitQuiz}
                        >
                            Save Quiz
                        </button>
                    </div>
                </div>
            ) : (
                <div className="question-screen w-11/12 max-w-3xl bg-gray-100 p-6 rounded-lg shadow-lg">
                    <div className="timer text-right text-orange-500 text-lg mb-4">
                        Time Remaining: <span>{timer}s</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3">
                        Question {currentQuestionIndex + 1} of {questions.length}
                    </h3>
                    <p className="text-lg mb-5">{questions[currentQuestionIndex]?.question}</p>
                    <div className="options grid grid-cols-1 md:grid-cols-2 gap-4">
                        {['A', 'B', 'C', 'D'].map((option, index) => (
                            <button
                                key={index}
                                className={`px-4 py-2 rounded-lg text-black font-semibold ${
                                    selectedOption === option
                                        ? 'bg-orange-500 border-2 border-orange-500'
                                        : 'bg-gray-200 hover:bg-gray-300'
                                }`}
                                onClick={() => handleAnswerClick(option)}
                            >
                                {option}) {questions[currentQuestionIndex][`option_${option.toLowerCase()}`]}
                            </button>
                        ))}
                    </div>
                    <div className="flex justify-end mt-5">
                        <button
                            className={`px-6 py-2 rounded-lg font-semibold ${
                                selectedOption ? 'bg-orange-500 hover:bg-orange-600 text-white' : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                            }`}
                            onClick={handleNextQuestion}
                            disabled={!selectedOption}
                        >
                            {currentQuestionIndex === questions.length - 1 ? 'Finish the Quiz' : 'Next Question'}
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default QuizComponent;
