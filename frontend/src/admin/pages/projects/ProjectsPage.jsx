import React, { useState } from 'react';
import { useProjectList, useCreateProject, useUpdateProject, useDeleteProject } from '../../hooks/useProjects';
import DataTable from '../../components/ui/DataTable';
import Button from '../../components/ui/Button';
import Modal from '../../components/ui/Modal';
import ConfirmDialog from '../../components/ui/ConfirmDialog';
import StatusBadge from '../../components/ui/StatusBadge';
import ProjectForm from '../../components/forms/ProjectForm';
import { Plus, Pencil, Trash2, Star, ImageIcon } from 'lucide-react';
import { truncate, formatDate, getErrorMessage } from '../../utils/helpers';
import toast from 'react-hot-toast';

const ProjectsPage = () => {
  const { data = [], isLoading } = useProjectList();
  const createMut = useCreateProject();
  const updateMut = useUpdateProject();
  const deleteMut = useDeleteProject();

  const [modal,    setModal]    = useState(null);
  const [selected, setSelected] = useState(null);
  const [deleting, setDeleting] = useState(null);

  const openEdit   = (row) => { setSelected(row); setModal('edit'); };
  const openCreate = ()    => { setSelected(null); setModal('create'); };
  const closeModal = ()    => { setModal(null); setSelected(null); };

  const handleSubmit = async (fd) => {
    try {
      if (modal === 'edit') { await updateMut.mutateAsync({ id: selected._id, fd }); toast.success('Project updated'); }
      else { await createMut.mutateAsync(fd); toast.success('Project created'); }
      closeModal();
    } catch (err) { toast.error(getErrorMessage(err)); }
  };

  const handleDelete = async () => {
    try { await deleteMut.mutateAsync(deleting._id); toast.success('Project deleted'); setDeleting(null); }
    catch (err) { toast.error(getErrorMessage(err)); }
  };

  const columns = [
    { key: 'coverImage', header: 'Image', render: (r) => r.coverImage?.url
      ? <img src={r.coverImage.url} alt={r.title} className="w-10 h-10 rounded-lg object-cover border border-surface-border" />
      : <div className="w-10 h-10 rounded-lg bg-surface border border-surface-border flex items-center justify-center"><ImageIcon className="w-4 h-4 text-slate-500" /></div>
    },
    { key: 'title',     header: 'Title',    accessor: 'title',   sortable: true, render: (r) => <span className="font-medium text-slate-100">{r.title}</span> },
    { key: 'client',    header: 'Client',   accessor: 'client',  sortable: true },
    { key: 'category',  header: 'Category', accessor: 'category' },
    { key: 'featured',  header: 'Featured', render: (r) => r.isFeatured ? <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" /> : null },
    { key: 'published', header: 'Status',   render: (r) => <StatusBadge status={r.isPublished} /> },
    { key: 'createdAt', header: 'Created',  render: (r) => formatDate(r.createdAt) },
    { key: 'actions', header: '', render: (r) => (
      <div className="flex items-center gap-2">
        <button className="btn-ghost" onClick={() => openEdit(r)}><Pencil className="w-4 h-4" /></button>
        <button className="btn-ghost text-red-400 hover:text-red-300 hover:bg-red-500/10" onClick={() => setDeleting(r)}><Trash2 className="w-4 h-4" /></button>
      </div>
    )},
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div><h2 className="page-title">Projects</h2><p className="text-sm text-slate-400 mt-1">Manage portfolio projects</p></div>
        <Button icon={Plus} onClick={openCreate}>New Project</Button>
      </div>
      <div className="card">
        <DataTable columns={columns} data={data} loading={isLoading} emptyTitle="No projects yet"
          emptyAction={<Button icon={Plus} size="sm" onClick={openCreate}>Add Project</Button>} />
      </div>
      <Modal isOpen={!!modal} onClose={closeModal} title={modal === 'edit' ? 'Edit Project' : 'New Project'} size="xl">
        <ProjectForm defaultValues={selected} onSubmit={handleSubmit} loading={createMut.isPending || updateMut.isPending} />
      </Modal>
      <ConfirmDialog isOpen={!!deleting} onClose={() => setDeleting(null)} onConfirm={handleDelete}
        title="Delete Project" description={`Delete "${deleting?.title}"?`} loading={deleteMut.isPending} />
    </div>
  );
};

export default ProjectsPage;
