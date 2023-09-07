import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import MissionsComponent from '../components/MissionsComponent';

// Create a mock dataset
const missions = [
  {
    description: 'The Falcon 1 was an expendable launch system.',
    name: 'mission1',
  },
  {
    description: 'The Falcon 2 was an expendable launch system.',
    name: 'mission2',
  },
];
  // Create a mock Redux store
const mockStore = configureMockStore();

describe('RocketComponent', () => {
  it('renders the missions properly', () => {
    const initialState = { missions: { missions, loading: false, error: '' } };
    const store = mockStore(initialState);
    render(
      <Provider store={store}>
        <MissionsComponent />
      </Provider>,
    );

    const missionElements = screen.getAllByTestId('mission');
    expect(missionElements).toHaveLength(missions.length);
  });
});
