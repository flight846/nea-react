/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import './style.scss';

const Button = (props) => {
  const {
    onClick, className, children, data, data1, type,
  } = props;
  const handleClick = () => {
    onClick(data, data1);
  };
  return (
    <button
      {...props}
      type="button"
      onClick={handleClick}
      className={`steenify__btn steenify__btn__${type} ${className}`}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  onClick: () => {},
  className: '',
  data: '',
  data1: '',
};

export default Button;
