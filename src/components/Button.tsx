import { useGameStore } from '../store/store';

function Button() {
  const startGame = useGameStore((state) => state.startGame);
  return (
    <button
      onClick={() => startGame()}
      className='w-40 border-2 rounded-2xl p-2 text-xl font-bold hover:bg-amber-500 hover:border-amber-500 hover:text-black transition-all ease-in-out active:scale-90'
    >
      Start
    </button>
  );
}
export default Button;
