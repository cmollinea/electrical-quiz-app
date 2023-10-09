import { useGameStore } from '../store/store';

function Score() {
  let correct = 0;
  let incorrect = 0;
  let left = 10;

  const questions = useGameStore((state) => state.questions);

  questions.forEach((q) => {
    if (typeof q.userSelectedAnswer === 'number') {
      left--;
      if (q.userSelectedAnswer === q.correct_answer) {
        correct++;
      }
      if (q.userSelectedAnswer !== q.correct_answer) {
        incorrect++;
      }
    }
  });

  return (
    <div className='flex gap-2'>
      <p>✅{correct}</p>
      <p>❌{incorrect}</p>
      <p>🗿{left}</p>
    </div>
  );
}
export default Score;
