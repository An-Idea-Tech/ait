import React from 'react';
import { useServiceList, useCreateService, useUpdateService, useDeleteService } from '../../hooks/useServices';
import DataTable from '../../components/ui/DataTable';
import Button from '../../components/ui/Button';
import Modal from '../../components/ui/Modal';
import ConfirmDialog from '../../components/ui/ConfirmDialog';
import StatusBadge from '../../components/ui/StatusBadge';
import ServiceForm from '../../components/forms/ServiceForm';
import { Plus, Pencil, Trash2, ImageIcon } from 'lucide-react';
import { truncate, formatDate, getErrorMessage } from '../../utils/helpers';
import { useState } from 'react';
import toast from 'react-hot-toast';

const ServicesPage = () => {
  const { data = [], isLoading } = useServiceList();
  const createMut  = useCreateService();
  const updateMut  = useUpdateService();
  const deleteMut  = useDeleteService();

  const [modal,   setModal]   = useState(null);  // null | 'create' | 'edit'
  const [selected, setSelected] = useState(null);
  const [deleting, setDeleting] = useState(null);

  const openEdit   = (row) => { setSelected(row); setModal('edit'); };
  const openCreate = ()    => { setSelected(null); setModal('create'); };
  const closeModal = ()    => { setModal(null); setSelected(null); };

  const handleSubmit = async (fd) => {
    try {
      if (modal === 'edit') {
        await updateMut.mutateAsync({ id: selected._id, fd });
        toast.success('Service updated');
      } else {
        await createMut.mutateAsync(fd);
        toast.success('Service created');
      }
      closeModal();
    } catch (err) { toast.error(getErrorMessage(err)); }
  };

  const handleDelete = async () => {
    try {
      await deleteMut.mutateAsync(deleting._id);
      toast.success('Service deleted');
      setDeleting(null);
    } catch (err) { toast.error(getErrorMessage(err)); }
  };

  const columns = [
    { key: 'image', header: 'Image', render: (r) => r.image?.url
      ? <img src={r.image.url} alt={r.title} className="w-10 h-10 rounded-lg object-cover border border-surface-border" />
      : <div className="w-10 h-10 rounded-lg bg-surface border border-surface-border flex items-center justify-center"><ImageIcon className="w-4 h-4 text-slate-500" /></div>
    },
    { key: 'title',       header: 'Title',       accessor: 'title',      sortable: true, render: (r) => <span className="font-medium text-slate-100">{r.title}</span> },
    { key: 'short',       header: 'Description', render: (r) => truncate(r.shortDescription, 60) },
    { key: 'order',       header: 'Order',       accessor: 'order',      sortable: true },
    { key: 'published',   header: 'Status',      render: (r) => <StatusBadge status={r.isPublished} /> },
    { key: 'createdAt',   header: 'Created',     render: (r) => formatDate(r.createdAt) },
    {
      key: 'actions', header: '', render: (r) => (
        <div className="flex items-center gap-2">
          <button className="btn-ghost" onClick={() => openEdit(r)}><Pencil className="w-4 h-4" /></button>
          <button className="btn-ghost text-red-400 hover:text-red-300 hover:bg-red-500/10" onClick={() => setDeleting(r)}><Trash2 className="w-4 h-4" /></button>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="page-title">Services</h2>
          <p className="text-sm text-slate-400 mt-1">Manage your service offerings</p>
        </div>
        <Button icon={Plus} onClick={openCreate}>New Service</Button>
      </div>

      <div className="card">
        <DataTable
          columns={columns}
          data={data}
          loading={isLoading}
          emptyTitle="No services yet"
          emptyDescription="Add your first service to get started."
          emptyAction={<Button icon={Plus} size="sm" onClick={openCreate}>Add Service</Button>}
        />
      </div>

      <Modal isOpen={!!modal} onClose={closeModal} title={modal === 'edit' ? 'Edit Service' : 'New Service'} size="lg">
        <ServiceForm
          defaultValues={selected}
          onSubmit={handleSubmit}
          loading={createMut.isPending || updateMut.isPending}
        />
      </Modal>

      <ConfirmDialog
        isOpen={!!deleting}
        onClose={() => setDeleting(null)}
        onConfirm={handleDelete}
        title="Delete Service"
        description={`Delete "${deleting?.title}"? This action cannot be undone.`}
        loading={deleteMut.isPending}
      />
    </div>
  );
};

export default ServicesPage;
