import React from 'react';
import styles from './MessageBox.module.css';

interface MessageBoxProps {
  message: string;
}

export const MessageBox: React.FC<MessageBoxProps> = ({ message }) => {
  return (
    <div className={styles.messageBox}>
      {message}
    </div>
  );
};