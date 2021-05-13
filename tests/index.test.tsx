import React from 'react';
import { mount } from 'enzyme';
import Checkbox from '../src/checkbox';

describe('wc-checkbox', () => {
  describe('classname', () => {
    it('should has disabled class', () => {
      const wrapper = mount(<Checkbox prefixCls="wc-checkbox" disabled />);
      expect(
        wrapper.find('.wc-checkbox').hasClass('wc-checkbox--disabled')
      ).toEqual(true);
    });
    it('should has checked class', () => {
      const wrapper = mount(<Checkbox prefixCls="wc-checkbox" checked />);
      expect(
        wrapper.find('.wc-checkbox').hasClass('wc-checkbox-checked')
      ).toEqual(true);
    });
  });
  describe('onChange', () => {
    it('should call onChange', () => {
      const onChange = jest.fn();
      const wrapper = mount(
        <Checkbox prefixCls="wc-checkbox" onChange={onChange} />
      );
      wrapper.find('.wc-checkbox-input').simulate('change');
      expect(onChange).toHaveBeenCalled();
    });
  });
});
