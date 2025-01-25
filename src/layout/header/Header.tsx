import React from 'react';
import styles from './index.module.scss';
import { PlayArrow } from '@mui/icons-material';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div>
          <h1 className={styles.title}>AweBuildr</h1>
          <h2 className={styles.subtitle}>Making the world easy</h2>
        </div>
        <a
          href="https://awebuildr.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.preview}
        >
          LIVE <PlayArrow className="primary-color" />
        </a>
      </div>
    </header>
  );
};

export default Header;
// https://awebuildr.vercel.app/
