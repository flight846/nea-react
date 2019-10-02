import React from 'react';
import './style.scss';

const Select = (props) => {
  const {
    onChange, className, name, id, label, children, tag, value,
  } = props;
  const handleChange = (e) => {
    onChange(e.target.value);
  };
  return (
    <div className="form-group--custom form-group">
      {label && (
        <label htmlFor={id}>
          {label}
          {tag && <span>{tag}</span>}
        </label>
      )}
      <select
        className={`form-control form-control--select ${className}`}
        id={id}
        name={name}
        value={value}
        onChange={handleChange}
      >
        {children}
      </select>
    </div>
  );
};

Select.defaultProps = {
  onChange: () => {},
  className: '',
  name: '',
  id: '',
  type: 'text',
};

export default Select;
