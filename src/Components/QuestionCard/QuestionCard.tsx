import React from 'react';

type QuestionProps = {
  question: string;
  answers: string[];
  callback: any;
  userAnswer: any;
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
      <p>{question}</p>
      <div>
        {
          answers.map(answer => (
            <div>
              <button disabled={userAnswer} onClick={callback}>
                <span>answer</span>
              </button>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default QuestionCard;
