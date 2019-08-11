import * as React from 'react';
import { mount } from 'enzyme';

import NumberFormatter from 'app/components/NumberFormatter/NumberFormatter';

describe('NumberFormatter component.', () => {
  it('Should be rendered.', () => {
    const Component = props => <NumberFormatter {...props} />;

    const wrapper = mount(<Component />);
    const component = wrapper.find(NumberFormatter);
    expect(component.length).toBe(1);
  });
});
