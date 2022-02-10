// import {render, screen} from '@testing-library/react';
// import Card from './Card.js';

// test('should show login form', () => {
// //   render(<Card />)
// const inputNode1 = screen.getByLabelText('Location');
// })
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Card from './Card.js';

afterEach(cleanup);

const dummyData = [
    {
        name: 'name',
        location: 'location',
        webPages: 'webPages'
    }
]

// it('renders correctly', () => {
//     const tree = renderer
//       .create(<Card data={dummyData} />)
//       .toJSON();
//     expect(tree).toMatchSnapshot();
//   });

// dummy
test('two plus two is four', () => {
    expect(2 + 2).toBe(4);
  });

  it('CheckboxWithLabel changes the text after click', () => {
    const {queryByLabelText, getByLabelText} = render(
      <Card data={dummyData} />,
    );
  
    expect(queryByLabelText(/Location/i)).toBeTruthy();
  
    fireEvent.click(getByLabelText(/Website/i));
  });