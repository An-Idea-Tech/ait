import React, { useState, useRef } from 'react';
import { X, Plus } from 'lucide-react';

/**
 * TagInput — manages an array of string values.
 * Press Enter or comma to add a tag.
 */
const TagInput = ({ label, value = [], onChange, placeholder = 'Type and press Enter...', error }) => {
  const [inputVal, setInputVal] = useState('');
  const inputRef = useRef(null);

  const addTag = (raw) => {
    const tag = raw.trim();
    if (!tag || value.includes(tag)) return;
    onChange([...value, tag]);
    setInputVal('');
  };

  const removeTag = (tag) => onChange(value.filter((t) => t !== tag));

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault();
      addTag(inputVal);
    } else if (e.key === 'Backspace' && !inputVal && value.length) {
      removeTag(value[value.length - 1]);
    }
  };

  return (
    <div>
      {label && <label className="form-label">{label}</label>}
      <div
        className={`flex flex-wrap gap-1.5 p-2 min-h-[42px] bg-surface border rounded-lg cursor-text transition-all duration-200 focus-within:border-brand-500 focus-within:ring-1 focus-within:ring-brand-500
          ${error ? 'border-red-500' : 'border-surface-border'}`}
        onClick={() => inputRef.current?.focus()}
      >
        {value.map((tag) => (
          <span key={tag} className="inline-flex items-center gap-1 px-2 py-0.5 bg-brand-600/20 border border-brand-500/30 text-brand-300 rounded-md text-xs font-medium">
            {tag}
            <button type="button" onClick={() => removeTag(tag)} className="hover:text-brand-100">
              <X className="w-3 h-3" />
            </button>
          </span>
        ))}
        <input
          ref={inputRef}
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          onKeyDown={handleKeyDown}
          onBlur={() => addTag(inputVal)}
          placeholder={value.length === 0 ? placeholder : ''}
          className="flex-1 min-w-[120px] bg-transparent text-sm text-slate-100 placeholder-slate-500 outline-none"
        />
      </div>
      {error && <p className="form-error">{error}</p>}
      <p className="text-xs text-slate-500 mt-1">Press Enter or comma to add a tag</p>
    </div>
  );
};

export default TagInput;
