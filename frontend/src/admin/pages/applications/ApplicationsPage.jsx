import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApplicationList } from '../../hooks/useApplications';
import DataTable from '../../components/ui/DataTable';
import StatusBadge from '../../components/ui/StatusBadge';
import { formatDate, timeAgo } from '../../utils/helpers';
import { Eye } from 'lucide-react';

const ApplicationsPage = () => {
  const { data = [], isLoading } = useApplicationList();
  const navigate = useNavigate();

  const columns = [
    { key: 'fullName', header: 'Applicant', accessor: 'fullName', sortable: true,
      render: (r) => (
        <div>
          <p className="font-medium text-slate-100">{r.fullName}</p>
          <p className="text-xs text-slate-500">{r.email}</p>
        </div>
      )
    },
    { key: 'job',      header: 'Job',        render: (r) => r.job?.title || '—' },
    { key: 'location', header: 'Location',   accessor: 'location' },
    { key: 'status',   header: 'Status',     render: (r) => <StatusBadge status={r.status} /> },
    { key: 'applied',  header: 'Applied',    render: (r) => timeAgo(r.createdAt) },
    { key: 'actions', header: '', render: (r) => (
      <button className="btn-ghost" onClick={() => navigate(`/admin/applications/${r._id}`)}>
        <Eye className="w-4 h-4" />
      </button>
    )},
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h2 className="page-title">Applications</h2>
        <p className="text-sm text-slate-400 mt-1">Review job applications</p>
      </div>
      <div className="card">
        <DataTable columns={columns} data={data} loading={isLoading} emptyTitle="No applications yet" />
      </div>
    </div>
  );
};

export default ApplicationsPage;
