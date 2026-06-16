import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useApplicationDetail, useUpdateApplicationStatus } from '../../hooks/useApplications';
import { PageLoader } from '../../components/ui/LoadingSpinner';
import StatusBadge from '../../components/ui/StatusBadge';
import Button from '../../components/ui/Button';
import { formatDate, getErrorMessage } from '../../utils/helpers';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';

const APP_STATUSES = ['pending', 'reviewing', 'shortlisted', 'rejected', 'hired'];

const InfoItem = ({ label, value }) => (
  <div>
    <p className="text-xs text-slate-500 mb-0.5">{label}</p>
    <p className="text-sm text-slate-200">{value || '—'}</p>
  </div>
);

const ApplicationDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: app, isLoading } = useApplicationDetail(id);
  const updateMut = useUpdateApplicationStatus();
  const { register, handleSubmit } = useForm({ defaultValues: { status: '', adminNotes: '' } });

  if (isLoading) return <PageLoader />;
  if (!app) return <div className="text-slate-400 text-center py-20">Application not found.</div>;

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
          <h2 className="page-title">{app.fullName}</h2>
          <p className="text-sm text-slate-400 mt-0.5">Application Detail</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Left: Details */}
        <div className="md:col-span-2 space-y-4">
          <div className="card space-y-4">
            <h3 className="section-title">Applicant Info</h3>
            <div className="grid grid-cols-2 gap-4">
              <InfoItem label="Full Name"  value={app.fullName} />
              <InfoItem label="Email"      value={app.email} />
              <InfoItem label="Phone"      value={app.phone} />
              <InfoItem label="Location"   value={app.location} />
            </div>
            {app.portfolioLinks?.length > 0 && (
              <div>
                <p className="text-xs text-slate-500 mb-1">Portfolio Links</p>
                <ul className="space-y-1">
                  {app.portfolioLinks.map((link, i) => (
                    <li key={i}><a href={link} target="_blank" rel="noopener noreferrer" className="text-brand-400 hover:text-brand-300 text-sm">{link}</a></li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {app.coverLetter && (
            <div className="card">
              <h3 className="section-title mb-3">Cover Letter</h3>
              <p className="text-sm text-slate-300 leading-relaxed whitespace-pre-wrap">{app.coverLetter}</p>
            </div>
          )}
        </div>

        {/* Right: Status */}
        <div className="space-y-4">
          <div className="card space-y-3">
            <h3 className="section-title">Current Status</h3>
            <StatusBadge status={app.status} />
            <p className="text-xs text-slate-500">Applied {formatDate(app.createdAt)}</p>
            {app.job && <InfoItem label="Applied For" value={app.job.title} />}
          </div>

          <div className="card">
            <h3 className="section-title mb-3">Update Status</h3>
            <form onSubmit={handleSubmit(onUpdateStatus)} className="space-y-3">
              <select className="form-input" {...register('status')}>
                <option value="">Select status…</option>
                {APP_STATUSES.map((s) => <option key={s} value={s} className="capitalize">{s}</option>)}
              </select>
              <textarea
                placeholder="Admin notes (optional)"
                rows={3}
                className="form-input resize-none"
                {...register('adminNotes')}
              />
              <Button type="submit" loading={updateMut.isPending} className="w-full justify-center" icon={CheckCircle}>
                Update
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationDetailPage;
