import React from 'react';
import { Loader2 } from 'lucide-react';
import { clsx } from 'clsx';

const variants = {
  primary:   'btn-primary',
  secondary: 'btn-secondary',
  danger:    'btn-danger',
  ghost:     'btn-ghost',
};

const sizes = {
  sm:  'px-3 py-1.5 text-xs',
  md:  '',
  lg:  'px-6 py-3 text-base',
  icon: 'p-2',
};

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  loading = false,
  icon: Icon,
  className = '',
  ...props
}) => (
  <button
    className={clsx(variants[variant], sizes[size], className)}
    disabled={loading || props.disabled}
    {...props}
  >
    {loading ? (
      <Loader2 className="w-4 h-4 animate-spin" />
    ) : Icon ? (
      <Icon className="w-4 h-4" />
    ) : null}
    {children}
  </button>
);

export default Button;
