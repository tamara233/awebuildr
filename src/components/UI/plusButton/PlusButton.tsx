import React from 'react';
import styles from './index.module.scss';

interface PlusButtonProps {
  onClick: () => void;
}

const PlusButton: React.FC<PlusButtonProps> = ({ onClick }) => {
  return (
    <div className={styles.circle} onClick={onClick}>
      <span className={styles.plus}>+</span>
    </div>
  );
};

export default PlusButton;
