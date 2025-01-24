import React, { useState } from 'react';
import styles from './index.module.scss';
import PlusButton from '../components/UI/plusButton/PlusButton';
import DrawerComponent from '../components/drawer/Drawer';

const LandingPage: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => {
    setDrawerOpen(open);
  };

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.blocks}>Blocks</div>

        <div className={styles.plus}>
          <PlusButton onClick={() => toggleDrawer(true)} />
        </div>
      </div>

      <DrawerComponent open={drawerOpen} onClose={() => toggleDrawer(false)} />
    </div>
  );
};

export default LandingPage;
