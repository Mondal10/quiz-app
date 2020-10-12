import React from 'react';

// Types
import { AnswerObject } from '../../Types/types';

type QuestionProps = {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  questionNum: number;
  totalQuestions: number;
};

const QuestionCard: React.FC<QuestionProps> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNum,
  totalQuestions
}) => {
  return (
    <div>
      <p className='number'>Question: {questionNum} / {totalQuestions}</p>
      <p dangerouslySetInnerHTML={{ __html: question }}></p>
      <div>
        {
          answers.map(answer => (
            <div key={answer}>
              <button disabled={!!userAnswer} value={answer} onClick={callback}>
                <span dangerouslySetInnerHTML={{ __html: answer }}></span>
              </button>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default QuestionCard;
