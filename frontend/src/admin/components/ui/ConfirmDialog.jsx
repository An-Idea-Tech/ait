import React from 'react';
import { AlertTriangle } from 'lucide-react';
import Modal from './Modal';
import Button from './Button';

const ConfirmDialog = ({ isOpen, onClose, onConfirm, title = 'Confirm Action', description, loading = false }) => (
  <Modal isOpen={isOpen} onClose={onClose} title={title} size="sm">
    <div className="flex flex-col items-center text-center gap-4">
      <div className="w-12 h-12 rounded-full bg-red-500/20 border border-red-500/30 flex items-center justify-center">
        <AlertTriangle className="w-6 h-6 text-red-400" />
      </div>
      <p className="text-sm text-slate-300">{description || 'Are you sure? This action cannot be undone.'}</p>
      <div className="flex gap-3 w-full">
        <Button variant="secondary" className="flex-1" onClick={onClose} disabled={loading}>Cancel</Button>
        <Button variant="danger" className="flex-1 !bg-red-600/80 !text-red-100 hover:!bg-red-600" onClick={onConfirm} loading={loading}>Delete</Button>
      </div>
    </div>
  </Modal>
);

export default ConfirmDialog;
