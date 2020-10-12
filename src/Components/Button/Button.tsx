import React from 'react';

// Types
import { ButtonProps } from './types';

const Button: React.FC<ButtonProps> = ({
  btnClass,
  text,
  value,
  disabled,
  callback,
  children
}) => {
  return (
    <button className={btnClass} value={value} disabled={disabled} onClick={callback}>
      {text ? text : children}
    </button>
  )
}

export default Button;
