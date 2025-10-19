# 漢字の間違い探し (TypeScript + React + Storybook)

React 18とTypeScriptで構築された漢字の間違い探しゲームです。機能別のモジュラーアーキテクチャを採用しています。

## デモプレイ
https://yunbow.github.io/react-game-kanji-quiz/demo/

## 主要機能

### ゲームルール
- **目的**: 表示される漢字の中から、他とは異なる漢字を見つける
- **操作**: 異なる漢字をクリック
- **スコア**: 正解時にレベル×10ポイント獲得
- **レベルアップ**: 70%の確率で同レベル継続、30%の確率でレベルアップ

### ゲーム仕様
- 複数の漢字の中から異なる漢字を見つけるゲーム
- 5段階のレベル制（3×3から7×7グリッド）
- 60秒の制限時間
- レベル×10ポイントのスコアシステム
- 不正解時5秒のペナルティ

## 技術スタック

- **React 18** - UIライブラリ
- **TypeScript** - プログラミング言語
- **Storybook 7** - コンポーネント開発・ドキュメント
- **CSS Modules** - スタイリング
- **Vite** - ビルドツール

## プロジェクト構造

```
src/
├── features/                   # 機能別モジュール
│   └── kanji-quiz/             # 漢字クイズ機能
│       ├── components/         # 機能専用コンポーネント
│       │   ├── GameInfo/       # レベル・スコア・時間表示
│       │   ├── GameBoard/      # 漢字グリッド
│       │   ├── GameControls/   # ゲーム操作
│       │   ├── MessageBox/     # メッセージ表示
│       │   ├── Instructions/   # 遊び方説明
│       │   └── KanjiCell/      # 漢字表示セル
│       ├── KanjiQuizApp/       # 機能ルートコンポーネント
│       ├── useKanjiQuiz.ts     # ゲームロジックフック
│       └── types.ts            # 機能固有の型定義
├── components/                 # 共通UIコンポーネント
│   └── Button/                 # 操作ボタン
├── stories/                    # Storybook用ストーリー
├── types/                      # グローバル型定義
├── Config.ts                   # ゲーム設定
├── App.tsx                     # メインアプリ
└── main.tsx                    # エントリーポイント
```

## スクリプト

```bash
# セットアップ
npm install

# 開発サーバー起動
npm run dev

# ビルド
npm run build

# プレビュー
npm run preview

# Storybook起動
npm run storybook

# Storybook ビルド
npm run build-storybook
```

## ライセンス

MIT License