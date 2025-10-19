import { useState, useEffect, useCallback } from 'react';
import { GameState, KanjiPair, GridSize } from './types';
import { GAME_CONFIG, LEVEL_KANJI_PAIRS, LEVEL_GRID_SIZES } from '../../Config';

export const useKanjiQuiz = () => {
  const [gameState, setGameState] = useState<GameState>({
    level: 1,
    score: 0,
    timeLeft: GAME_CONFIG.initialTime,
    gameActive: false,
    correctCellIndex: -1
  });

  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);
  const [message, setMessage] = useState('「スタート」を押して始めてください');
  const [nextLevelEnabled, setNextLevelEnabled] = useState(false);
  const [currentKanjiPair, setCurrentKanjiPair] = useState<KanjiPair | null>(null);
  const [cellStates, setCellStates] = useState<('default' | 'correct' | 'wrong')[]>([]);

  const startTimer = useCallback(() => {
    if (timer) clearInterval(timer);

    const newTimer = setInterval(() => {
      setGameState(prev => {
        if (prev.timeLeft <= 1) {
          clearInterval(newTimer);
          return { ...prev, timeLeft: 0, gameActive: false };
        }
        return { ...prev, timeLeft: prev.timeLeft - 1 };
      });
    }, 1000);

    setTimer(newTimer);
  }, [timer]);

  const endGame = useCallback((completed = false) => {
    setGameState(prev => ({ ...prev, gameActive: false }));
    if (timer) clearInterval(timer);
    setNextLevelEnabled(false);

    if (!completed) {
      setMessage(`ゲーム終了！あなたのスコア: ${gameState.score}`);
    }
  }, [timer, gameState.score]);

  const createGameBoard = useCallback(() => {
    const currentGridSize = LEVEL_GRID_SIZES[gameState.level - 1];
    const totalCells = currentGridSize.rows * currentGridSize.cols;

    const randomPairIndex = Math.floor(Math.random() * LEVEL_KANJI_PAIRS[gameState.level - 1].length);
    const kanjiPair = LEVEL_KANJI_PAIRS[gameState.level - 1][randomPairIndex];

    const correctIndex = Math.floor(Math.random() * totalCells);

    setGameState(prev => ({ ...prev, correctCellIndex: correctIndex }));
    setCurrentKanjiPair(kanjiPair);
    setCellStates(Array(totalCells).fill('default'));
  }, [gameState.level]);

  const startGame = useCallback(() => {
    setGameState({
      level: 1,
      score: 0,
      timeLeft: GAME_CONFIG.initialTime,
      gameActive: true,
      correctCellIndex: -1
    });

    setNextLevelEnabled(false);
    setMessage('異なる漢字を探してクリックしてください！');

    startTimer();
    setTimeout(createGameBoard, 100);
  }, [startTimer, createGameBoard]);

  const nextLevel = useCallback(() => {
    if (gameState.level < GAME_CONFIG.maxLevel) {
      setGameState(prev => ({ ...prev, level: prev.level + 1 }));
      setNextLevelEnabled(false);
      setMessage('異なる漢字を探してクリックしてください！');
      createGameBoard();
    } else {
      setMessage('おめでとうございます！全レベルクリアしました！');
      endGame(true);
    }
  }, [gameState.level, createGameBoard, endGame]);

  const handleCellClick = useCallback((index: number, isCorrect: boolean) => {
    if (!gameState.gameActive) return;

    if (isCorrect) {
      const newCellStates = [...cellStates];
      newCellStates[index] = 'correct';
      setCellStates(newCellStates);

      const newScore = gameState.score + gameState.level * GAME_CONFIG.pointsPerLevel;
      setGameState(prev => ({ ...prev, score: newScore }));

      setMessage('正解！次のチャレンジに進みましょう！');

      setTimeout(() => {
        if (Math.random() < 0.7 && gameState.level < GAME_CONFIG.maxLevel) {
          createGameBoard();
        } else if (gameState.level < GAME_CONFIG.maxLevel) {
          setNextLevelEnabled(true);
          setMessage('次のレベルへ進む準備ができました！');
        } else {
          setMessage('おめでとうございます！全レベルクリアしました！');
          endGame(true);
        }
      }, 1000);
    } else {
      const newCellStates = [...cellStates];
      newCellStates[index] = 'wrong';
      setCellStates(newCellStates);

      setGameState(prev => ({
        ...prev,
        timeLeft: Math.max(1, prev.timeLeft - GAME_CONFIG.timeReduction)
      }));

      setMessage('残念！もう一度試してください。');

      setTimeout(() => {
        const resetCellStates = [...newCellStates];
        resetCellStates[index] = 'default';
        setCellStates(resetCellStates);
      }, 500);
    }
  }, [gameState, cellStates, createGameBoard, endGame]);

  useEffect(() => {
    if (gameState.timeLeft === 0 && gameState.gameActive) {
      endGame();
    }
  }, [gameState.timeLeft, gameState.gameActive, endGame]);

  useEffect(() => {
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [timer]);

  const getCurrentGridSize = (): GridSize => {
    return LEVEL_GRID_SIZES[gameState.level - 1] || LEVEL_GRID_SIZES[0];
  };

  return {
    gameState,
    message,
    nextLevelEnabled,
    currentKanjiPair,
    cellStates,
    startGame,
    nextLevel,
    handleCellClick,
    getCurrentGridSize
  };
};