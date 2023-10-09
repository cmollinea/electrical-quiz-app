import { useGameStore } from '../store/store.js';

type Props = {
  isUserSelected: boolean;
};

function NavigationButtons({ isUserSelected }: Props) {
  const [currentQuestion, getNextQuestion, getPrevQuestion] = useGameStore(
    (state) => [
      state.currentQuestion,
      state.getNextQuestion,
      state.getPrevQuestion
    ]
  );

  return (
    <div className='flex place-content-center items-center gap-2 mt-4'>
      <button
        disabled={currentQuestion === 0}
        onClick={getPrevQuestion}
        className={`p-2 bg-[#202020] ${
          currentQuestion !== 0 && 'hover:bg-[#303030]'
        } transition-colors ease-in-out rounded-sm`}
      >
        Anterior
      </button>
      <span>{(currentQuestion as number) + 1}/10</span>
      <button
        disabled={!isUserSelected}
        onClick={getNextQuestion}
        className={`p-2 bg-[#202020] ${
          isUserSelected && 'hover:bg-[#303030]'
        } transition-colors ease-in-out rounded-sm`}
      >
        Siguiente
      </button>
    </div>
  );
}
export default NavigationButtons;
