import React from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import styles from './index.module.scss';

interface DrawerComponentProps {
  open: boolean;
  onClose: () => void;
}

const DrawerComponent: React.FC<DrawerComponentProps> = ({ open, onClose }) => {
  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      className={styles.drawer}
    >
      <div style={{ width: 250, padding: 20 }}>
        <h5>Add Blocks</h5>
        <Button onClick={onClose}>Close</Button>
      </div>
    </Drawer>
  );
};

export default DrawerComponent;
