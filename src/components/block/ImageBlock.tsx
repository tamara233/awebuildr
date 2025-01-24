import { useDrag } from 'react-dnd';

interface ImageBlockProps {
  item: {
    id: string;
    src: string;
  };
}

const ImageBlock: React.FC<ImageBlockProps> = ({ item }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'IMAGE',
    item: { id: item.id, src: item.src },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div ref={drag} key={item.id} style={{ opacity: isDragging ? 0.5 : 1 }}>
      <img height={100} width={200} src={item.src} alt={item.id} />
    </div>
  );
};

export default ImageBlock;
