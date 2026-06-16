import React, { useState } from 'react';
import { useFAQList, useCreateFAQ, useUpdateFAQ, useDeleteFAQ } from '../../hooks/useFAQs';
import DataTable from '../../components/ui/DataTable';
import Button from '../../components/ui/Button';
import Modal from '../../components/ui/Modal';
import ConfirmDialog from '../../components/ui/ConfirmDialog';
import StatusBadge from '../../components/ui/StatusBadge';
import FAQForm from '../../components/forms/FAQForm';
import { Plus, Pencil, Trash2 } from 'lucide-react';
import { truncate, formatDate, getErrorMessage } from '../../utils/helpers';
import toast from 'react-hot-toast';

const FAQsPage = () => {
  const { data = [], isLoading } = useFAQList();
  const createMut = useCreateFAQ();
  const updateMut = useUpdateFAQ();
  const deleteMut = useDeleteFAQ();

  const [modal,    setModal]    = useState(null);
  const [selected, setSelected] = useState(null);
  const [deleting, setDeleting] = useState(null);
  const closeModal = () => { setModal(null); setSelected(null); };

  const handleSubmit = async (body) => {
    try {
      if (modal === 'edit') { await updateMut.mutateAsync({ id: selected._id, body }); toast.success('FAQ updated'); }
      else { await createMut.mutateAsync(body); toast.success('FAQ created'); }
      closeModal();
    } catch (err) { toast.error(getErrorMessage(err)); }
  };

  const handleDelete = async () => {
    try { await deleteMut.mutateAsync(deleting._id); toast.success('FAQ deleted'); setDeleting(null); }
    catch (err) { toast.error(getErrorMessage(err)); }
  };

  const columns = [
    { key: 'question',  header: 'Question',  accessor: 'question',  sortable: true, render: (r) => <span className="font-medium text-slate-100">{truncate(r.question, 70)}</span> },
    { key: 'category',  header: 'Category',  accessor: 'category' },
    { key: 'order',     header: 'Order',     accessor: 'order',     sortable: true },
    { key: 'published', header: 'Status',    render: (r) => <StatusBadge status={r.isPublished} /> },
    { key: 'actions', header: '', render: (r) => (
      <div className="flex items-center gap-2">
        <button className="btn-ghost" onClick={() => { setSelected(r); setModal('edit'); }}><Pencil className="w-4 h-4" /></button>
        <button className="btn-ghost text-red-400 hover:text-red-300 hover:bg-red-500/10" onClick={() => setDeleting(r)}><Trash2 className="w-4 h-4" /></button>
      </div>
    )},
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div><h2 className="page-title">FAQs</h2><p className="text-sm text-slate-400 mt-1">Manage frequently asked questions</p></div>
        <Button icon={Plus} onClick={() => { setSelected(null); setModal('create'); }}>New FAQ</Button>
      </div>
      <div className="card">
        <DataTable columns={columns} data={data} loading={isLoading} emptyTitle="No FAQs yet"
          emptyAction={<Button icon={Plus} size="sm" onClick={() => setModal('create')}>Add FAQ</Button>} />
      </div>
      <Modal isOpen={!!modal} onClose={closeModal} title={modal === 'edit' ? 'Edit FAQ' : 'New FAQ'} size="md">
        <FAQForm defaultValues={selected} onSubmit={handleSubmit} loading={createMut.isPending || updateMut.isPending} />
      </Modal>
      <ConfirmDialog isOpen={!!deleting} onClose={() => setDeleting(null)} onConfirm={handleDelete}
        title="Delete FAQ" description={`Delete this FAQ?`} loading={deleteMut.isPending} />
    </div>
  );
};

export default FAQsPage;
