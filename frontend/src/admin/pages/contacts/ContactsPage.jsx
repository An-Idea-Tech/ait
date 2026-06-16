import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useContactList } from '../../hooks/useContacts';
import DataTable from '../../components/ui/DataTable';
import StatusBadge from '../../components/ui/StatusBadge';
import { formatDate, timeAgo, truncate } from '../../utils/helpers';
import { Eye } from 'lucide-react';

const ContactsPage = () => {
  const { data = [], isLoading } = useContactList();
  const navigate = useNavigate();

  const columns = [
    { key: 'name', header: 'Name', accessor: 'name', sortable: true,
      render: (r) => (
        <div>
          <p className="font-medium text-slate-100">{r.name}</p>
          <p className="text-xs text-slate-500">{r.email}</p>
        </div>
      )
    },
    { key: 'phone',    header: 'Phone',   accessor: 'phone' },
    { key: 'company',  header: 'Company', accessor: 'companyName' },
    { key: 'message',  header: 'Message', render: (r) => truncate(r.message, 50) },
    { key: 'status',   header: 'Status',  render: (r) => <StatusBadge status={r.status} /> },
    { key: 'received', header: 'Received', render: (r) => timeAgo(r.createdAt) },
    { key: 'actions', header: '', render: (r) => (
      <button className="btn-ghost" onClick={() => navigate(`/admin/contacts/${r._id}`)}>
        <Eye className="w-4 h-4" />
      </button>
    )},
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h2 className="page-title">Contacts</h2>
        <p className="text-sm text-slate-400 mt-1">Manage incoming contact requests and leads</p>
      </div>
      <div className="card">
        <DataTable columns={columns} data={data} loading={isLoading} emptyTitle="No contacts yet" />
      </div>
    </div>
  );
};

export default ContactsPage;
