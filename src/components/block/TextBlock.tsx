import React from 'react';
import styles from './index.module.scss';
import { useDrag } from 'react-dnd';
import { STATIC_TEXT, STATIC_TEXT_LONG } from '../../constants/constants';

const TextBlock: React.FC = () => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'TEXT',
    item: { type: 'TEXT', content: STATIC_TEXT_LONG },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div
      className={styles.text}
      ref={drag}
      style={{ opacity: isDragging ? 0.5 : 1 }}
    >
      <p className={styles.small}>{STATIC_TEXT}</p>
      <p className={styles.info}>Editable text field</p>
    </div>
  );
};

export default TextBlock;
