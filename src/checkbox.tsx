import classNames from 'classnames';
import React, { useState } from 'react';

export interface CheckboxProps
  extends Omit<
    React.HtmlHTMLAttributes<HTMLInputElement>,
    'onChange' | 'disabled'
  > {
  prefixCls?: string;
  className?: string;
  checked?: boolean;
  disabled?: boolean;
  defaultChecked?: boolean;
  onChange?: (
    checked: boolean,
    e: React.InputHTMLAttributes<HTMLInputElement>
  ) => void;
}

const Checkbox = React.forwardRef(
  (props: CheckboxProps, ref: React.Ref<HTMLInputElement>) => {
    const {
      prefixCls = 'wc-checkbox',
      checked,
      defaultChecked,
      disabled,
      onChange,
      ...others
    } = props;
    const [innerChecked, setInnerChecked] = useState(checked ?? defaultChecked);

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      if (disabled) {
        return;
      }
      if (!('checked' in props)) {
        setInnerChecked(e.target.checked);
      }
      onChange?.(e.target.checked, e);
    };

    return (
      <span
        className={classNames(prefixCls, {
          [`${prefixCls}-checked`]: innerChecked,
          [`${prefixCls}--disabled`]: disabled,
        })}
      >
        <input
          {...others}
          ref={ref}
          className={`${prefixCls}-input`}
          type="checkbox"
          onChange={handleChange}
          checked={!!innerChecked}
        />
        <span className={`${prefixCls}-inner`} />
      </span>
    );
  }
);

export default Checkbox;
