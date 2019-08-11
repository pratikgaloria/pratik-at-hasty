import * as React from 'react';
import { Provider } from 'react-redux';
import { mount, shallow } from 'enzyme';
import configureStore from 'redux-mock-store';

import { initialState } from 'app/store/app/reducer';
import Overview, { OverviewComponent } from 'app/containers/Overview/Overview';

describe('Overview component.', () => {
  const mockStore = configureStore();
  let store;
  let shallowWrapper;

  beforeAll(() => {
    store = mockStore({
      app: initialState,
    });

    shallowWrapper = shallow(
      <OverviewComponent
        getTicker={jest.fn()}
        setLimit={jest.fn()}
        data={[]}
        limit={100}
      />,
    );
  });

  it('Should be rendered.', () => {
    const Component = props => <Overview {...props} />;

    const wrapper = mount(
      <Provider store={store}>
        <Component />
      </Provider>,
    );
    const component = wrapper.find(Overview);
    expect(component.length).toBe(1);
  });
});
