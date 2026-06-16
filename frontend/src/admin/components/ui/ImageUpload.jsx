import React, { useRef, useState } from 'react';
import { Upload, X, ImageIcon } from 'lucide-react';

const ImageUpload = ({ label, value, onChange, error, accept = 'image/*', className = '' }) => {
  const inputRef  = useRef(null);
  const [preview, setPreview] = useState(null);

  const handleFile = (file) => {
    if (!file) return;
    setPreview(URL.createObjectURL(file));
    onChange(file);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file) handleFile(file);
  };

  const handleClear = () => {
    setPreview(null);
    onChange(null);
    if (inputRef.current) inputRef.current.value = '';
  };

  const existingUrl = typeof value === 'string' ? value : null;
  const displaySrc  = preview || existingUrl;

  return (
    <div className={`w-full ${className}`}>
      {label && <label className="form-label">{label}</label>}
      <div
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        onClick={() => !displaySrc && inputRef.current?.click()}
        className={`relative border-2 border-dashed rounded-xl transition-all duration-200 overflow-hidden
          ${displaySrc ? 'border-brand-500/40 cursor-default' : 'border-surface-border hover:border-brand-500/60 cursor-pointer'}
          ${error ? 'border-red-500/60' : ''}`}
      >
        {displaySrc ? (
          <div className="relative group">
            <img src={displaySrc} alt="preview" className="w-full h-full object-fit" />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => inputRef.current?.click()}
                className="flex items-center gap-2 px-3 py-2 bg-brand-600 text-white rounded-lg text-sm font-medium hover:bg-brand-500 transition-colors"
              >
                <Upload className="w-4 h-4" /> Change
              </button>
              <button
                type="button"
                onClick={handleClear}
                className="flex items-center gap-2 px-3 py-2 bg-red-600/80 text-white rounded-lg text-sm font-medium hover:bg-red-600 transition-colors"
              >
                <X className="w-4 h-4" /> Remove
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-10 gap-2 text-center">
            <div className="w-12 h-12 rounded-xl bg-surface-card border border-surface-border flex items-center justify-center mb-1">
              <ImageIcon className="w-6 h-6 text-slate-500" />
            </div>
            <p className="text-sm font-medium text-slate-300">Drop image here or click to upload</p>
            <p className="text-xs text-slate-500">PNG, JPG, WEBP up to 10MB</p>
          </div>
        )}
      </div>
      <input
        ref={inputRef}
        type="file"
        accept={accept}
        className="hidden"
        onChange={(e) => handleFile(e.target.files?.[0])}
      />
      {error && <p className="form-error">{error}</p>}
    </div>
  );
};

export default ImageUpload;
