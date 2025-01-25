import styles from './index.module.scss';
import { IconButton } from '@mui/material';
import {
  ArrowDownward,
  ArrowUpward,
  ContentCopy,
  DeleteOutline,
} from '@mui/icons-material';

type ToolbarProps = {
  index: number;
  onDuplicate: (index: number) => void;
  onDelete: (index: number) => void;
  onMoveUp: (index: number) => void;
  onMoveDown: (index: number) => void;
  count: number;
};
const Toolbar: React.FC<ToolbarProps> = ({
  index,
  onDuplicate,
  onDelete,
  onMoveUp,
  onMoveDown,
  count,
}) => {
  return (
    <div className={styles.toolbar}>
      <IconButton onClick={() => onDuplicate(index)}>
        <ContentCopy />
      </IconButton>
      <IconButton onClick={() => onDelete(index)}>
        <DeleteOutline />
      </IconButton>
      {count > index + 1 && (
        <IconButton onClick={() => onMoveDown(index)}>
          <ArrowDownward />
        </IconButton>
      )}
      {count > 1 && index > 0 && (
        <IconButton onClick={() => onMoveUp(index)}>
          <ArrowUpward />
        </IconButton>
      )}
    </div>
  );
};

export default Toolbar;
