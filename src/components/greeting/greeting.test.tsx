import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Greeting from './greeting';

test('Page has greeting message', async () => {
  render(<Greeting />);
  const msg = await screen.getByText('Hello', { exact: false });
  expect(msg).toBeInTheDocument();
});
