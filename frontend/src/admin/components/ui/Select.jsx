import React, { forwardRef } from 'react';

const Select = forwardRef(({ label, error, id, options = [], className = '', placeholder, ...props }, ref) => (
  <div className="w-full">
    {label && <label htmlFor={id} className="form-label">{label}</label>}
    <select
      id={id}
      ref={ref}
      className={`form-input ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''} ${className}`}
      {...props}
    >
      {placeholder && <option value="">{placeholder}</option>}
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>{opt.label}</option>
      ))}
    </select>
    {error && <p className="form-error">{error}</p>}
  </div>
));

Select.displayName = 'Select';
export default Select;
