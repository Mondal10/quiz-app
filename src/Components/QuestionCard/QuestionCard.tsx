import React from 'react';

// Components
import Button from '../Button/Button';

// Types
import { QuestionProps } from './types';

// Styles
import { QuestionCardWrapper, ButtonWrapper } from './QuestionCard.styles';

const QuestionCard: React.FC<QuestionProps> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNum,
  totalQuestions
}) => {
  return (
    <QuestionCardWrapper>
      <p className='number'>Question: {questionNum} / {totalQuestions}</p>
      <p dangerouslySetInnerHTML={{ __html: question }}></p>
      <div>
        {
          answers.map(answer => (
            <ButtonWrapper
              key={answer}
              correct={userAnswer ?.correctAnswer === answer}
              userClicked={userAnswer ?.answer === answer}
            >
              <Button btnClass='' text='' disabled={!!userAnswer} value={answer} callback={callback}>
                <span dangerouslySetInnerHTML={{ __html: answer }}></span>
              </Button>
            </ButtonWrapper>
          ))
        }
      </div>
    </QuestionCardWrapper>
  )
}

export default QuestionCard;
