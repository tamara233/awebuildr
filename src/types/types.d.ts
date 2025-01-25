export interface iImage {
  id: string;
  src: string;
  type: 'IMAGE';
}

export interface iTextItem {
  type: 'TEXT';
  content: string;
  id: string;
}

export type DraggedItem = iImage | iTextItem;
