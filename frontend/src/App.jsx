import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import QuizzesPage from './pages/QuizzesPage';
import QuizPage from './pages/QuizPage';
import LeaderboardPage from './pages/LeaderboardPage';
import FlashcardsPage from './pages/FlashcardsPage';
import NotesPage from './pages/NotesPage';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/quizzes' element={<QuizzesPage />} />
        <Route path='/categories/:categoryId/quizzes/:quizId/questions' element={<QuizPage />} />
        <Route path='/leaderboard' element={<LeaderboardPage />} />
        <Route path='/flashcards' element={<FlashcardsPage />} />
        <Route path='/notes' element={<NotesPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
