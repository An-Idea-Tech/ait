import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Sun, Moon, Calendar } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
import { handleScrollTop } from '../../utils/scollTop';

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'How we work', href: '/how-we-work' },
  { label: 'Services', href: '/services' },
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
  { label: 'The Method', href: '/the-method' },
  { label: 'Insights', href: '/insights' },
  { label: 'Contact', href: '/contact' }
];

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-dark backdrop-blur-md transition-colors duration-300">
      <div className="flex items-center justify-between h-[72px]  mx-auto px-6">

        {/* Logo */}
        <Link to="/" onClick={handleScrollTop} className="flex items-center gap-2.5 shrink-0" aria-label="An Idea Tech — Home">
          <img
            src="/svg/logo.svg"
            fetchPriority="high"
            alt="An Idea Tech logo - Software Company in Mangaluru"
            className="w-20 lg:w-24 h-auto object-contain"
            width="40"
            height="40"
          />
        </Link>

        {/* Navigation Links — pill container */}
        <nav
          className={`${mobileOpen
            ? 'flex flex-col absolute top-[72px] left-0 right-0 bg-textColor-dark dark:bg-textColor-light p-4 shadow-lg md:shadow-none'
            : 'hidden'
            } xl:flex xl:static xl:flex-row xl:p-0 items-center gap-1 xl:px-2 xl:py-1.5  xl:rounded-full xl:bg-white`}
          aria-label="Main navigation"
        >
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              className={({ isActive }) => `px-5 py-2 text-sm font-medium rounded-full transition-all duration-200 whitespace-nowrap ${
                isActive
                ? 'text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-800'
                : 'text-dark dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800/50'
                } ${mobileOpen ? 'w-full text-left py-3 px-4' : ''}`}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-4 shrink-0">

          {/* Theme Toggle */}
          <button
            className="relative w-[52px] h-7 rounded-full bg-navy dark:bg-cream cursor-pointer transition-colors duration-300 border-0 p-0 flex items-center"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            <span className="absolute top-[3px] left-[3px] w-[22px] h-[22px] rounded-full bg-white dark:bg-gray-800 shadow-sm transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] dark:translate-x-6 flex items-center justify-center">
              {theme === 'light' ? (
                <Sun className="w-3.5 h-3.5 text-amber-500" />
              ) : (
                <Moon className="w-3.5 h-3.5 text-blue-300" />
              )}
            </span>
          </button>

          {/* Book a Call CTA */}
          <a
            href="/contact#book"
            className="hidden sm:flex items-center gap-2 px-5 py-2.5  rounded-full text-sm font-semibold text-dark dark:text-light bg-white shadow hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200 whitespace-nowrap"
            id="navbar-book-a-call"
          >
            <Calendar className="w-4 h-4 opacity-70" />
            Book a Call
          </a>

          {/* Mobile Menu Toggle */}
          <button
            className="flex xl:hidden flex-col gap-[5px] p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
          >
            <span className="block w-[22px] h-0.5 bg-gray-900 dark:bg-gray-100 rounded-sm transition-all duration-300" />
            <span className="block w-[22px] h-0.5 bg-gray-900 dark:bg-gray-100 rounded-sm transition-all duration-300" />
            <span className="block w-[22px] h-0.5 bg-gray-900 dark:bg-gray-100 rounded-sm transition-all duration-300" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default React.memo(Navbar);
