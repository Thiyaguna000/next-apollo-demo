import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Home from '../pages/index';

afterEach(cleanup);

it('renders Home', () => {
    const tree = renderer
      .create(<Home />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('Home', () => {
    it('renders a heading', () => {
      render(<Home />)
  
      const heading = screen.getByRole('heading', {
        name: "Welcome",
      })
  
      expect(heading).toBeInTheDocument()
    })
  });

  it('Checking for Label renders in Home Component', () => {
    const {getByText} = render(
      <Home />,
    );
  
    expect(getByText("About")).toBeTruthy();
  });
