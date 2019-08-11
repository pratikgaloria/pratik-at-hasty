import * as React from 'react';
import { Provider } from 'react-redux';
import { mount, shallow } from 'enzyme';
import configureStore from 'redux-mock-store';

import { initialState } from 'app/store/app/reducer';
import Liquidity, { LiquidityComponent } from 'app/containers/Liquidity/Liquidity';

describe('Liquidity component.', () => {
  const mockStore = configureStore();
  let store;
  let shallowWrapper;

  beforeAll(() => {
    store = mockStore({
      app: initialState,
    });

    shallowWrapper = shallow(
      <LiquidityComponent
        getTicker={jest.fn()}
        data={[]}
        limit={100}
      />,
    );
  });

  it('Should be rendered.', () => {
    const Component = props => <Liquidity {...props} />;

    const wrapper = mount(
      <Provider store={store}>
        <Component />
      </Provider>,
    );
    const component = wrapper.find(Liquidity);
    expect(component.length).toBe(1);
  });
});
