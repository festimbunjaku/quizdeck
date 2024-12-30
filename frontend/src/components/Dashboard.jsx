import React, { useState, useEffect } from "react";
import { useAuth } from "../AuthContext"; 
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const [user, setUser] = useState({});
  const [totalQuizzesTaken, setTotalQuizzesTaken] = useState(0);
  const [completedQuizzes, setCompletedQuizzes] = useState([]);
  const [notCompletedQuizzes, setNotCompletedQuizzes] = useState([]);
  const [rank, setRank] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [name, setName] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [updateMessage, setUpdateMessage] = useState("");
  const [updateError, setUpdateError] = useState("");

  const [passwordMessage, setPasswordMessage] = useState("");
  const [passwordError, setPasswordError] = useState("");

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
      return;
    }

    const token = localStorage.getItem("auth_token");

    const fetchData = async () => {
      try {
        const userResponse = await axios.get("http://127.0.0.1:8000/api/user", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const currentUser = userResponse.data;
        setUser(currentUser);

        const quizzesResponse = await axios.get(
          "http://127.0.0.1:8000/api/user/quizzes",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const completed = quizzesResponse.data.filter((quiz) => quiz.pivot.completed);
        const notCompleted = quizzesResponse.data.filter((quiz) => !quiz.pivot.completed);
        setCompletedQuizzes(completed);
        setNotCompletedQuizzes(notCompleted);
        setTotalQuizzesTaken(quizzesResponse.data.length);

        const leaderboardResponse = await axios.get(
          "http://127.0.0.1:8000/api/leaderboard",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const leaderboard = leaderboardResponse.data;
        const userRank = leaderboard.findIndex((item) => item.user_id === currentUser.id) + 1;
        setRank(userRank > 0 ? userRank : "Unranked");
      } catch (err) {
        setError("Failed to fetch data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [isAuthenticated, navigate]);

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    setUpdateMessage("");
    setUpdateError("");

    if (!name.trim()) {
      setUpdateError("Name cannot be empty.");
      return;
    }

    try {
      const token = localStorage.getItem("auth_token");
      const response = await axios.put(
        "http://127.0.0.1:8000/api/user/update-profile",
        { name },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setUser((prevUser) => ({ ...prevUser, name }));
      setUpdateMessage(response.data.message || "Profile updated successfully.");
    } catch {
      setUpdateError("Failed to update profile. Please try again.");
    }
  };

  const handleUpdatePassword = async (e) => {
    e.preventDefault();
    setPasswordMessage("");
    setPasswordError("");

    if (!currentPassword || !newPassword || !confirmPassword) {
      setPasswordError("All fields are required.");
      return;
    }

    if (newPassword !== confirmPassword) {
      setPasswordError("New password and confirmation do not match.");
      return;
    }

    try {
      const token = localStorage.getItem("auth_token");
      const response = await axios.put(
        "http://127.0.0.1:8000/api/user/update-password",
        {
          current_password: currentPassword,
          new_password: newPassword,
          new_password_confirmation: confirmPassword,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setPasswordMessage(response.data.message || "Password updated successfully.");
      localStorage.removeItem("auth_token");
      window.location.reload();
      navigate("/login");
    } catch (err) {
      setPasswordError(err.response?.data?.error || "Failed to update password. Please try again.");
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  const allQuizzes = [...completedQuizzes, ...notCompletedQuizzes];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-4xl font-bold text-center text-orange-500 mb-8">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-2 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-orange-500 mb-4">User Info</h2>
          <p>
            <strong>Name:</strong> {user.name}
          </p>
          <p className="mt-2">
            <strong>Email:</strong> {user.email}
          </p>

          <form onSubmit={handleUpdateProfile} className="mt-6">
            <label className="text-lg font-bold text-orange-500">Update Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full p-2 border rounded"
              placeholder="Enter new name"
            />
            {updateMessage && <p className="text-green-500 mt-2">{updateMessage}</p>}
            {updateError && <p className="text-red-500 mt-2">{updateError}</p>}
            <button type="submit" className="mt-4 bg-orange-500 text-white px-4 py-2 rounded">
              Update
            </button>
          </form>

          <form onSubmit={handleUpdatePassword} className="mt-8">
            <h3 className="text-lg font-bold text-orange-500">Change Password</h3>
            <label className="block text-gray-700 mt-2">Current Password:</label>
            <input
              type="password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              className="mt-1 block w-full p-2 border rounded"
            />
            <label className="block text-gray-700 mt-2">New Password:</label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="mt-1 block w-full p-2 border rounded"
            />
            <label className="block text-gray-700 mt-2">Confirm Password:</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="mt-1 block w-full p-2 border rounded"
            />
            {passwordMessage && <p className="text-green-500 mt-2">{passwordMessage}</p>}
            {passwordError && <p className="text-red-500 mt-2">{passwordError}</p>}
            <button type="submit" className="mt-4 bg-orange-500 text-white px-4 py-2 rounded">
              Update Password
            </button>
          </form>
        </div>

        <div className="md:col-span-2 flex flex-col gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-2xl font-bold text-orange-500">Total Quizzes Taken</h3>
            <p className="text-4xl font-semibold mt-4">{totalQuizzesTaken}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-2xl font-bold text-orange-500">Completed Quizzes</h3>
            <p className="text-4xl font-semibold mt-4">{completedQuizzes.length}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-2xl font-bold text-orange-500">Leaderboard Rank</h3>
            <p className="text-4xl font-semibold mt-4">{rank}</p>
          </div>
        </div>
      </div>
      <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-orange-500">All Quizzes</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full mt-4 text-left border-collapse">
            <thead>
              <tr>
                <th className="border p-2">ID</th>
                <th className="border p-2">Title</th>
                <th className="border p-2">Score</th>
                <th className="border p-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {allQuizzes.map((quiz) => (
                <tr key={quiz.id}>
                  <td className="border p-2">{quiz.id}</td>
                  <td className="border p-2">{quiz.title}</td>
                  <td className="border p-2">{quiz.pivot.score}</td>
                  <td className="border p-2">{quiz.pivot.completed ? "Completed" : "Not Completed"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
