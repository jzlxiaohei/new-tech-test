import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Dialog } from '../index';
import { useState } from 'react';

describe('Component Dialog', () => {
  test('ui', async () => {
    const closeFn = jest.fn();
    function InnerDialog() {
      const [visible, setVisible] = useState(true);
      return (
        <Dialog
          visible={visible}
          title="test-title"
          onClose={() => {
            setVisible(false);
            closeFn();
          }}
        >
          <div>test-content</div>
        </Dialog>
      );
    }
    const { getByText, baseElement } = render(<InnerDialog />);
    expect(getByText('test-title')).toBeInTheDocument();
    expect(getByText('test-content')).toBeInTheDocument();
    expect(closeFn).toBeCalledTimes(0);
    const wrapDom = baseElement.querySelector('.rc-dialog-wrap');

    fireEvent.click(wrapDom);
    expect(wrapDom).not.toBeVisible();
    expect(closeFn).toBeCalledTimes(1);
  });
});
