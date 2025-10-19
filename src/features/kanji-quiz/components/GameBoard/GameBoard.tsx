import React from 'react';
import { KanjiCell } from '../KanjiCell';
import { KanjiPair, GridSize } from '../../types';
import styles from './GameBoard.module.css';

interface GameBoardProps {
  kanjiPair: KanjiPair;
  gridSize: GridSize;
  correctCellIndex: number;
  onCellClick: (index: number, isCorrect: boolean) => void;
  disabled?: boolean;
  cellStates?: ('default' | 'correct' | 'wrong')[];
}

export const GameBoard: React.FC<GameBoardProps> = ({
  kanjiPair,
  gridSize,
  correctCellIndex,
  onCellClick,
  disabled = false,
  cellStates = []
}) => {
  const totalCells = gridSize.rows * gridSize.cols;
  const cells = Array.from({ length: totalCells }, (_, index) => {
    const isCorrect = index === correctCellIndex;
    const kanji = isCorrect ? kanjiPair.different : kanjiPair.normal;
    const state = cellStates[index] || 'default';

    return (
      <KanjiCell
        key={index}
        kanji={kanji}
        onClick={() => onCellClick(index, isCorrect)}
        state={state}
        disabled={disabled}
      />
    );
  });

  return (
    <div
      className={styles.gameBoard}
      style={{
        gridTemplateColumns: `repeat(${gridSize.cols}, 1fr)`
      }}
    >
      {cells}
    </div>
  );
};