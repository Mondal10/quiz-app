import React, { useState } from 'react';
import './App.css';

// API
import { fetchQuizData } from './API/API';

// Types
import { Difficulty } from './API/API';

// Components
import QuestionCard from './Components/QuestionCard/QuestionCard';

// Constants
const TOTAL_QUESTIONS = 10;

const App = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  const startQuiz = async () => {
    console.log('HELLO');
    fetchQuizData(TOTAL_QUESTIONS, Difficulty.EASY);
  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {

  }

  const nextQuestion = () => {

  }

  return (
    <div className='App'>
      <h1>Quiz</h1>
      <button className='start' onClick={startQuiz}>Start</button>
      <p className='score'>Score:</p>
      <p>Loading Question ...</p>
      {/* <QuestionCard
        questionNum={number + 1}
        totalQuestions={TOTAL_QUESTIONS}
        question={questions[number].question}
        answers={questions[number.answers]}
        userAnswer={userAnswers ? userAnswers[number] : undefined}
        callback={checkAnswer}
      /> */}
      <button className='next' onClick={nextQuestion}>Next Question</button>
    </div>
  );
}

export default App;
