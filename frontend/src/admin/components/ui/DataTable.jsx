import React, { useState } from 'react';
import { Search, ChevronUp, ChevronDown } from 'lucide-react';
import EmptyState from './EmptyState';
import LoadingSpinner from './LoadingSpinner';

const DataTable = ({
  columns,
  data = [],
  loading = false,
  searchable = true,
  emptyTitle,
  emptyDescription,
  emptyAction,
  keyField = '_id',
}) => {
  const [search, setSearch]       = useState('');
  const [sortKey, setSortKey]     = useState(null);
  const [sortDir, setSortDir]     = useState('asc');

  const filtered = data.filter((row) => {
    if (!search) return true;
    return columns.some((col) => {
      if (!col.searchable && col.searchable !== undefined) return false;
      const val = col.accessor ? row[col.accessor] : '';
      return String(val ?? '').toLowerCase().includes(search.toLowerCase());
    });
  });

  const sorted = [...filtered].sort((a, b) => {
    if (!sortKey) return 0;
    const va = a[sortKey] ?? '';
    const vb = b[sortKey] ?? '';
    const cmp = String(va).localeCompare(String(vb), undefined, { numeric: true });
    return sortDir === 'asc' ? cmp : -cmp;
  });

  const handleSort = (key) => {
    if (!key) return;
    if (sortKey === key) setSortDir((d) => (d === 'asc' ? 'desc' : 'asc'));
    else { setSortKey(key); setSortDir('asc'); }
  };

  return (
    <div className="flex flex-col gap-4">
      {searchable && (
        <div className="relative max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
          <input
            className="form-input pl-9"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      )}

      <div className="overflow-x-auto rounded-xl border border-surface-border">
        <table className="w-full min-w-full">
          <thead>
            <tr className="bg-surface border-b border-surface-border">
              {columns.map((col) => (
                <th
                  key={col.key}
                  className={`table-header ${col.sortable ? 'cursor-pointer select-none hover:text-slate-200' : ''}`}
                  onClick={() => col.sortable && handleSort(col.accessor ?? col.key)}
                >
                  <span className="flex items-center gap-1">
                    {col.header}
                    {col.sortable && sortKey === (col.accessor ?? col.key) && (
                      sortDir === 'asc' ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />
                    )}
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-surface-border">
            {loading ? (
              <tr>
                <td colSpan={columns.length} className="py-16">
                  <LoadingSpinner className="justify-center" size="lg" />
                </td>
              </tr>
            ) : sorted.length === 0 ? (
              <tr>
                <td colSpan={columns.length}>
                  <EmptyState title={emptyTitle} description={emptyDescription} action={emptyAction} />
                </td>
              </tr>
            ) : (
              sorted.map((row) => (
                <tr key={row[keyField] ?? Math.random()} className="table-row">
                  {columns.map((col) => (
                    <td key={col.key} className="table-cell">
                      {col.render ? col.render(row) : (col.accessor ? row[col.accessor] : null)}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {sorted.length > 0 && (
        <p className="text-xs text-slate-500">
          Showing {sorted.length} of {data.length} record{data.length !== 1 ? 's' : ''}
        </p>
      )}
    </div>
  );
};

export default DataTable;
