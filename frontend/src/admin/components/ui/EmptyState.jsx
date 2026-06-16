import React from 'react';
import { Inbox } from 'lucide-react';

const EmptyState = ({ title = 'No records found', description = 'Start by creating a new entry.', action }) => (
  <div className="flex flex-col items-center justify-center py-16 text-center">
    <div className="w-16 h-16 rounded-2xl bg-surface-card border border-surface-border flex items-center justify-center mb-4">
      <Inbox className="w-8 h-8 text-slate-500" />
    </div>
    <h3 className="text-base font-semibold text-slate-300 mb-1">{title}</h3>
    <p className="text-sm text-slate-500 mb-6 max-w-xs">{description}</p>
    {action}
  </div>
);

export default EmptyState;
