import React from 'react';
import styles from './Instructions.module.css';

export const Instructions: React.FC = () => {
  return (
    <div className={styles.instructions}>
      <h2>遊び方</h2>
      <p>画面に表示される漢字の中から、他とは異なる漢字を見つけてクリックしてください。</p>
      <p>レベルが上がるごとに難易度が上がり、制限時間内に多くの問題をクリアすることでスコアを獲得できます。</p>
    </div>
  );
};