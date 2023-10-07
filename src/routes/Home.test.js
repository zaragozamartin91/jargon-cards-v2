import { render, screen } from '@testing-library/react';
import { HashRouter as Router } from 'react-router-dom';
import Home from './Home';

test('renders learn react link', () => {
  // Wrapping the component between Router elements is required since the Home element uses Link components
  /* See https://stackoverflow.com/questions/75728532/uncaught-typeerror-cannot-destructure-property-basename-of-react2-usecontext for more info */
  render(<Router><Home /></Router>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
