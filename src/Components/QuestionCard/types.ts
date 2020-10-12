// Types
import { AnswerObject } from '../../Types/types';

export type QuestionProps = {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  questionNum: number;
  totalQuestions: number;
};

export type ButtonWrapperProps = {
  correct: boolean;
  userClicked: boolean;
};