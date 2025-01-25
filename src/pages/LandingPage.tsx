import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import styles from './index.module.scss';
import PlusButton from '../components/UI/plus-button/PlusButton';
import DrawerComponent from '../components/drawer/Drawer';
import { CelebrationRounded } from '@mui/icons-material';
import { DraggedItem, iTextItem } from '../types/types';

const LandingPage: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [droppedElements, setDroppedElements] = useState<DraggedItem[]>([]);

  const toggleDrawer = (open: boolean) => {
    setDrawerOpen(open);
  };

  const [{ isOver, isActive }, drop] = useDrop(
    () => ({
      accept: ['IMAGE', 'TEXT'],
      drop: (item: DraggedItem) => {
        setDroppedElements((prev) => [...prev, item]);
      },
      collect: (monitor) => ({
        isOver: monitor.isOver(),
        isActive: monitor.canDrop(),
      }),
    }),
    []
  );

  const handleTextChange = (
    index: number,
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const updatedElements = [...droppedElements];
    const element = updatedElements[index];
    if (element.type === 'TEXT') {
      (element as iTextItem).content = event.target.value;
    }
    setDroppedElements(updatedElements);
  };

  return (
    <div className={styles.page}>
      {}
      <div ref={drop} className={styles.container}>
        <div className={styles.items}>
          {droppedElements.map((item, index) => {
            if (item.type === 'IMAGE')
              return (
                <img
                  className={styles.image}
                  key={index}
                  src={item.src}
                  alt={`Dropped Image ${index + 1}`}
                />
              );
            else
              return (
                <div className={styles.text} key={index}>
                  <textarea
                    className={styles.textarea}
                    value={item.content}
                    onChange={(e) => handleTextChange(index, e)}
                    autoFocus
                  />
                </div>
              );
          })}

          {isActive || !droppedElements.length ? (
            <div
              ref={drop}
              className={styles.active}
              style={{
                backgroundColor: isOver ? '#f3eef8' : 'transparent',
              }}
            >
              {droppedElements.length >= 1 && <h3>Add your block here</h3>}
              {droppedElements.length < 1 && (
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
