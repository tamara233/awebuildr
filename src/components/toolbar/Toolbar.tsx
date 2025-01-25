import { useDispatch } from 'react-redux';
import { addBlock } from '../../features/blocksSlice';
import { nanoid } from 'nanoid';
import styles from './index.module.scss';

const Toolbar = () => {
  const dispatch = useDispatch();

  const handleAddTextBlock = () => {
    dispatch(addBlock({ id: nanoid(), type: 'text', content: '' }));
  };

  const handleAddImageBlock = () => {
    dispatch(
      addBlock({ id: nanoid(), type: 'image', content: 'default-image-url' })
    );
  };

  return (
    <div className={styles.toolbar}>
      <button onClick={handleAddTextBlock}>Add Text Block</button>
      <button onClick={handleAddImageBlock}>Add Image Block</button>
    </div>
  );
};

export default Toolbar;
