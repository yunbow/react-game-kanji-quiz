import React from 'react';
import { GameInfo } from '../components/GameInfo';
import { GameBoard } from '../components/GameBoard';
import { GameControls } from '../components/GameControls';
import { MessageBox } from '../components/MessageBox';
import { Instructions } from '../components/Instructions';
import { useKanjiQuiz } from '../useKanjiQuiz';
import styles from './KanjiQuizApp.module.css';

export const KanjiQuizApp: React.FC = () => {
  const {
    gameState,
    message,
    nextLevelEnabled,
    currentKanjiPair,
    cellStates,
    startGame,
    nextLevel,
    handleCellClick,
    getCurrentGridSize
  } = useKanjiQuiz();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>漢字の間違い探し</h1>

      <GameInfo
        level={gameState.level}
        score={gameState.score}
        timeLeft={gameState.timeLeft}
      />

      <div className={styles.gameContainer}>
        {currentKanjiPair ? (
          <GameBoard
            kanjiPair={currentKanjiPair}
            gridSize={getCurrentGridSize()}
            correctCellIndex={gameState.correctCellIndex}
            onCellClick={handleCellClick}
            disabled={!gameState.gameActive}
            cellStates={cellStates}
          />
        ) : (
          <div className={styles.placeholder}>ゲームボード</div>
        )}
      </div>

      <GameControls
        onStartGame={startGame}
        onNextLevel={nextLevel}
        startDisabled={gameState.gameActive}
        nextLevelDisabled={!nextLevelEnabled}
      />

      <MessageBox message={message} />

      <Instructions />
    </div>
  );
};