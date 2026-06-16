import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
  LayoutDashboard, Briefcase, FolderKanban, BookOpen, Radio,
  Star, Users, HelpCircle, Building2, FileText, Phone, Home,
  ChevronLeft, ChevronRight, Zap,
} from 'lucide-react';

const navItems = [
  { label: 'Dashboard',    to: '/admin',                icon: LayoutDashboard },
  { label: 'Services',     to: '/admin/services',       icon: Briefcase },
  { label: 'Projects',     to: '/admin/projects',       icon: FolderKanban },
  { label: 'Blogs',        to: '/admin/blogs',          icon: BookOpen },
  { label: 'Feeds',        to: '/admin/feeds',          icon: Radio },
  { label: 'Testimonials', to: '/admin/testimonials',   icon: Star },
  { label: 'Clients',      to: '/admin/clients',        icon: Building2 },
  { label: 'FAQs',         to: '/admin/faqs',           icon: HelpCircle },
  { label: 'Jobs',         to: '/admin/jobs',           icon: FileText },
  { label: 'Applications', to: '/admin/applications',   icon: Users },
  { label: 'Contacts',     to: '/admin/contacts',       icon: Phone },
  { label: 'Home Sections',to: '/admin/home-sections',  icon: Home },
  { label: 'Diagnosis',    to: '/admin/diagnosis',      icon: Zap },
];

const Sidebar = ({ collapsed, onToggle }) => {
  const location = useLocation();

  return (
    <aside
      className={`${collapsed ? 'w-16' : 'w-64'} flex flex-col shrink-0 bg-surface-card border-r border-surface-border transition-all duration-300 ease-in-out relative`}
    >
      {/* Logo */}
      <div className={`flex items-center gap-3 px-4 py-5 border-b border-surface-border ${collapsed ? 'justify-center' : ''}`}>
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br flex items-center justify-center shrink-0">
          <img src="/images/logo.png" alt="Logo" className="w-4.5 h-4.5 text-white" />
        </div>
        {!collapsed && (
          <div>
            <p className="text-sm font-bold text-slate-100 leading-none">An Idea Tech</p>
            <p className="text-xs text-slate-500 mt-0.5">Admin Panel</p>
          </div>
        )}
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto py-3 px-2 flex flex-col gap-0.5">
        {navItems.map(({ label, to, icon: Icon }) => {
          const isActive = to === '/admin'
            ? location.pathname === '/admin'
            : location.pathname.startsWith(to);

          return (
            <NavLink
              key={to}
              to={to}
              title={collapsed ? label : undefined}
              className={isActive ? 'nav-link-active' : 'nav-link'}
              end={to === '/admin'}
            >
              <Icon className="w-4.5 h-4.5 shrink-0" />
              {!collapsed && <span className="truncate">{label}</span>}
            </NavLink>
          );
        })}
      </nav>

      {/* Collapse toggle */}
      <button
        onClick={onToggle}
        className="absolute -right-3 top-20 w-6 h-6 rounded-full bg-surface-card border border-surface-border text-slate-400 hover:text-slate-100 hover:border-brand-500 flex items-center justify-center transition-all duration-200 z-10"
      >
        {collapsed ? <ChevronRight className="w-3.5 h-3.5" /> : <ChevronLeft className="w-3.5 h-3.5" />}
      </button>
    </aside>
  );
};

export default Sidebar;
