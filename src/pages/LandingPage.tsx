import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import styles from './index.module.scss';
import PlusButton from '../components/UI/plus-button/PlusButton';
import DrawerComponent from '../components/drawer/Drawer';
import { CelebrationRounded } from '@mui/icons-material';
import { DraggedItem, iTextItem } from '../types/types';
import Toolbar from '../components/toolbar/Toolbar';
import { nanoid } from '@reduxjs/toolkit';

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
        const newItem = { ...item, id: nanoid() };
        setDroppedElements((prev) => [...prev, newItem]);
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

  const handleDuplicate = (index: number) => {
    const element = droppedElements[index];
    const newElement = { ...element, id: nanoid() };

    const updatedElements = [...droppedElements];
    updatedElements.splice(index + 1, 0, newElement);

    setDroppedElements(updatedElements);
  };

  const handleDelete = (index: number) => {
    const updatedElements = droppedElements.filter((_, i) => i !== index);
    setDroppedElements(updatedElements);
  };

  const handleMoveUp = (index: number) => {
    if (index > 0) {
      const updatedElements = [...droppedElements];
      const temp = updatedElements[index];
      updatedElements[index] = updatedElements[index - 1];
      updatedElements[index - 1] = temp;
      setDroppedElements(updatedElements);
    }
  };

  const handleMoveDown = (index: number) => {
    if (index < droppedElements.length - 1) {
      const updatedElements = [...droppedElements];
      const temp = updatedElements[index];
      updatedElements[index] = updatedElements[index + 1];
      updatedElements[index + 1] = temp;
      setDroppedElements(updatedElements);
    }
  };

  const handleSave = () => {
    if (!droppedElements.length) return;
    const data = JSON.stringify(droppedElements, null, 2);
    console.log('Exportable data:', data);
  };

  return (
    <div className={styles.page}>
      <div ref={drop} className={styles.container}>
        <div className={styles.items}>
          {droppedElements.map((item, index) => (
            <div key={index} className={styles.wrapper}>
              <div className="toolbar">
                <Toolbar
                  index={index}
                  onDuplicate={handleDuplicate}
                  onDelete={handleDelete}
                  onMoveUp={handleMoveUp}
                  onMoveDown={handleMoveDown}
                  count={droppedElements.length}
                />
              </div>

              {item.type === 'IMAGE' ? (
                <img
                  className={styles.image}
                  src={item.src}
                  alt={`Dropped Image ${item.id}`}
                />
              ) : (
                <textarea
                  className={styles.textarea}
                  value={item.content}
                  onChange={(e) => handleTextChange(index, e)}
                  autoFocus
                />
              )}
            </div>
          ))}

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
      <div className={styles.buttons}>
        <button className={styles.button} onClick={() => toggleDrawer(true)}>
          Add
        </button>
        <button
          className={`${styles.button} ${droppedElements.length < 1 ? 'button-inactive' : ''}`}
          onClick={handleSave}
        >
          Save
        </button>
      </div>
      <DrawerComponent open={drawerOpen} onClose={() => toggleDrawer(false)} />
    </div>
  );
};

export default LandingPage;
