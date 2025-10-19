import React from 'react';
import { Button } from '../../../../components/Button';
import styles from './GameControls.module.css';

interface GameControlsProps {
  onStartGame: () => void;
  onNextLevel: () => void;
  startDisabled?: boolean;
  nextLevelDisabled?: boolean;
}

export const GameControls: React.FC<GameControlsProps> = ({
  onStartGame,
  onNextLevel,
  startDisabled = false,
  nextLevelDisabled = true
}) => {
  return (
    <div className={styles.controls}>
      <Button onClick={onStartGame} disabled={startDisabled}>
        ゲームスタート
      </Button>
      <Button onClick={onNextLevel} disabled={nextLevelDisabled}>
        次のレベル
      </Button>
    </div>
  );
};