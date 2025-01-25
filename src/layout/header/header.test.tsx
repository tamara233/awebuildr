import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from './Header';

describe('Header', () => {
  it('renders the title and subtitle', () => {
    render(<Header />);

    expect(screen.getByText('AweBuildr')).toBeInTheDocument();
    expect(screen.getByText('Making the world easy')).toBeInTheDocument();
  });

  it('renders the "LIVE" link with the correct href', () => {
    render(<Header />);

    const liveLink = screen.getByText('LIVE');

    expect(liveLink).toBeInTheDocument();
    expect(liveLink).toHaveAttribute('href', 'https://awebuildr.vercel.app/');
    expect(liveLink).toHaveAttribute('target', '_blank');
    expect(liveLink).toHaveAttribute('rel', 'noopener noreferrer');
  });
});
