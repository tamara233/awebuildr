import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import styles from './index.module.scss';
import PlusButton from '../components/UI/plus-button/PlusButton';
import DrawerComponent from '../components/drawer/Drawer';

const LandingPage: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [droppedImages, setDroppedImages] = useState<string[]>([]);

  const toggleDrawer = (open: boolean) => {
    setDrawerOpen(open);
  };

  const [{ isOver }, drop] = useDrop(
    () => ({
      accept: 'IMAGE',
      drop: (item: { id: string; src: string }) => {
        setDroppedImages((prev) => [...prev, item.src]);
      },
      collect: (monitor) => ({
        isOver: monitor.isOver(),
      }),
    }),
    []
  );

  return (
    <div className={styles.page}>
      <div className={styles.plus}>
        <PlusButton onClick={() => toggleDrawer(true)} />
      </div>
      <div
        ref={drop}
        className={styles.container}
        style={{
          border: '2px dashed gray',
          padding: '20px',
          marginTop: '20px',
          minHeight: '200px',
          backgroundColor: isOver ? 'lightyellow' : 'transparent',
        }}
      >
        <h3>Add your block here</h3>
        <div className={styles.items}>
          {droppedImages.map((src, index) => (
            <img
              className={styles.image}
              key={index}
              src={src}
              alt={`Dropped Image ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <DrawerComponent open={drawerOpen} onClose={() => toggleDrawer(false)} />
    </div>
  );
};

export default LandingPage;
