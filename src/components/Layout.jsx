import React, { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

function Layout() {
  const [theme, setTheme] = useState('dark');
  const location = useLocation();

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    document.documentElement.classList.add('dark');
    if (savedTheme === 'light') {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <div className="min-h-screen bg-white dark:bg-dark text-black dark:text-white">
      <header className="fixed top-0 left-0 right-0 w-full z-50">
        <Navbar toggleDarkMode={toggleTheme} darkMode={theme === 'dark'} />
      </header>
      
      <main className="pt-24">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Layout;