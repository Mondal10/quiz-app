import React, { useState } from 'react';
import './App.css';

// API
import { fetchQuizData } from './API/API';

// Types
import { Difficulty, QuestionState } from './API/API';

// Components
import QuestionCard from './Components/QuestionCard/QuestionCard';

type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
}

// Constants
const TOTAL_QUESTIONS = 10;

const App = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  const startQuiz = async () => {
    setLoading(true);
    setGameOver(false);

    const newQuestions = await fetchQuizData(TOTAL_QUESTIONS, Difficulty.EASY);

    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {

  }

  const nextQuestion = () => {

  }

  return (
    <div className='App'>
      <h1>Quiz</h1>
      {
        gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
          <button className='start' onClick={startQuiz}>Start</button>
        ) : null
      }
      {!gameOver ? (<p className='score'>Score:</p>) : null}
      {loading && <p>Loading Question ...</p>}
      {
        !loading && !gameOver && (
          <QuestionCard
            questionNum={number + 1}
            totalQuestions={TOTAL_QUESTIONS}
            question={questions[number].question}
            answers={questions[number].answers}
            userAnswer={userAnswers ? userAnswers[number] : undefined}
            callback={checkAnswer}
          />
        )
      }
      {
        !loading && !gameOver && userAnswers.length === number + 1 && number !== TOTAL_QUESTIONS - 1 ?
          (
            <button className='next' onClick={nextQuestion}>Next Question</button>
          ) : null
      }
    </div>
  );
}

export default App;
