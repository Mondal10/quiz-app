import React from 'react';

// Components
import Button from '../Button/Button';

// Types
import { QuestionProps } from './types';

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
              <Button btnClass='' text='' disabled={!!userAnswer} value={answer} callback={callback}>
                <span dangerouslySetInnerHTML={{ __html: answer }}></span>
              </Button>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default QuestionCard;
