import React, { useState } from 'react';
import { useJobList, useCreateJob, useUpdateJob, useDeleteJob } from '../../hooks/useJobs';
import DataTable from '../../components/ui/DataTable';
import Button from '../../components/ui/Button';
import Modal from '../../components/ui/Modal';
import ConfirmDialog from '../../components/ui/ConfirmDialog';
import JobForm from '../../components/forms/JobForm';
import { Plus, Pencil, Trash2 } from 'lucide-react';
import { formatDate, getErrorMessage } from '../../utils/helpers';
import toast from 'react-hot-toast';

const JobsPage = () => {
  const { data = [], isLoading } = useJobList();

  const createMut = useCreateJob();
  const updateMut = useUpdateJob();
  const deleteMut = useDeleteJob();

  const [modal,    setModal]    = useState(null);
  const [selected, setSelected] = useState(null);
  const [deleting, setDeleting] = useState(null);
  const closeModal = () => { setModal(null); setSelected(null); };

  const handleSubmit = async (body) => {
    try {
      if (modal === 'edit') { await updateMut.mutateAsync({ id: selected._id, body }); toast.success('Job updated'); }
      else { await createMut.mutateAsync(body); toast.success('Job created'); }
      closeModal();
    } catch (err) { toast.error(getErrorMessage(err)); }
  };

  const handleDelete = async () => {
    try { await deleteMut.mutateAsync(deleting._id); toast.success('Job deleted'); setDeleting(null); }
    catch (err) { toast.error(getErrorMessage(err)); }
  };

  const columns = [
    { key: 'title',      header: 'Title',      accessor: 'title',      sortable: true, render: (r) => <span className="font-medium text-slate-100">{r.title}</span> },
    { key: 'department', header: 'Department', accessor: 'department' },
    { key: 'location',   header: 'Location',   accessor: 'location' },
    { key: 'type',       header: 'Type',       accessor: 'type',       sortable: true, render: (r) => <span className="badge bg-purple-500/20 text-purple-300 border border-purple-500/30 capitalize">{r.type}</span> },
    { key: 'status',     header: 'Status',     render: (r) => r.isOpen
      ? <span className="badge bg-green-500/20 text-green-400 border border-green-500/30"><span className="w-1.5 h-1.5 rounded-full bg-green-400" />Open</span>
      : <span className="badge bg-slate-500/20 text-slate-400 border border-slate-500/30"><span className="w-1.5 h-1.5 rounded-full bg-slate-400" />Closed</span>
    },
    { key: 'deadline',   header: 'Deadline',   render: (r) => formatDate(r.applyDeadline) },
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
        <div><h2 className="page-title">Jobs</h2><p className="text-sm text-slate-400 mt-1">Manage job openings</p></div>
        <Button icon={Plus} onClick={() => { setSelected(null); setModal('create'); }}>Post Job</Button>
      </div>
      <div className="card">
        <DataTable columns={columns} data={data} loading={isLoading} emptyTitle="No jobs posted yet"
          emptyAction={<Button icon={Plus} size="sm" onClick={() => setModal('create')}>Post Job</Button>} />
      </div>
      <Modal isOpen={!!modal} onClose={closeModal} title={modal === 'edit' ? 'Edit Job' : 'Post New Job'} size="xl">
        <JobForm defaultValues={selected} onSubmit={handleSubmit} loading={createMut.isPending || updateMut.isPending} />
      </Modal>
      <ConfirmDialog isOpen={!!deleting} onClose={() => setDeleting(null)} onConfirm={handleDelete}
        title="Delete Job" description={`Delete "${deleting?.title}"?`} loading={deleteMut.isPending} />
    </div>
  );
};

export default JobsPage;
