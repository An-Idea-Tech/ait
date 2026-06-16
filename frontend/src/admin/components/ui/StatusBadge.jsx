import React from 'react';
import { STATUS_COLORS } from '../../utils/helpers';

const StatusBadge = ({ status, label }) => {
  const key = typeof status === 'boolean' ? String(status) : status;
  const colors = STATUS_COLORS[key] || 'bg-slate-500/20 text-slate-400 border-slate-500/30';
  const displayLabel = label ?? (typeof status === 'boolean' ? (status ? 'Published' : 'Draft') : status);

  return (
    <span className={`badge border capitalize ${colors}`}>
      <span className="w-1.5 h-1.5 rounded-full bg-current opacity-70" />
      {displayLabel}
    </span>
  );
};

export default StatusBadge;
