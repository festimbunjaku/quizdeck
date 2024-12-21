import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('auth_token');
        const response = await axios.get('http://127.0.0.1:8000/api/user/quizzes', {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
        setUserData(response.data);
      } catch (error) {
        setError('Failed to fetch user data. Please try again.');
      }
    };

    fetchUserData();
  }, []);

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow-md text-gray-800">
      <h1 className="text-2xl font-bold text-orange-500 mb-4">Dashboard</h1>
      <p className="mb-2"><strong>Name:</strong> {userData.user.name}</p>
      <p className="mb-2"><strong>Email:</strong> {userData.user.email}</p>
      <p className="mb-2"><strong>Total Quizzes:</strong> {userData.total_quizzes}</p>
      <p className="mb-2"><strong>Completed Quizzes:</strong> {userData.completed_quizzes}</p>
      <p className="mb-4"><strong>Pending Quizzes:</strong> {userData.pending_quizzes}</p>

      <h2 className="text-xl font-semibold text-orange-500 mb-2">Your Quizzes</h2>
      <div className="space-y-4">
        {userData.quizzes.map((quiz) => (
          <div key={quiz.id} className="p-4 border rounded-lg">
            <h3 className="font-semibold">{quiz.title}</h3>
            <p><strong>Status:</strong> {quiz.completed ? 'Completed' : 'Pending'}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;

