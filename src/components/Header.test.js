import React from 'react';
import { shallow, mount } from 'enzyme';
import { Header } from './Header';
import renderer from 'react-test-renderer';

describe('HeaderComponent', () => {
  const wrapper = shallow(<Header />);

  it('should have brand title', () => {
    const tag = wrapper.find('nav a');
    const title = 'Contacts App';
    expect(tag.text()).toEqual(title);
  });

  it('should update the text on input', () => {
    const wrapper = mount(<Header />);
    const input = wrapper.find('form input');
    input.simulate('change', { target: { value: 'shubham' } });
    expect(input.instance().value).toBe('shubham');
  });

  test('snapshot renders', () => {
    const component = renderer.create(<Header />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
