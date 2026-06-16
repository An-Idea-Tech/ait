import React from 'react';
import { useDiagnosisAnalytics } from '../../hooks/useDiagnosisAnalytics';
import { Activity, CheckCircle, Users, TrendingUp, BarChart3 } from 'lucide-react';
import { formatDate } from '../../utils/helpers';

const StatCard = ({ label, value, subtitle, icon: Icon, color }) => (
  <div className="card flex items-center gap-4">
    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${color}`}>
      <Icon className="w-6 h-6" />
    </div>
    <div>
      <p className="text-2xl font-bold text-slate-100">{value ?? '—'}</p>
      <p className="text-sm text-slate-400">{label}</p>
      {subtitle && <p className="text-xs text-slate-500 mt-0.5">{subtitle}</p>}
    </div>
  </div>
);

const VERDICT_LABELS = {
  verdictA: "Don't need a website yet",
  verdictB: 'Landing page + WhatsApp flow',
  verdictC: 'Proper website with systems',
  verdictD: 'Custom platform',
};

const VERDICT_COLORS = {
  verdictA: 'bg-slate-500/20 text-slate-400',
  verdictB: 'bg-blue-500/20 text-blue-400',
  verdictC: 'bg-purple-500/20 text-purple-400',
  verdictD: 'bg-orange-500/20 text-orange-400',
};

const DiagnosisAnalyticsPage = () => {
  const { data, isLoading, isError } = useDiagnosisAnalytics();

  if (isLoading) {
    return (
      <div className="space-y-4 animate-fade-in">
        <h1 className="page-title">Diagnosis Analytics</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="card h-24 bg-gradient-to-r from-surface-card via-surface to-surface-card bg-[length:200%_100%] animate-shimmer" />
          ))}
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="space-y-4">
        <h1 className="page-title">Diagnosis Analytics</h1>
        <div className="card text-center py-12 text-slate-400">
          <p>Failed to load analytics. Please try again.</p>
        </div>
      </div>
    );
  }

  const analytics = data || {};

  return (
    <div className="space-y-8 animate-fade-in">
      <h1 className="page-title">Diagnosis Analytics</h1>

      {/* Stats grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          label="Total Sessions"
          value={analytics.totalSessions || 0}
          icon={Activity}
          color="bg-blue-500/20 text-blue-400"
        />
        <StatCard
          label="Completed"
          value={analytics.completedSessions || 0}
          subtitle={`${analytics.completionRate || 0}% completion rate`}
          icon={CheckCircle}
          color="bg-green-500/20 text-green-400"
        />
        <StatCard
          label="Total Leads"
          value={analytics.totalLeads || 0}
          subtitle={`${analytics.leadConversionRate || 0}% conversion`}
          icon={Users}
          color="bg-purple-500/20 text-purple-400"
        />
        <StatCard
          label="Conversion Rate"
          value={`${analytics.leadConversionRate || 0}%`}
          icon={TrendingUp}
          color="bg-orange-500/20 text-orange-400"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Verdict Distribution */}
        <div className="card space-y-4">
          <div className="flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-slate-400" />
            <h3 className="section-title">Verdict Distribution</h3>
          </div>
          {(!analytics.verdictDistribution || analytics.verdictDistribution.length === 0) ? (
            <p className="text-sm text-slate-500 text-center py-8">No completed sessions yet</p>
          ) : (
            <div className="space-y-3">
              {analytics.verdictDistribution.map((v) => {
                const maxCount = Math.max(...analytics.verdictDistribution.map((x) => x.count));
                const pct = maxCount > 0 ? (v.count / maxCount) * 100 : 0;
                return (
                  <div key={v._id} className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className={`badge ${VERDICT_COLORS[v._id] || 'bg-slate-500/20 text-slate-400'}`}>
                          {v._id}
                        </span>
                        <span className="text-sm text-slate-300">{VERDICT_LABELS[v._id] || v._id}</span>
                      </div>
                      <span className="text-sm font-semibold text-slate-200">{v.count}</span>
                    </div>
                    <div className="w-full h-2 bg-surface rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-[#A35A3A] to-[#D4845A] transition-all duration-500"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Recent Leads */}
        <div className="card space-y-4">
          <h3 className="section-title">Recent Leads</h3>
          {(!analytics.recentLeads || analytics.recentLeads.length === 0) ? (
            <p className="text-sm text-slate-500 text-center py-8">No leads captured yet</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="table-header">Name</th>
                    <th className="table-header">Business</th>
                    <th className="table-header">Verdict</th>
                    <th className="table-header">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {analytics.recentLeads.map((lead) => (
                    <tr key={lead._id} className="table-row">
                      <td className="table-cell">
                        <div>
                          <p className="text-sm font-medium text-slate-100">{lead.name}</p>
                          <p className="text-xs text-slate-500">{lead.email}</p>
                        </div>
                      </td>
                      <td className="table-cell text-sm text-slate-300">{lead.businessName}</td>
                      <td className="table-cell">
                        <span className={`badge ${VERDICT_COLORS[lead.verdictId] || 'bg-slate-500/20 text-slate-400'}`}>
                          {lead.verdictId}
                        </span>
                      </td>
                      <td className="table-cell text-xs text-slate-500">
                        {lead.createdAt ? formatDate(lead.createdAt) : '—'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DiagnosisAnalyticsPage;
