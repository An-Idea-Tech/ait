import { format, formatDistanceToNow, parseISO, isValid } from 'date-fns';

/**
 * Format an ISO date string to a readable date
 */
export const formatDate = (dateStr, fmt = 'MMM d, yyyy') => {
  if (!dateStr) return '—';
  try {
    const date = typeof dateStr === 'string' ? parseISO(dateStr) : dateStr;
    return isValid(date) ? format(date, fmt) : '—';
  } catch {
    return '—';
  }
};

/**
 * Format relative time (e.g. "3 days ago")
 */
export const timeAgo = (dateStr) => {
  if (!dateStr) return '—';
  try {
    const date = typeof dateStr === 'string' ? parseISO(dateStr) : dateStr;
    return isValid(date) ? formatDistanceToNow(date, { addSuffix: true }) : '—';
  } catch {
    return '—';
  }
};

/**
 * Truncate text to a max length
 */
export const truncate = (str, max = 60) => {
  if (!str) return '';
  return str.length > max ? str.slice(0, max) + '…' : str;
};

/**
 * Convert an array of strings to comma-separated list
 */
export const arrayToList = (arr = []) => arr.join(', ') || '—';

/**
 * Return error message string from axios error
 */
export const getErrorMessage = (err) => {
  return (
    err?.response?.data?.message ||
    err?.response?.data?.error ||
    err?.message ||
    'Something went wrong'
  );
};

/**
 * Build a FormData object from a plain object, including file fields
 */
export const buildFormData = (data) => {
  const fd = new FormData();
  Object.entries(data).forEach(([key, value]) => {
    if (value === undefined || value === null) return;
    if (value instanceof File) {
      fd.append(key, value);
    } else if (Array.isArray(value)) {
      value.forEach((v) => fd.append(key, v));
    } else {
      fd.append(key, value);
    }
  });
  return fd;
};

/**
 * Status colour map for badges
 */
export const STATUS_COLORS = {
  // Contact statuses
  new:          'bg-blue-500/20 text-blue-400 border-blue-500/30',
  contacted:    'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
  'in-progress':'bg-purple-500/20 text-purple-400 border-purple-500/30',
  closed:       'bg-slate-500/20 text-slate-400 border-slate-500/30',
  // Application statuses
  pending:      'bg-blue-500/20 text-blue-400 border-blue-500/30',
  reviewing:    'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
  shortlisted:  'bg-green-500/20 text-green-400 border-green-500/30',
  rejected:     'bg-red-500/20 text-red-400 border-red-500/30',
  hired:        'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
  // Generic
  true:         'bg-green-500/20 text-green-400 border-green-500/30',
  false:        'bg-slate-500/20 text-slate-400 border-slate-500/30',
  published:    'bg-green-500/20 text-green-400 border-green-500/30',
  draft:        'bg-slate-500/20 text-slate-400 border-slate-500/30',
};
