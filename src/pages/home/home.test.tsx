import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import Home from './home';

test('Increment Check', async () => {
  render(<Home />);
  const button = await screen.getByRole('button');
  userEvent.click(button);
  await waitFor(() => {
    expect(button).toHaveTextContent('1');
  });
});
