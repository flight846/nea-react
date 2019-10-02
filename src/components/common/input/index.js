/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import './style.scss';

const Input = (props) => {
  const {
    onChange, className, name, id, type, label, placeholder, tag, value,
  } = props;

  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div className="form-group form-group--custom">
      {label && (
        <label htmlFor={id}>
          {label}
          {tag && <span>{tag}</span>}
        </label>
      )}
      <input
        {...props}
        name={name}
        id={id}
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
        className={`form-control ${className} ${value === '' ? 'form-error' : ''}`}
      />
    </div>
  );
};

Input.defaultProps = {
  onChange: () => {},
  className: '',
  name: '',
  id: '',
  type: 'text',
};

export default Input;
