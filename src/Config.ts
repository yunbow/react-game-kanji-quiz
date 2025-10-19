import { KanjiPair, GridSize } from './features/kanji-quiz/types';

export const GAME_CONFIG = {
  initialTime: 60,
  timeReduction: 5,
  pointsPerLevel: 10,
  maxLevel: 5,
} as const;

export const LEVEL_KANJI_PAIRS: KanjiPair[][] = [
  [
    { normal: '木', different: '本' },
    { normal: '田', different: '由' },
    { normal: '人', different: '入' },
    { normal: '日', different: '目' },
    { normal: '口', different: '囗' }
  ],
  [
    { normal: '未', different: '末' },
    { normal: '土', different: '士' },
    { normal: '干', different: '千' },
    { normal: '夫', different: '失' },
    { normal: '大', different: '太' }
  ],
  [
    { normal: '今', different: '令' },
    { normal: '間', different: '問' },
    { normal: '待', different: '持' },
    { normal: '海', different: '毎' },
    { normal: '官', different: '宮' }
  ],
  [
    { normal: '徳', different: '徳' },
    { normal: '漢', different: '藏' },
    { normal: '線', different: '練' },
    { normal: '器', different: '哭' },
    { normal: '華', different: '華' }
  ],
  [
    { normal: '橋', different: '矯' },
    { normal: '職', different: '織' },
    { normal: '義', different: '議' },
    { normal: '識', different: '織' },
    { normal: '難', different: '離' }
  ]
];

export const LEVEL_GRID_SIZES: GridSize[] = [
  { rows: 3, cols: 3 },
  { rows: 4, cols: 4 },
  { rows: 5, cols: 5 },
  { rows: 6, cols: 6 },
  { rows: 7, cols: 7 }
];