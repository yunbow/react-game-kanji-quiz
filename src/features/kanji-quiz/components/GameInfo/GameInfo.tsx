import React from 'react';
import styles from './GameInfo.module.css';

interface GameInfoProps {
  level: number;
  score: number;
  timeLeft: number;
}

export const GameInfo: React.FC<GameInfoProps> = ({
  level,
  score,
  timeLeft
}) => {
  return (
    <div className={styles.gameInfo}>
      <p>レベル: <span className={styles.value}>{level}</span></p>
      <p>スコア: <span className={styles.value}>{score}</span></p>
      <p>残り時間: <span className={styles.value}>{timeLeft}</span>秒</p>
    </div>
  );
};