import React, { useState } from 'react';
import { useBlogList, useCreateBlog, useUpdateBlog, useDeleteBlog } from '../../hooks/useBlogs';
import DataTable from '../../components/ui/DataTable';
import Button from '../../components/ui/Button';
import Modal from '../../components/ui/Modal';
import ConfirmDialog from '../../components/ui/ConfirmDialog';
import StatusBadge from '../../components/ui/StatusBadge';
import BlogForm from '../../components/forms/BlogForm';
import { Plus, Pencil, Trash2 } from 'lucide-react';
import { truncate, formatDate, getErrorMessage } from '../../utils/helpers';
import toast from 'react-hot-toast';

const BlogsPage = () => {
  const { data = [], isLoading } = useBlogList();
  const createMut = useCreateBlog();
  const updateMut = useUpdateBlog();
  const deleteMut = useDeleteBlog();

  const [modal,    setModal]    = useState(null);
  const [selected, setSelected] = useState(null);
  const [deleting, setDeleting] = useState(null);

  const closeModal = () => { setModal(null); setSelected(null); };

  const handleSubmit = async (fd) => {
    try {
      if (modal === 'edit') { await updateMut.mutateAsync({ id: selected._id, fd }); toast.success('Blog updated'); }
      else { await createMut.mutateAsync(fd); toast.success('Blog created'); }
      closeModal();
    } catch (err) { toast.error(getErrorMessage(err)); }
  };

  const handleDelete = async () => {
    try { await deleteMut.mutateAsync(deleting._id); toast.success('Blog deleted'); setDeleting(null); }
    catch (err) { toast.error(getErrorMessage(err)); }
  };

  const columns = [
    { key: 'coverImage',  header: 'Cover Image', accessor: 'coverImage', render: (r) => r.coverImage && <img src={r.coverImage.url} alt="cover" className="w-12 h-12 object-cover rounded" /> },
    { key: 'title',     header: 'Title',    accessor: 'title',    sortable: true, render: (r) => <span className="font-medium text-slate-100">{truncate(r.title, 50)}</span> },
    { key: 'category',  header: 'Category', accessor: 'category', sortable: true },
    { key: 'author',    header: 'Author',   accessor: 'author' },
    { key: 'published', header: 'Status',   render: (r) => <StatusBadge status={r.isPublished} /> },
    { key: 'createdAt', header: 'Created',  render: (r) => formatDate(r.createdAt) },
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
        <div><h2 className="page-title">Blogs</h2><p className="text-sm text-slate-400 mt-1">Manage blog posts</p></div>
        <Button icon={Plus} onClick={() => { setSelected(null); setModal('create'); }}>New Blog</Button>
      </div>
      <div className="card">
        <DataTable columns={columns} data={data} loading={isLoading} emptyTitle="No blogs yet"
          emptyAction={<Button icon={Plus} size="sm" onClick={() => setModal('create')}>Add Blog</Button>} />
      </div>
      <Modal isOpen={!!modal} onClose={closeModal} title={modal === 'edit' ? 'Edit Blog' : 'New Blog'} size="xl">
        <BlogForm defaultValues={selected} onSubmit={handleSubmit} loading={createMut.isPending || updateMut.isPending} />
      </Modal>
      <ConfirmDialog isOpen={!!deleting} onClose={() => setDeleting(null)} onConfirm={handleDelete}
        title="Delete Blog" description={`Delete "${deleting?.title}"?`} loading={deleteMut.isPending} />
    </div>
  );
};

export default BlogsPage;
