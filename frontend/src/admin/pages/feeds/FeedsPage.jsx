import React, { useState } from 'react';
import { useFeedList, useCreateFeed, useUpdateFeed, useDeleteFeed } from '../../hooks/useFeeds';
import DataTable from '../../components/ui/DataTable';
import Button from '../../components/ui/Button';
import Modal from '../../components/ui/Modal';
import ConfirmDialog from '../../components/ui/ConfirmDialog';
import StatusBadge from '../../components/ui/StatusBadge';
import FeedForm from '../../components/forms/FeedForm';
import { Plus, Pencil, Trash2, ImageIcon } from 'lucide-react';
import { truncate, formatDate, getErrorMessage } from '../../utils/helpers';
import toast from 'react-hot-toast';

const FeedsPage = () => {
  const { data = [], isLoading } = useFeedList();
  const createMut = useCreateFeed();
  const updateMut = useUpdateFeed();
  const deleteMut = useDeleteFeed();

  const [modal,    setModal]    = useState(null);
  const [selected, setSelected] = useState(null);
  const [deleting, setDeleting] = useState(null);

  const closeModal = () => { setModal(null); setSelected(null); };

  const handleSubmit = async (fd) => {
    try {
      if (modal === 'edit') { await updateMut.mutateAsync({ id: selected._id, fd }); toast.success('Feed updated'); }
      else { await createMut.mutateAsync(fd); toast.success('Feed created'); }
      closeModal();
    } catch (err) { toast.error(getErrorMessage(err)); }
  };

  const handleDelete = async () => {
    try { await deleteMut.mutateAsync(deleting._id); toast.success('Feed deleted'); setDeleting(null); }
    catch (err) { toast.error(getErrorMessage(err)); }
  };

  const columns = [
    { key: 'image', header: 'Image', render: (r) => r.image?.url
      ? <img src={r.image.url} alt={r.title} className="w-10 h-10 rounded-lg object-cover border border-surface-border" />
      : <div className="w-10 h-10 rounded-lg bg-surface border border-surface-border flex items-center justify-center"><ImageIcon className="w-4 h-4 text-slate-500" /></div>
    },
    { key: 'title',     header: 'Title',   accessor: 'title',   sortable: true, render: (r) => <span className="font-medium text-slate-100">{truncate(r.title, 50)}</span> },
    { key: 'type',      header: 'Type',    accessor: 'type',    sortable: true, render: (r) => r.type ? <span className="badge bg-brand-500/20 text-brand-300 border border-brand-500/30 capitalize">{r.type}</span> : '—' },
    { key: 'published', header: 'Status',  render: (r) => <StatusBadge status={r.isPublished} /> },
    { key: 'createdAt', header: 'Created', render: (r) => formatDate(r.createdAt) },
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
        <div><h2 className="page-title">Feeds</h2><p className="text-sm text-slate-400 mt-1">Manage updates and announcements</p></div>
        <Button icon={Plus} onClick={() => { setSelected(null); setModal('create'); }}>New Feed</Button>
      </div>
      <div className="card">
        <DataTable columns={columns} data={data} loading={isLoading} emptyTitle="No feeds yet"
          emptyAction={<Button icon={Plus} size="sm" onClick={() => setModal('create')}>Add Feed</Button>} />
      </div>
      <Modal isOpen={!!modal} onClose={closeModal} title={modal === 'edit' ? 'Edit Feed' : 'New Feed'} size="lg">
        <FeedForm defaultValues={selected} onSubmit={handleSubmit} loading={createMut.isPending || updateMut.isPending} />
      </Modal>
      <ConfirmDialog isOpen={!!deleting} onClose={() => setDeleting(null)} onConfirm={handleDelete}
        title="Delete Feed" description={`Delete "${deleting?.title}"?`} loading={deleteMut.isPending} />
    </div>
  );
};

export default FeedsPage;
