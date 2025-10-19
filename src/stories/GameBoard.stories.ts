import type { Meta, StoryObj } from '@storybook/react';
import { GameBoard } from '../features/kanji-quiz/components/GameBoard';

const meta: Meta<typeof GameBoard> = {
  title: 'KanjiQuiz/GameBoard',
  component: GameBoard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Level1: Story = {
  args: {
    kanjiPair: { normal: '木', different: '本' },
    gridSize: { rows: 3, cols: 3 },
    correctCellIndex: 4,
    onCellClick: () => {},
  },
};

export const Level3: Story = {
  args: {
    kanjiPair: { normal: '今', different: '令' },
    gridSize: { rows: 5, cols: 5 },
    correctCellIndex: 12,
    onCellClick: () => {},
  },
};

export const WithStates: Story = {
  args: {
    kanjiPair: { normal: '木', different: '本' },
    gridSize: { rows: 3, cols: 3 },
    correctCellIndex: 4,
    onCellClick: () => {},
    cellStates: [
      'default', 'default', 'default',
      'wrong', 'correct', 'default',
      'default', 'default', 'default'
    ],
  },
};