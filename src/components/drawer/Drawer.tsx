import React from 'react';
import Drawer from '@mui/material/Drawer';
import styles from './index.module.scss';
import X from '@mui/icons-material/X';
import BlockList from '../block/BlockList';

type DrawerComponentProps = {
  open: boolean;
  onClose: () => void;
};

const DrawerComponent: React.FC<DrawerComponentProps> = ({ open, onClose }) => {
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
        <BlockList />
      </div>
    </Drawer>
  );
};

export default DrawerComponent;
