import React from 'react';
import styles from './KanjiCell.module.css';

interface KanjiCellProps {
  kanji: string;
  onClick: () => void;
  state?: 'default' | 'correct' | 'wrong';
  disabled?: boolean;
}

export const KanjiCell: React.FC<KanjiCellProps> = ({
  kanji,
  onClick,
  state = 'default',
  disabled = false
}) => {
  return (
    <div
      className={`${styles.cell} ${styles[state]}`}
      onClick={disabled ? undefined : onClick}
      style={{ cursor: disabled ? 'default' : 'pointer' }}
    >
      {kanji}
    </div>
  );
};