import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CategoriesQP() {
  const [categories, setCategories] = useState([]);
  const [quizzes, setQuizzes] = useState({});
  const navigate = useNavigate(); 
  
  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/categories')
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error('There was an error fetching the categories:', error);
      });
  }, []);

  useEffect(() => {
    categories.forEach((category) => {
      axios.get(`http://127.0.0.1:8000/api/categories/${category.id}/quizzes`)
        .then((response) => {
          setQuizzes((prevQuizzes) => ({
            ...prevQuizzes,
            [category.id]: response.data,
          }));
        })
        .catch((error) => {
          console.error('Error fetching quizzes:', error);
        });
    });
  }, [categories]);

  const handleQuizClick = (categoryId, quizId) => {
    navigate(`/categories/${categoryId}/quizzes/${quizId}/questions`);
  };

  return (
    <>
      <div className='min-h-screen'>
      <h1 className="text-4xl font-bold text-center mt-32">Check Out All Categories and Their Quizzes</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-16 px-6">
        {categories.map((category) => (
          <div key={category.id} className="max-w-sm mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-orange-500 p-4 text-white text-center">
              <h5 className="text-2xl font-semibold">{category.name}</h5>
            </div>
            <div className="p-6">
              <p className="text-gray-700 text-base mb-4">
                Discover quizzes related to {category.name}. Take your knowledge to the next level!
              </p>

              {quizzes[category.id] && quizzes[category.id].length > 0 ? (
                <div className="mt-6">
                  <h6 className="font-medium text-xl">Quizzes in {category.name}</h6>
                  <ul className="mt-4">
                    {quizzes[category.id].map((quiz) => (
                      <li key={quiz.id} className="mb-4">
                        <div
                          className="bg-gray-100 p-4 rounded-lg shadow-md cursor-pointer"
                          onClick={() => handleQuizClick(category.id, quiz.id)}
                        >
                          <h6 className="text-lg font-semibold">{quiz.title}</h6>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <p className="text-gray-500">No quizzes available for this category.</p>
              )}
            </div>
          </div>
        ))}
      </div>
      </div>
    </>
  );
}

export default CategoriesQP;
