import * as React from 'react';
import { Provider } from 'react-redux';
import { mount, render, shallow } from 'enzyme';
import configureStore from 'redux-mock-store';

import { initialState } from 'app/store/app/reducer';
import Overview, { OverviewComponent } from 'app/containers/Overview/Overview';
import { coin1 as coin } from 'tests/mocks/ticker';

describe('Overview component.', () => {
  const mockStore = configureStore();
  let store;
  let shallowWrapper;

  beforeAll(() => {
    store = mockStore({
      app: initialState,
    });

    shallowWrapper = shallow(
      <OverviewComponent getTicker={jest.fn()} setLimit={jest.fn()} data={[]} limit={100} />,
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

  it('getColumns should returns appropriate set of columns.', () => {
    shallowWrapper.setProps({
      data: [coin],
    });

    const columns = shallowWrapper.instance().getColumns();

    expect(columns[0]).toMatchObject({ Header: 'Rank', accessor: 'cmc_rank' });
    expect(columns[1]).toMatchObject({ Header: 'Name', accessor: 'name' });

    expect(columns[2]).toMatchObject({ Header: 'Price' });
    expect(columns[2].accessor(coin)).toBe(coin.quote.USD.price);
    expect(render(columns[2].Cell({ value: coin.quote.USD.price })).text()).toBe('$11,379.82');

    expect(columns[3]).toMatchObject({ Header: 'Price Change (24h)' });
    expect(columns[3].accessor(coin)).toBe(coin.quote.USD.percent_change_24h);
    expect(render(columns[3].Cell({ value: coin.quote.USD.percent_change_24h })).text()).toBe('4.23%');

    expect(columns[4]).toMatchObject({ Header: 'Market Cap' });
    expect(columns[4].accessor(coin)).toBe(coin.quote.USD.market_cap);
    expect(render(columns[4].Cell({ value: coin.quote.USD.market_cap })).text()).toBe('$203,352,417,289.25');

    expect(columns[5]).toMatchObject({ Header: 'Volume' });
    expect(columns[5].accessor(coin)).toBe(coin.quote.USD.volume_24h);
    expect(render(columns[5].Cell({ value: coin.quote.USD.volume_24h })).text()).toBe('4,334,234,234');
  });
});
