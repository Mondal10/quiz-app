import React, { useState } from 'react';

// API
import { fetchQuizData } from './API/API';

// Types and Enums
import { Difficulty } from './Types/enums';
import { QuestionState, AnswerObject } from './Types/types';

// Components
import Button from './Components/Button/Button';
import QuestionCard from './Components/QuestionCard/QuestionCard';

// Styles
import { GlobalStyle, Wrapper } from './Styles/App.styles';

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

  /**
   * Check if chosen answer is correct or not
   * @param e MouseEvent
   */
  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      // Users Answer
      const answer = e.currentTarget.value;

      // Check answer against correct answer
      const correct = questions[number].correct_answer === answer;

      // Add score if answer is correct
      if (correct) setScore(prev => prev + 1);

      // Save answer in the array for use answer

      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      }

      setUserAnswers((prev) => [...prev, answerObject]);
    }
  }

  /**Wrapper
   * Move on to the next question if not the last question
   */
  const nextQuestion = () => {
    const nextQuestionNum = number + 1;

    if (nextQuestionNum === TOTAL_QUESTIONS) {
      setGameOver(true);
    } else {
      setNumber(nextQuestionNum);
    }
  }

  return (
    <React.Fragment>
      <GlobalStyle />
      <Wrapper>
        <h1>Quiz</h1>
        {
          gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
            <Button btnClass='start' text='Start' value='' disabled={false} callback={startQuiz} />
          ) : null
        }
        {!gameOver ? (<p className='score'>Score: {score}</p>) : null}
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
              <Button btnClass='next' text='Next Question' value='' disabled={false} callback={nextQuestion} />
            ) : null
        }
      </Wrapper>
    </React.Fragment>
  );
}

export default App;
