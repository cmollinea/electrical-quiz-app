import { create } from 'zustand';
import conffeti from 'canvas-confetti';

export type GameStatus = 'playing' | 'stop' | 'finish';

export interface IQuestion {
  id: number;
  question: string;
  answers: string[];
  correct_answer: number;
  userSelectedAnswer?: number;
}

export interface GameState {
  questions: IQuestion[];
  currentQuestion: number;
  startGame: () => void;
  handleAnswer: (id: number, index: number) => void;
  getNextQuestion: () => void;
  getPrevQuestion: () => void;
}

export const useGameStore = create<GameState>((set, get) => ({
  questions: [],

  currentQuestion: 0,

  startGame: async () => {
    const response = await fetch('http://localhost:5173/question.json');
    const questions: IQuestion[] = await response.json();
    set(() => ({
      questions: questions.sort(() => Math.random() - 0.5).slice(0, 10)
    }));
  },

  handleAnswer: (id, index) => {
    const questions = [...get().questions];
    const updatedQuestions = questions.map((q) =>
      q.id !== id ? q : { ...q, userSelectedAnswer: index }
    );
    const qIndex = questions.findIndex((q) => q.id === id);
    if (index === questions[qIndex].correct_answer) {
      conffeti();
    }
    set(() => ({ questions: updatedQuestions }));
  },

  getNextQuestion: () => {
    const { questions, currentQuestion } = get();
    if (currentQuestion < questions.length - 1) {
      set(() => ({ currentQuestion: currentQuestion + 1 }));
    }
    return;
  },

  getPrevQuestion: () => {
    const { currentQuestion } = get();
    if (typeof currentQuestion === 'number' && currentQuestion > 0) {
      set(() => ({ currentQuestion: currentQuestion - 1 }));
    }
  }
}));
