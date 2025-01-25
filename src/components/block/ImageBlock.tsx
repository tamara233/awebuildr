import { useDrag } from 'react-dnd';

import styles from './index.module.scss';
import { iImage } from '../../types/types';

type ImageBlockProps = {
  item: iImage;
};

const ImageBlock: React.FC<ImageBlockProps> = ({ item }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'IMAGE',
    item: { id: item.id, src: item.src, type: 'IMAGE' },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div ref={drag} key={item.id} style={{ opacity: isDragging ? 0.5 : 1 }}>
      <img className={styles.single} src={item.src} alt={item.id} />
    </div>
  );
};

export default ImageBlock;
