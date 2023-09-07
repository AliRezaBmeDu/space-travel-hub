import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import MissionsComponent from '../components/MissionsComponent';
import RocketComponent from '../components/RocketComponent';

test('Snapshot component rendering test', () => {
  const tree = render(
    <Provider store={store}>
      <BrowserRouter>
        <MissionsComponent />
        <RocketComponent />
      </BrowserRouter>
    </Provider>,
  );

  expect(tree).toMatchSnapshot();
});
