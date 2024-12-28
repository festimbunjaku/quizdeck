import React, { useEffect, useState } from 'react';
import axios from 'axios';

function LeaderboardLP() {
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get('http://127.0.0.1:8000/api/leaderboard')
      .then((response) => {
        const validEntries = response.data.filter(
          (entry) => entry.total_score !== null
        );
        setLeaderboardData(validEntries);
      })
      .catch(() => {
        setError('Error fetching leaderboard data');
      });
  }, []);

  if (error) {
    return <div className="text-red-500 text-center mt-10">{error}</div>;
  }

  if (leaderboardData.length === 0) {
    return (
      <div className="leaderboard-container pt-3 mt-[83px] text-black bg-gray-200 min-h-screen flex flex-col items-center">
        <h2 className="text-3xl font-bold text-orange-500 mb-5">Leaderboard</h2>
        <div className="overflow-x-auto w-full max-w-4xl">
          <table className="min-w-full table-auto bg-white rounded-lg shadow-lg">
            <thead>
              <tr className="bg-orange-500 text-white">
                <th className="px-6 py-3 text-left">Rank</th>
                <th className="px-6 py-3 text-left">Username</th>
                <th className="px-6 py-3 text-left">Score</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="3" className="px-6 py-3 text-center">
                  No leaderboard data available
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  return (
    <div className="leaderboard-container pt-3 mt-[83px] text-black bg-gray-200 min-h-screen flex flex-col items-center">
      <h2 className="text-3xl font-bold text-orange-500 mb-5">Leaderboard</h2>
      <div className="overflow-x-auto w-full max-w-4xl">
        <table className="min-w-full table-auto bg-white rounded-lg shadow-lg">
          <thead>
            <tr className="bg-orange-500 text-white">
              <th className="px-6 py-3 text-left">Rank</th>
              <th className="px-6 py-3 text-left">Username</th>
              <th className="px-6 py-3 text-left">Score</th>
            </tr>
          </thead>
          <tbody>
            {leaderboardData.map((entry, index) => (
              <tr key={entry.user_id} className="border-b">
                <td className="px-6 py-3">{index + 1}</td>
                <td className="px-6 py-3 flex items-center">
                  {entry.name}
                </td>
                <td className="px-6 py-3">{entry.total_score || '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default LeaderboardLP;
