import React, { useState } from 'react';
import { useTestimonialList, useCreateTestimonial, useUpdateTestimonial, useDeleteTestimonial } from '../../hooks/useTestimonials';
import DataTable from '../../components/ui/DataTable';
import Button from '../../components/ui/Button';
import Modal from '../../components/ui/Modal';
import ConfirmDialog from '../../components/ui/ConfirmDialog';
import StatusBadge from '../../components/ui/StatusBadge';
import TestimonialForm from '../../components/forms/TestimonialForm';
import { Plus, Pencil, Trash2, Star } from 'lucide-react';
import { truncate, formatDate, getErrorMessage } from '../../utils/helpers';
import toast from 'react-hot-toast';

const TestimonialsPage = () => {
  const { data = [], isLoading } = useTestimonialList();
  const createMut = useCreateTestimonial();
  const updateMut = useUpdateTestimonial();
  const deleteMut = useDeleteTestimonial();

  const [modal,    setModal]    = useState(null);
  const [selected, setSelected] = useState(null);
  const [deleting, setDeleting] = useState(null);
  const closeModal = () => { setModal(null); setSelected(null); };

  const handleSubmit = async (fd) => {
    try {
      if (modal === 'edit') { await updateMut.mutateAsync({ id: selected._id, fd }); toast.success('Testimonial updated'); }
      else { await createMut.mutateAsync(fd); toast.success('Testimonial created'); }
      closeModal();
    } catch (err) { toast.error(getErrorMessage(err)); }
  };

  const handleDelete = async () => {
    try { await deleteMut.mutateAsync(deleting._id); toast.success('Testimonial deleted'); setDeleting(null); }
    catch (err) { toast.error(getErrorMessage(err)); }
  };

  const columns = [
    { key: 'avatar', header: '', render: (r) => r.avatar?.url
      ? <img src={r.avatar.url} alt={r.name} className="w-8 h-8 rounded-full object-cover border border-surface-border" />
      : <div className="w-8 h-8 rounded-full bg-brand-600/30 border border-brand-500/30 flex items-center justify-center text-xs font-bold text-brand-300">{r.name?.[0]}</div>
    },
    { key: 'name',      header: 'Name',       accessor: 'name',    sortable: true, render: (r) => <span className="font-medium text-slate-100">{r.name}</span> },
    { key: 'company',   header: 'Company',    accessor: 'company' },
    { key: 'rating',    header: 'Rating',     render: (r) => (
      <div className="flex gap-0.5">
        {[1,2,3,4,5].map(i => <Star key={i} className={`w-3 h-3 ${i <= r.rating ? 'text-yellow-400 fill-yellow-400' : 'text-slate-600'}`} />)}
      </div>
    )},
    { key: 'text',      header: 'Testimonial', render: (r) => truncate(r.testimonial, 50) },
    { key: 'published', header: 'Status',      render: (r) => <StatusBadge status={r.isPublished} /> },
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
        <div><h2 className="page-title">Testimonials</h2><p className="text-sm text-slate-400 mt-1">Manage client reviews</p></div>
        <Button icon={Plus} onClick={() => { setSelected(null); setModal('create'); }}>New Testimonial</Button>
      </div>
      <div className="card">
        <DataTable columns={columns} data={data} loading={isLoading} emptyTitle="No testimonials yet"
          emptyAction={<Button icon={Plus} size="sm" onClick={() => setModal('create')}>Add Testimonial</Button>} />
      </div>
      <Modal isOpen={!!modal} onClose={closeModal} title={modal === 'edit' ? 'Edit Testimonial' : 'New Testimonial'} size="lg">
        <TestimonialForm defaultValues={selected} onSubmit={handleSubmit} loading={createMut.isPending || updateMut.isPending} />
      </Modal>
      <ConfirmDialog isOpen={!!deleting} onClose={() => setDeleting(null)} onConfirm={handleDelete}
        title="Delete Testimonial" description={`Delete review by "${deleting?.name}"?`} loading={deleteMut.isPending} />
    </div>
  );
};

export default TestimonialsPage;
