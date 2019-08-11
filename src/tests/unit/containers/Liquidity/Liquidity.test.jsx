import * as React from 'react';
import { Provider } from 'react-redux';
import { mount, shallow } from 'enzyme';
import configureStore from 'redux-mock-store';

import { initialState } from 'app/store/app/reducer';
import Liquidity, { LiquidityComponent } from 'app/containers/Liquidity/Liquidity';
import { coin1, coin2 } from 'tests/mocks/ticker';

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

  it('createData should return appropriate series object for chart.', () => {
    shallowWrapper.setProps({
      data: [coin1, coin2],
    });

    const data = shallowWrapper.instance().createData();

    expect(data[0]).toEqual({
      color: '#098952',
      name: coin1.name,
      symbol: coin1.symbol,
      x: coin1.quote.USD.market_cap,
      y: coin1.quote.USD.volume_24h,
      z: Math.abs(coin1.quote.USD.percent_change_24h),
    });

    expect(data[1]).toEqual({
      color: '#be2623',
      name: coin2.name,
      symbol: coin2.symbol,
      x: coin2.quote.USD.market_cap,
      y: coin2.quote.USD.volume_24h,
      z: Math.abs(coin2.quote.USD.percent_change_24h),
    });
  });
});
