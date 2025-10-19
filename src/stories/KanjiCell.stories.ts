import type { Meta, StoryObj } from '@storybook/react';
import { KanjiCell } from '../features/kanji-quiz/components/KanjiCell';

const meta: Meta<typeof KanjiCell> = {
  title: 'KanjiQuiz/KanjiCell',
  component: KanjiCell,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: { type: 'select' },
      options: ['default', 'correct', 'wrong'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    kanji: '木',
    onClick: () => {},
    state: 'default',
  },
};

export const Correct: Story = {
  args: {
    kanji: '本',
    onClick: () => {},
    state: 'correct',
  },
};

export const Wrong: Story = {
  args: {
    kanji: '木',
    onClick: () => {},
    state: 'wrong',
  },
};

export const Disabled: Story = {
  args: {
    kanji: '木',
    onClick: () => {},
    disabled: true,
  },
};