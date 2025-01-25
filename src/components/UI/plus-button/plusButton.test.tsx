import { render, screen, fireEvent } from '@testing-library/react';
import PlusButton from './PlusButton';

describe('PlusButton', () => {
  it('renders the PlusButton component', () => {
    render(<PlusButton onClick={vi.fn()} />);

    // Check if the "+" is rendered
    expect(screen.getByText('+')).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const handleClick = vi.fn();

    render(<PlusButton onClick={handleClick} />);
    const plusButton = screen.getByText('+');
    fireEvent.click(plusButton);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
