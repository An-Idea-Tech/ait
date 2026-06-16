import React from 'react';
import { useLocation } from 'react-router-dom';
import { LogOut, User } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const TITLES = {
  '/admin':             'Dashboard',
  '/admin/services':    'Services',
  '/admin/projects':    'Projects',
  '/admin/blogs':       'Blogs',
  '/admin/feeds':       'Feeds',
  '/admin/testimonials':'Testimonials',
  '/admin/clients':     'Clients',
  '/admin/faqs':        'FAQs',
  '/admin/jobs':        'Jobs',
  '/admin/applications':'Applications',
  '/admin/contacts':    'Contacts',
  '/admin/home-sections':'Home Sections',
};

const Header = () => {
  const { user, logout } = useAuth();
  const { pathname } = useLocation();

  const title = Object.entries(TITLES).reduce((acc, [path, name]) => {
    if (pathname.startsWith(path) && path.length > acc.length) return path;
    return acc;
  }, '/admin');

  return (
    <header className="h-16 shrink-0 border-b border-surface-border bg-surface-card/80 backdrop-blur-md flex items-center justify-between px-6">
      <h1 className="text-lg font-semibold text-slate-100">{TITLES[title]}</h1>

      <div className="flex items-center gap-3">
        {/* User pill */}
        <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-lg bg-surface border border-surface-border">
          <div className="w-7 h-7 rounded-full bg-brand-600/30 border border-brand-500/30 flex items-center justify-center">
            <User className="w-3.5 h-3.5 text-brand-400" />
          </div>
          <span className="text-sm font-medium text-slate-300 max-w-[120px] truncate">
            {user?.name || user?.email || 'Admin'}
          </span>
        </div>

        {/* Logout */}
        <button
          onClick={logout}
          className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-slate-400 hover:text-red-400 hover:bg-red-500/10 border border-transparent hover:border-red-500/20 text-sm font-medium transition-all duration-200"
        >
          <LogOut className="w-4 h-4" />
          <span className="hidden sm:inline">Logout</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
