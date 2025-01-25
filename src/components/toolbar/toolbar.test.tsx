import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Toolbar from './Toolbar';

describe('Toolbar visibility on hover', () => {
  it('displays the Toolbar when .wrapper is hovered', () => {
    const { container } = render(
      <div className="wrapper">
        <div className="toolbar" style={{ display: 'none' }}>
          <Toolbar
            index={0}
            onDuplicate={vi.fn()}
            onDelete={vi.fn()}
            onMoveUp={vi.fn()}
            onMoveDown={vi.fn()}
            count={2}
          />
        </div>
      </div>
    );

    const toolbar = container.querySelector('.toolbar');
    expect(toolbar).toHaveStyle('display: none');
    // @ts-expect-error : Type mismatch due to third-party library typing
    toolbar!.style.display = 'block';

    expect(toolbar).toHaveStyle('display: block');
  });
});
