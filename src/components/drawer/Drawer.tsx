import React from 'react';
import Drawer from '@mui/material/Drawer';
import styles from './index.module.scss';
import X from '@mui/icons-material/X';
import image1 from '../../assets/images/image1.jpg';
import image2 from '../../assets/images/image2.jpg';
import image3 from '../../assets/images/image3.jpg';
import image4 from '../../assets/images/image4.jpg';
import ImageBlock from '../block/ImageBlock';

interface DrawerComponentProps {
  open: boolean;
  onClose: () => void;
}

const DrawerComponent: React.FC<DrawerComponentProps> = ({ open, onClose }) => {
  const items = [
    { id: 'image1', src: image1 },
    { id: 'image2', src: image2 },
    { id: 'image3', src: image3 },
    { id: 'image4', src: image4 },
  ];

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      className={styles.drawer}
      ModalProps={{
        BackdropProps: {
          style: { display: 'none' },
        },
      }}
    >
      <div className={styles.container}>
        <div className={styles.title}>
          <h5>Add Blocks</h5>
          <X sx={{ cursor: 'pointer' }} onClick={onClose} />
        </div>

        {items.map((item) => {
          return <ImageBlock item={item} />;
        })}
      </div>
    </Drawer>
  );
};

export default DrawerComponent;
