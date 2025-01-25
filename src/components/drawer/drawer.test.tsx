import { render, screen } from '@testing-library/react';
import DrawerComponent from './Drawer';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

describe('DrawerComponent', () => {
  it('renders the drawer when open', () => {
    render(
      <DndProvider backend={HTML5Backend}>
        <DrawerComponent open={true} onClose={vi.fn()} />
      </DndProvider>
    );

    expect(screen.getByText(/Add Blocks/i)).toBeInTheDocument();
  });

  it('does not render the drawer when closed', () => {
    render(<DrawerComponent open={false} onClose={vi.fn()} />);

    expect(screen.queryByText(/Add Blocks/i)).not.toBeInTheDocument();
  });
});
