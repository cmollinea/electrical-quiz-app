import { IQuestion, useGameStore } from '../store/store';
import { getResult } from '../utils/getResult';
import NavigationButtons from './NavigationButtons';

type Props = {
  questionInfo: IQuestion | null;
};

function QuestionContainer({ questionInfo }: Props) {
  const handleAnswer = useGameStore((state) => state.handleAnswer);
  const isUserSelect = typeof questionInfo?.userSelectedAnswer === 'number';

  return (
    <>
      {questionInfo ? (
        <div className='text-center max-w-md grid gap-4 mt-10'>
          <p>
            <i>{questionInfo.question}</i>
          </p>
          <ul className='grid gap-1'>
            {questionInfo.answers.map((ans, index) => (
              <button
                key={index}
                disabled={isUserSelect}
                onClick={() => handleAnswer(questionInfo.id, index)}
                className={`text-center bg-[#202020] p-4 text-md  transition-colors ease-in-out ${
                  !isUserSelect && 'hover:bg-[#303030]'
                } ${getResult(questionInfo, index)}`}
              >
                {ans}
              </button>
            ))}
          </ul>
          <NavigationButtons isUserSelected={isUserSelect} />
        </div>
      ) : null}
    </>
  );
}
export default QuestionContainer;
