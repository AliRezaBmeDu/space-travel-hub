import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import RocketComponent from '../components/RocketComponent';

// Create a mock dataset
const rockets = [
  {
    description: 'The Falcon 1 was an expendable launch system.',
    flickrImages: ['https://imgur.com/DaCfMsj.jpg', 'https://imgur.com/azYafd8.jpg'],
    reserve: true,
    rocketId: 'falcon1',
    rocketName: 'Falcon 1',
  },
  {
    description: 'The Falcon 2 was an expendable launch system.',
    flickrImages: ['https://imgur.com/DaCfMsj.jpg', 'https://imgur.com/azYafd8.jpg'],
    reserve: true,
    rocketId: 'falcon2',
    rocketName: 'Falcon 2',
  },
];
  // Create a mock Redux store
const mockStore = configureMockStore();

describe('RocketComponent', () => {
  it('renders loading message when isLoading is true', () => {
    const initialState = { rockets: { rockets, isLoading: true } };
    const store = mockStore(initialState);
    // Render the component inside the Provider with the mock store
    render(
      <Provider store={store}>
        <RocketComponent />
      </Provider>,
    );
    const loadingMessage = screen.getByText('Loading...Rockets');
    expect(loadingMessage).toBeInTheDocument();
  });

  it('renders rockets when isLoading is false', () => {
    const initialState2 = { rockets: { rockets, isLoading: false } };
    const store = mockStore(initialState2);
    render(
      <Provider store={store}>
        <RocketComponent />
      </Provider>,
    );

    const rocketElements = screen.getAllByTestId('rocket');
    expect(rocketElements).toHaveLength(rockets.length);
  });
});
