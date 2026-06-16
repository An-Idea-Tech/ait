import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useContactDetail, useUpdateContactStatus } from '../../hooks/useContacts';
import { PageLoader } from '../../components/ui/LoadingSpinner';
import StatusBadge from '../../components/ui/StatusBadge';
import Button from '../../components/ui/Button';
import { formatDate, getErrorMessage } from '../../utils/helpers';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';

const CONTACT_STATUSES = ['new', 'contacted', 'in-progress', 'closed'];

const InfoItem = ({ label, value }) => (
  <div>
    <p className="text-xs text-slate-500 mb-0.5">{label}</p>
    <p className="text-sm text-slate-200">{value || '—'}</p>
  </div>
);

const ContactDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: contact, isLoading } = useContactDetail(id);
  const updateMut = useUpdateContactStatus();
  const { register, handleSubmit } = useForm({ defaultValues: { status: '', adminNotes: '' } });

  if (isLoading) return <PageLoader />;
  if (!contact) return <div className="text-slate-400 text-center py-20">Contact not found.</div>;

  const onUpdateStatus = async (data) => {
    if (!data.status) return toast.error('Please select a status');
    try {
      await updateMut.mutateAsync({ id, body: data });
      toast.success('Status updated');
    } catch (err) { toast.error(getErrorMessage(err)); }
  };

  return (
    <div className="space-y-6 animate-fade-in max-w-4xl">
      <div className="flex items-center gap-4">
        <button className="btn-ghost" onClick={() => navigate(-1)}><ArrowLeft className="w-4 h-4" /> Back</button>
        <div>
          <h2 className="page-title">{contact.name}</h2>
          <p className="text-sm text-slate-400 mt-0.5">Contact Detail</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2 space-y-4">
          <div className="card space-y-4">
            <h3 className="section-title">Contact Info</h3>
            <div className="grid grid-cols-2 gap-4">
              <InfoItem label="Name"         value={contact.name} />
              <InfoItem label="Email"        value={contact.email} />
              <InfoItem label="Phone"        value={contact.phone} />
              <InfoItem label="Company"      value={contact.companyName} />
              <InfoItem label="Booking Date" value={formatDate(contact.bookingDate)} />
              <InfoItem label="Received"     value={formatDate(contact.createdAt)} />
            </div>
          </div>
          <div className="card">
            <h3 className="section-title mb-3">Message</h3>
            <p className="text-sm text-slate-300 leading-relaxed whitespace-pre-wrap">{contact.message}</p>
          </div>
          {contact.adminNotes && (
            <div className="card border-brand-500/20">
              <h3 className="section-title mb-3">Admin Notes</h3>
              <p className="text-sm text-slate-300 whitespace-pre-wrap">{contact.adminNotes}</p>
            </div>
          )}
        </div>

        <div className="space-y-4">
          <div className="card space-y-3">
            <h3 className="section-title">Status</h3>
            <StatusBadge status={contact.status} />
          </div>
          <div className="card">
            <h3 className="section-title mb-3">Update Status</h3>
            <form onSubmit={handleSubmit(onUpdateStatus)} className="space-y-3">
              <select className="form-input" {...register('status')}>
                <option value="">Select status…</option>
                {CONTACT_STATUSES.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
              <textarea
                placeholder="Admin notes (optional)"
                rows={3}
                className="form-input resize-none"
                {...register('adminNotes')}
              />
              <Button type="submit" loading={updateMut.isPending} className="w-full justify-center" icon={CheckCircle}>Update</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetailPage;
