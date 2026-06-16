import React, { useState } from 'react';
import { useClientList, useCreateClient, useUpdateClient, useDeleteClient } from '../../hooks/useClients';
import DataTable from '../../components/ui/DataTable';
import Button from '../../components/ui/Button';
import Modal from '../../components/ui/Modal';
import ConfirmDialog from '../../components/ui/ConfirmDialog';
import StatusBadge from '../../components/ui/StatusBadge';
import ClientForm from '../../components/forms/ClientForm';
import { Plus, Pencil, Trash2, ExternalLink } from 'lucide-react';
import { formatDate, getErrorMessage } from '../../utils/helpers';
import toast from 'react-hot-toast';

const ClientsPage = () => {
  const { data = [], isLoading } = useClientList();
  const createMut = useCreateClient();
  const updateMut = useUpdateClient();
  const deleteMut = useDeleteClient();

  const [modal,    setModal]    = useState(null);
  const [selected, setSelected] = useState(null);
  const [deleting, setDeleting] = useState(null);
  const closeModal = () => { setModal(null); setSelected(null); };

  const handleSubmit = async (fd) => {
    try {
      if (modal === 'edit') { await updateMut.mutateAsync({ id: selected._id, fd }); toast.success('Client updated'); }
      else { await createMut.mutateAsync(fd); toast.success('Client added'); }
      closeModal();
    } catch (err) { toast.error(getErrorMessage(err)); }
  };

  const handleDelete = async () => {
    try { await deleteMut.mutateAsync(deleting._id); toast.success('Client removed'); setDeleting(null); }
    catch (err) { toast.error(getErrorMessage(err)); }
  };

  const columns = [
    { key: 'logo', header: '', render: (r) => r.logo?.url
      ? <img src={r.logo.url} alt={r.name} className="h-8 w-16 object-contain" />
      : <div className="h-8 w-16 bg-surface rounded-md border border-surface-border flex items-center justify-center text-xs text-slate-500">No logo</div>
    },
    { key: 'name',      header: 'Name',    accessor: 'name',   sortable: true, render: (r) => <span className="font-medium text-slate-100">{r.name}</span> },
    { key: 'website',   header: 'Website', render: (r) => r.website ? <a href={r.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-brand-400 hover:text-brand-300 text-xs">{r.website} <ExternalLink className="w-3 h-3" /></a> : '—' },
    { key: 'order',     header: 'Order',   accessor: 'order',  sortable: true },
    { key: 'published', header: 'Status',  render: (r) => <StatusBadge status={r.isPublished} /> },
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
        <div><h2 className="page-title">Clients</h2><p className="text-sm text-slate-400 mt-1">Manage client logos</p></div>
        <Button icon={Plus} onClick={() => { setSelected(null); setModal('create'); }}>Add Client</Button>
      </div>
      <div className="card">
        <DataTable columns={columns} data={data} loading={isLoading} emptyTitle="No clients yet"
          emptyAction={<Button icon={Plus} size="sm" onClick={() => setModal('create')}>Add Client</Button>} />
      </div>
      <Modal isOpen={!!modal} onClose={closeModal} title={modal === 'edit' ? 'Edit Client' : 'Add Client'} size="md">
        <ClientForm defaultValues={selected} onSubmit={handleSubmit} loading={createMut.isPending || updateMut.isPending} />
      </Modal>
      <ConfirmDialog isOpen={!!deleting} onClose={() => setDeleting(null)} onConfirm={handleDelete}
        title="Remove Client" description={`Remove "${deleting?.name}"?`} loading={deleteMut.isPending} />
    </div>
  );
};

export default ClientsPage;
