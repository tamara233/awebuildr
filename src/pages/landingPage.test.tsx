import { fireEvent, render, screen } from '@testing-library/react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import LandingPage from './LandingPage';

describe('LandingPage', () => {
  it('renders the LandingPage component', () => {
    render(
      <DndProvider backend={HTML5Backend}>
        <LandingPage />
      </DndProvider>
    );

    expect(screen.getByText(/Add your first block!/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Add/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Save/i })).toBeInTheDocument();
  });
});

describe('LandingPage Add Button', () => {
  it('opens the drawer when the Add button is clicked', () => {
    render(
      <DndProvider backend={HTML5Backend}>
        <LandingPage />
      </DndProvider>
    );
    const addButton = screen.getByRole('button', { name: /Add/i });
    expect(screen.queryByText(/Add Blocks/i)).not.toBeInTheDocument();
    fireEvent.click(addButton);
    expect(screen.getByText(/Add Blocks/i)).toBeInTheDocument();
  });
});
