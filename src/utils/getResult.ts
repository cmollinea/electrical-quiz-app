import { IQuestion } from '../store/store';

export const getResult = (info: IQuestion, index: number) => {
  const { userSelectedAnswer, correct_answer } = info;

  if (typeof userSelectedAnswer !== 'number') {
    return '';
  }

  if (userSelectedAnswer !== correct_answer && index === userSelectedAnswer) {
    return 'bg-red-500';
  }

  if (userSelectedAnswer !== correct_answer && index === correct_answer) {
    return 'bg-green-600';
  }

  if (userSelectedAnswer === index && userSelectedAnswer === correct_answer) {
    return 'bg-green-600';
  }
};
