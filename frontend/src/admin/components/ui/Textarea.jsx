import React, { forwardRef } from 'react';

const Textarea = forwardRef(({ label, error, id, rows = 4, className = '', ...props }, ref) => (
  <div className="w-full">
    {label && <label htmlFor={id} className="form-label">{label}</label>}
    <textarea
      id={id}
      ref={ref}
      rows={rows}
      className={`form-input resize-none ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''} ${className}`}
      {...props}
    />
    {error && <p className="form-error">{error}</p>}
  </div>
));

Textarea.displayName = 'Textarea';
export default Textarea;
