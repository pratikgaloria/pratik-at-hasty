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

  it('createData should return appropriate series object for chart.', () => {
    const coin1 = {
      id: 1,
      cmc_rank: 1,
      name: 'Bitcoin',
      symbol: 'BTC',
      quote: {
        USD: {
          price: 11379.82,
          market_cap: 203352417289.25,
          percent_change_24h: 4.2324,
          volume_24h: 4334234234,
        },
      },
    };
    const coin2 = {
      id: 2,
      cmc_rank: 2,
      name: 'Etherium',
      symbol: 'ETH',
      quote: {
        USD: {
          price: 2379.82,
          market_cap: 34552417289.25,
          percent_change_24h: -2.123,
          volume_24h: 344234234,
        },
      },
    };

    shallowWrapper.setProps({
      data: [coin1, coin2],
    });

    const data = shallowWrapper.instance().createData();

    expect(data[0]).toEqual({
      color: '#098952',
      name: 'Bitcoin',
      symbol: 'BTC',
      x: 203352417289.25,
      y: 4334234234,
      z: 4.2324,
    });

    expect(data[1]).toEqual({
      color: '#be2623',
      name: 'Etherium',
      symbol: 'ETH',
      x: 34552417289.25,
      y: 344234234,
      z: 2.123,
    });
  });
});
