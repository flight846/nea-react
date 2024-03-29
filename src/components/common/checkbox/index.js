import React from 'react';
import './style.scss';

const Checkbox = (props) => {
  const {
    onChange, name, id, label, children, checked, className,
  } = props;
  const handleChange = (e) => {
    onChange(e.target.checked);
  };
  return (
    <div className={`form-check form-check--custom ${className}`}>
      <input
        className="form-check-input"
        type="checkbox"
        checked={checked}
        id={id}
        name={name}
        onChange={handleChange}
      />
      <label className="form-check-label" htmlFor={id}>
        <svg
          className="icon"
          width="13"
          height="11"
          viewBox="0 0 13 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.15 6C0.05 5.9 0 5.75 0 5.65C0 5.55 0.05 5.4 0.15 5.3L0.85 4.6C1.05 4.4 1.35 4.4 1.55 4.6L1.6 4.65L4.35 7.6C4.45 7.7 4.6 7.7 4.7 7.6L11.4 0.65H11.45C11.65 0.45 11.95 0.45 12.15 0.65L12.85 1.35C13.05 1.55 13.05 1.85 12.85 2.05L4.85 10.35C4.75 10.45 4.65 10.5 4.5 10.5C4.35 10.5 4.25 10.45 4.15 10.35L0.25 6.15L0.15 6Z"
            fill="#0BA5D3"
          />
        </svg>

        {children}
      </label>
    </div>
  );
};

Checkbox.defaultProps = {
  onChange: () => {},
  className: '',
  name: '',
  id: '',
};

export default Checkbox;
