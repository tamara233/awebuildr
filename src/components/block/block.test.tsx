import { render, screen } from '@testing-library/react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import TextBlock from './TextBlock';

describe('TextBlock', () => {
  it('renders the TextBlock component', () => {
    render(
      <DndProvider backend={HTML5Backend}>
        <TextBlock />
      </DndProvider>
    );

    expect(screen.getByText(/Editable text field/i)).toBeInTheDocument();
  });
});

describe('ImageBlock', () => {
  it('renders an image', () => {
    const mockImageItem = {
      src: 'https://placeholder.com/1',
      id: 'mock-image-id',
    };

    render(<img src={mockImageItem.src} alt={mockImageItem.id} />);

    const image = screen.getByRole('img');
    expect(image).toBeInTheDocument();
  });
});
