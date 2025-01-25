import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import styles from './index.module.scss';
import PlusButton from '../components/UI/plus-button/PlusButton';
import DrawerComponent from '../components/drawer/Drawer';
import { CelebrationRounded } from '@mui/icons-material';
import { iImage } from '../types/types';

const LandingPage: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [droppedImages, setDroppedImages] = useState<iImage[]>([]);

  const toggleDrawer = (open: boolean) => {
    setDrawerOpen(open);
  };

  const [{ isOver, isActive }, drop] = useDrop(
    () => ({
      accept: 'IMAGE',
      drop: (item: iImage) => {
        setDroppedImages((prev) => [...prev, item]);
      },
      collect: (monitor) => ({
        isOver: monitor.isOver(),
        isActive: monitor.canDrop(),
      }),
    }),
    []
  );

  return (
    <div className={styles.page}>
      {}
      <div ref={drop} className={styles.container}>
        <div className={styles.items}>
          {droppedImages.map((image, index) => (
            <img
              className={styles.image}
              key={index}
              src={image.src}
              alt={`Dropped Image ${index + 1}`}
            />
          ))}
          {isActive || !droppedImages.length ? (
            <div
              ref={drop}
              className={styles.active}
              style={{
                backgroundColor: isOver ? '#f3eef8' : 'transparent',
              }}
            >
              {droppedImages.length >= 1 && <h3>Add your block here</h3>}
              {droppedImages.length < 1 && (
                <div className={styles.initial}>
                  <div className={styles.plus}>
                    <PlusButton onClick={() => toggleDrawer(true)} />
                  </div>
                  <h3>
                    Add your first block!
                    <CelebrationRounded
                      className="primary-color"
                      sx={{ fontSize: '28px' }}
                    />
                  </h3>
                </div>
              )}
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
      <button className={styles.button} onClick={() => toggleDrawer(true)}>
        Add
      </button>
      <DrawerComponent open={drawerOpen} onClose={() => toggleDrawer(false)} />
    </div>
  );
};

export default LandingPage;
