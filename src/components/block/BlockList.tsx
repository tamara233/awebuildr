import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

const BlockList = () => {
  const { blocks } = useSelector((state: RootState) => state.blocks);

  return (
    <div>
      {blocks.map((block) => (
        <div key={block.id}>
          {block.type === 'text' ? (
            <input type="text" value={block.content} readOnly />
          ) : (
            <img src={block.content} alt="Block content" />
          )}
        </div>
      ))}
    </div>
  );
};

export default BlockList;
