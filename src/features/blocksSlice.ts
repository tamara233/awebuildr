import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Block = {
  id: string;
  type: 'text' | 'image';
  content: string;
};

type BlocksState = {
  blocks: Block[];
};

const initialState: BlocksState = {
  blocks: [],
};

const blocksSlice = createSlice({
  name: 'blocks',
  initialState,
  reducers: {
    addBlock(state, action: PayloadAction<Block>) {
      state.blocks.push(action.payload);
    },
    deleteBlock(state, action: PayloadAction<string>) {
      state.blocks = state.blocks.filter(
        (block) => block.id !== action.payload
      );
    },
    duplicateBlock(state, action: PayloadAction<string>) {
      const blockToDuplicate = state.blocks.find(
        (block) => block.id === action.payload
      );
      if (blockToDuplicate) {
        state.blocks.push({
          ...blockToDuplicate,
          id: `${blockToDuplicate.id}-copy`,
        });
      }
    },
    updateBlockContent(
      state,
      action: PayloadAction<{ id: string; content: string }>
    ) {
      const block = state.blocks.find(
        (block) => block.id === action.payload.id
      );
      if (block) {
        block.content = action.payload.content;
      }
    },
    reorderBlocks(state, action: PayloadAction<Block[]>) {
      state.blocks = action.payload;
    },
  },
});

export const {
  addBlock,
  deleteBlock,
  duplicateBlock,
  updateBlockContent,
  reorderBlocks,
} = blocksSlice.actions;

export default blocksSlice.reducer;
