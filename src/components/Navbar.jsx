import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaMoon, FaSun } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/trading', label: 'Trading' },
  { to: '/academy', label: 'Academy' },
  { to: '/projects', label: 'Originals' },
  { to: '/about', label: 'About' },
];

export default function Navbar() {
  const { pathname } = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const linkClass = (path) => {
    const active = pathname === path;
    return [
      'relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-300',
      active
        ? 'bg-gradient-to-r from-cyan-500/20 to-violet-600/20 text-cyan-700 shadow-sm dark:text-cyan-200'
        : 'text-slate-600 hover:bg-slate-900/5 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white',
    ].join(' ');
  };

  return (
    <motion.header
      initial={{ y: -12, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className={`sticky top-0 z-50 border-b transition-all duration-500 ${
        scrolled
          ? 'border-slate-200/80 bg-white/75 py-2 shadow-lg shadow-slate-900/5 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/75'
          : 'border-transparent bg-white/40 py-3 backdrop-blur-md dark:bg-slate-950/40'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 lg:px-8">
        <Link to="/" className="group flex items-center gap-3">
          <div
            className={`relative transition-transform duration-300 ${scrolled ? 'scale-90' : 'scale-100'}`}
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-400/30 to-violet-500/30 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
            <img
              src="/logo11.png"
              alt="CrypticX"
              className={`relative h-14 w-14 object-contain md:h-16 md:w-16 ${scrolled ? 'md:h-14 md:w-14' : ''}`}
            />
          </div>
          <span className="bg-gradient-to-r from-cyan-600 to-violet-600 bg-clip-text text-xl font-bold tracking-tight text-transparent dark:from-cyan-300 dark:to-violet-300">
            CrypticX
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map(({ to, label }) => (
            <Link key={to} to={to} className={linkClass(to)}>
              {label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200/80 bg-white/90 text-slate-700 shadow-sm transition-all hover:scale-105 hover:shadow-md dark:border-white/10 dark:bg-slate-900/80 dark:text-amber-200"
            aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDarkMode ? (
              <FaSun className="text-lg text-amber-300" />
            ) : (
              <FaMoon className="text-lg text-slate-600" />
            )}
          </button>

          <button
            type="button"
            onClick={() => setIsMenuOpen((o) => !o)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200/80 bg-white/90 text-slate-700 md:hidden dark:border-white/10 dark:bg-slate-900/80 dark:text-white"
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes className="text-lg" /> : <FaBars className="text-lg" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28 }}
            className="overflow-hidden border-t border-slate-200/80 bg-white/95 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/95 md:hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-4">
              {navItems.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className={`rounded-xl px-4 py-3 text-base font-medium ${
                    pathname === to
                      ? 'bg-gradient-to-r from-cyan-500/15 to-violet-600/15 text-cyan-700 dark:text-cyan-200'
                      : 'text-slate-700 dark:text-slate-200'
                  }`}
                >
                  {label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
