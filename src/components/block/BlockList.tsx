import { IMAGES } from '../../constants/constants';
import ImageBlock from './ImageBlock';
import TextBlock from './TextBlock';

import styles from './index.module.scss';

const BlockList: React.FC = () => {
  return (
    <div className={styles.blocks}>
      <div className={styles.image}>
        <h5 className={styles.title}>Gallery</h5>
        <div className={styles.images}>
          {IMAGES.map((item) => {
            return <ImageBlock key={item.id} item={item} />;
          })}
        </div>
      </div>

      <h5 className={styles.title}>Text</h5>
      <TextBlock />
    </div>
  );
};

export default BlockList;
