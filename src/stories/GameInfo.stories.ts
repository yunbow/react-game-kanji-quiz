import type { Meta, StoryObj } from '@storybook/react';
import { GameInfo } from '../features/kanji-quiz/components/GameInfo';

const meta: Meta<typeof GameInfo> = {
  title: 'KanjiQuiz/GameInfo',
  component: GameInfo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    level: 1,
    score: 0,
    timeLeft: 60,
  },
};

export const InProgress: Story = {
  args: {
    level: 3,
    score: 150,
    timeLeft: 30,
  },
};

export const TimeRunningOut: Story = {
  args: {
    level: 5,
    score: 400,
    timeLeft: 5,
  },
};