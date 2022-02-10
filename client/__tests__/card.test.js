import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Card from '../components/Card/Card';

afterEach(cleanup);

const dummyData = [
    {
        name: 'name',
        location: 'location',
        webPages: 'webPages'
    }
]

it('renders card', () => {
    const tree = renderer
      .create(<Card data={dummyData} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Checking for Label renders in Card Component', () => {
    const {getByText} = render(
      <Card data={dummyData} />,
    );
  
    expect(getByText("Website:")).toBeTruthy();
    expect(getByText("Location:")).toBeTruthy();
  });

