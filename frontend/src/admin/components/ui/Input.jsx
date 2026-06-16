import React, { forwardRef } from 'react';

const Input = forwardRef(({ label, error, id, className = '', ...props }, ref) => (
  <div className="w-full">
    {label && <label htmlFor={id} className="form-label">{label}</label>}
    <input
      id={id}
      ref={ref}
      className={`form-input ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''} ${className}`}
      {...props}
    />
    {error && <p className="form-error">{error}</p>}
  </div>
));

Input.displayName = 'Input';
export default Input;
