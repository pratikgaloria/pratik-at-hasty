import * as React from 'react';
import { Provider } from 'react-redux';
import { mount, shallow } from 'enzyme';
import configureStore from 'redux-mock-store';

import { initialState } from 'app/store/app/reducer';
import Topbar, { TopbarComponent } from 'app/containers/Topbar/Topbar';

describe('Topbar component.', () => {
  const mockStore = configureStore();
  let store;
  let shallowWrapper;

  beforeAll(() => {
    store = mockStore({
      app: initialState,
    });

    shallowWrapper = shallow(
      <TopbarComponent
        limit={100}
        setLimit={jest.fn()}
        title=""
      />,
    );
  });

  it('Should be rendered.', () => {
    const Component = props => <Topbar {...props} />;

    const wrapper = mount(
      <Provider store={store}>
        <Component />
      </Provider>,
    );
    const component = wrapper.find(Topbar);
    expect(component.length).toBe(1);
  });

  it('Should call setLimit prop with selected limit on change of dropdown.', () => {
    const mockSetLimit = jest.fn();

    shallowWrapper.setProps({
      setLimit: mockSetLimit,
    });

    const limitDropdown = shallowWrapper.find('[data-component="set-limit"]');
    limitDropdown.simulate('change', { target: { value: 10 } });

    expect(mockSetLimit.mock.calls.length).toBe(1);
    expect(mockSetLimit.mock.calls[0][0]).toEqual(10);
  });
});
