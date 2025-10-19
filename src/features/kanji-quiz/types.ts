export interface KanjiPair {
  normal: string;
  different: string;
}

export interface GridSize {
  rows: number;
  cols: number;
}

export interface GameState {
  level: number;
  score: number;
  timeLeft: number;
  gameActive: boolean;
  correctCellIndex: number;
}

export interface GameConfig {
  initialTime: number;
  timeReduction: number;
  pointsPerLevel: number;
  maxLevel: number;
}