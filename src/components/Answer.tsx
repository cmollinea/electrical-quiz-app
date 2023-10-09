import { useGameStore } from '../store/store';

type Props = {
  item: string;
  index: number;
  id: number;
  result: string;
};

function Answer({ item, index, id, result }: Props) {
  const handleAnswer = useGameStore((state) => state.handleAnswer);

  return (
    <li
      onClick={() => handleAnswer(id, index)}
      className={`text-center bg-[#202020] p-2 text-lg font-bold hover:bg-[#444444] cursor-pointer ${result}`}
    >
      {item}
    </li>
  );
}
export default Answer;
