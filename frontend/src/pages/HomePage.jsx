import React from 'react'
import HeroHP from '../components/HeroHP';
import QuizHP from '../components/QuizHP';
import LeaderboardHP from '../components/LeaderboardHP';
import FlashcardHP from '../components/FlashcardHP';
import NoteHP from '../components/NoteHP';

function HomePage() {
  return (
    <>
      <HeroHP />
      <QuizHP />
      <LeaderboardHP />
      <FlashcardHP />
      <NoteHP />
    </>
  )
}

export default HomePage
