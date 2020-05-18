import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import App from '.';

test.skip('renders the heading text correctly', () => {
  const { getByText } = render(<App />);
  const headingElement = getByText(/books/i);
  
  expect(headingElement).toBeInTheDocument();
});
