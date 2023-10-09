import Button from './components/Button';
import QuestionContainer from './components/QuestionContainer';
import Score from './components/Score';
import { useGameStore } from './store/store';

function App() {
  const questions = useGameStore((state) => state.questions);
  const currentQuestion = useGameStore((state) => state.currentQuestion);
  console.log(questions, currentQuestion);

  const questionInfo =
    typeof currentQuestion === 'number' ? questions[currentQuestion] : null;

  return (
    <>
      <section className='grid justify-items-center place-content-center justify-center gap-4 min-h-screen max-md:px-6'>
        <h1 className='text-4xl md:text-4xl text-center font-extrabold'>
          ⚡ <br />
          Electric Quiz
        </h1>
        {questions.length === 0 ? (
          <Button />
        ) : (
          <>
            <QuestionContainer questionInfo={questionInfo} />
            <Score />
          </>
        )}
      </section>
    </>
  );
}

export default App;
