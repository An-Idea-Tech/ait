import React from 'react';
import { useServiceList }     from '../hooks/useServices';
import { useProjectList }     from '../hooks/useProjects';
import { useBlogList }        from '../hooks/useBlogs';
import { useJobList }         from '../hooks/useJobs';
import { useApplicationList } from '../hooks/useApplications';
import { useContactList }     from '../hooks/useContacts';
import { useTestimonialList } from '../hooks/useTestimonials';
import StatusBadge from '../components/ui/StatusBadge';
import { formatDate, timeAgo } from '../utils/helpers';
import {
  Briefcase, FolderKanban, BookOpen, Users, Phone, Star,
  FileText, TrendingUp, Clock, ArrowRight,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const StatCard = ({ label, value, icon: Icon, color, to }) => (
  <Link to={to} className="card hover:border-brand-500/40 hover:shadow-glow transition-all duration-300 group flex items-center gap-4">
    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${color}`}>
      <Icon className="w-6 h-6" />
    </div>
    <div className="flex-1">
      <p className="text-2xl font-bold text-slate-100">{value ?? '—'}</p>
      <p className="text-sm text-slate-400">{label}</p>
    </div>
    <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-brand-400 group-hover:translate-x-0.5 transition-all" />
  </Link>
);

const Dashboard = () => {
  const { data: services     = [] } = useServiceList();
  const { data: projects     = [] } = useProjectList();
  const { data: blogs        = [] } = useBlogList();
  const { data: jobs         = [] } = useJobList();
  const { data: applications = [] } = useApplicationList();
  const { data: contacts     = [] } = useContactList();
  const { data: testimonials = [] } = useTestimonialList();

  const stats = [
    { label: 'Services',     value: services.length,     icon: Briefcase,    color: 'bg-blue-500/20 text-blue-400',    to: '/admin/services' },
    { label: 'Projects',     value: projects.length,     icon: FolderKanban, color: 'bg-purple-500/20 text-purple-400', to: '/admin/projects' },
    { label: 'Blogs',        value: blogs.length,        icon: BookOpen,     color: 'bg-green-500/20 text-green-400',  to: '/admin/blogs' },
    { label: 'Jobs',         value: jobs.length,         icon: FileText,     color: 'bg-orange-500/20 text-orange-400',to: '/admin/jobs' },
    { label: 'Applications', value: applications.length, icon: Users,        color: 'bg-pink-500/20 text-pink-400',    to: '/admin/applications' },
    { label: 'Contacts',     value: contacts.length,     icon: Phone,        color: 'bg-cyan-500/20 text-cyan-400',    to: '/admin/contacts' },
    { label: 'Testimonials', value: testimonials.length, icon: Star,         color: 'bg-yellow-500/20 text-yellow-400',to: '/admin/testimonials' },
  ];

  // const recentContacts = [...contacts].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).slice(0, 5);
  // const recentApps     = [...applications].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).slice(0, 5);
  // const pendingApps    = applications.filter((a) => a.status === 'pending').length;
  // const newContacts    = contacts.filter((c) => c.status === 'new').length;

  return (

    <h1>Dashboard</h1>

    // <div className="space-y-8 animate-fade-in">
    //   {/* Welcome banner */}
    //   <div className="rounded-2xl bg-gradient-to-r from-brand-900/60 to-surface-card border border-brand-700/30 p-6 flex items-center justify-between">
    //     <div>
    //       <h2 className="text-2xl font-bold text-slate-100">Welcome to An Idea Tech</h2>
    //       <p className="text-slate-400 mt-1 text-sm">Here's a quick overview of your platform.</p>
    //     </div>
    //     <div className="hidden md:flex items-center gap-4">
    //       {pendingApps > 0 && (
    //         <div className="flex items-center gap-2 px-3 py-2 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
    //           <Clock className="w-4 h-4 text-yellow-400" />
    //           <span className="text-sm text-yellow-300">{pendingApps} pending application{pendingApps !== 1 ? 's' : ''}</span>
    //         </div>
    //       )}
    //       {newContacts > 0 && (
    //         <div className="flex items-center gap-2 px-3 py-2 bg-blue-500/10 border border-blue-500/20 rounded-lg">
    //           <TrendingUp className="w-4 h-4 text-blue-400" />
    //           <span className="text-sm text-blue-300">{newContacts} new contact{newContacts !== 1 ? 's' : ''}</span>
    //         </div>
    //       )}
    //     </div>
    //   </div>

    //   {/* Stats */}
    //   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
    //     {stats.map((s) => <StatCard key={s.label} {...s} />)}
    //   </div>

    //   {/* Recent tables */}
    //   <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
    //     {/* Recent Contacts */}
    //     <div className="card space-y-4">
    //       <div className="flex items-center justify-between">
    //         <h3 className="section-title">Recent Contacts</h3>
    //         <Link to="/admin/contacts" className="text-xs text-brand-400 hover:text-brand-300 flex items-center gap-1">
    //           View all <ArrowRight className="w-3 h-3" />
    //         </Link>
    //       </div>
    //       {recentContacts.length === 0 ? (
    //         <p className="text-sm text-slate-500 text-center py-8">No contacts yet</p>
    //       ) : (
    //         <div className="space-y-3">
    //           {recentContacts.map((c) => (
    //             <Link key={c._id} to={`/admin/contacts/${c._id}`}
    //               className="flex items-center justify-between p-3 rounded-lg bg-surface hover:bg-surface-hover border border-surface-border transition-colors group">
    //               <div>
    //                 <p className="text-sm font-medium text-slate-100 group-hover:text-brand-300 transition-colors">{c.name}</p>
    //                 <p className="text-xs text-slate-500">{c.email} · {timeAgo(c.createdAt)}</p>
    //               </div>
    //               <StatusBadge status={c.status} />
    //             </Link>
    //           ))}
    //         </div>
    //       )}
    //     </div>

    //     {/* Recent Applications */}
    //     <div className="card space-y-4">
    //       <div className="flex items-center justify-between">
    //         <h3 className="section-title">Recent Applications</h3>
    //         <Link to="/admin/applications" className="text-xs text-brand-400 hover:text-brand-300 flex items-center gap-1">
    //           View all <ArrowRight className="w-3 h-3" />
    //         </Link>
    //       </div>
    //       {recentApps.length === 0 ? (
    //         <p className="text-sm text-slate-500 text-center py-8">No applications yet</p>
    //       ) : (
    //         <div className="space-y-3">
    //           {recentApps.map((a) => (
    //             <Link key={a._id} to={`/admin/applications/${a._id}`}
    //               className="flex items-center justify-between p-3 rounded-lg bg-surface hover:bg-surface-hover border border-surface-border transition-colors group">
    //               <div>
    //                 <p className="text-sm font-medium text-slate-100 group-hover:text-brand-300 transition-colors">{a.fullName}</p>
    //                 <p className="text-xs text-slate-500">{a.job?.title || 'N/A'} · {timeAgo(a.createdAt)}</p>
    //               </div>
    //               <StatusBadge status={a.status} />
    //             </Link>
    //           ))}
    //         </div>
    //       )}
    //     </div>
    //   </div>
    // </div>
  );
};

export default Dashboard;
