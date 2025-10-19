import type { Meta, StoryObj } from '@storybook/react';
import { KanjiQuizApp } from '../features/kanji-quiz/KanjiQuizApp';

const meta: Meta<typeof KanjiQuizApp> = {
  title: 'KanjiQuiz/KanjiQuizApp',
  component: KanjiQuizApp,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};