import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function QuizComponent() {
  const { categoryId, quizId } = useParams(); 
  const [quiz, setQuiz] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/categories/${categoryId}/quizzes/${quizId}/questions`)
      .then((response) => {
        setQuiz(response.data);
      })
      .catch((err) => {
        setError("Error fetching quiz data");
      });
  }, [categoryId, quizId]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!quiz) {
    return <div>Loading...</div>;
  }

  return (
    <div className="quiz-page">
      <h1 className="text-4xl font-bold text-center mt-16">{quiz.quiz}</h1>
      <h2 className="text-2xl text-center mt-8">{quiz.category}</h2>
      <div className="questions">
        {quiz.questions.map((question) => (
          <div key={question.id} className="question">
            <p>{question.question}</p>
            <div>
              <label>
                <input type="radio" name={`question-${question.id}`} value="A" />
                {question.option_a}
              </label>
              <label>
                <input type="radio" name={`question-${question.id}`} value="B" />
                {question.option_b}
              </label>
              <label>
                <input type="radio" name={`question-${question.id}`} value="C" />
                {question.option_c}
              </label>
              <label>
                <input type="radio" name={`question-${question.id}`} value="D" />
                {question.option_d}
              </label>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default QuizComponent;
