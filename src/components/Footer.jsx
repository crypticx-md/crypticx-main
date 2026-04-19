import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaTelegram, FaEnvelope } from 'react-icons/fa';

function Footer() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const contacts = [
    { number: '+353899504694', type: 'both', label: 'Ireland' },
    { number: '+923181010080', type: 'whatsapp', label: 'Pakistan' },
  ];

  const quickLinks = [
    { to: '/', label: 'Home' },
    { to: '/services', label: 'Services' },
    { to: '/trading', label: 'Trading' },
    { to: '/academy', label: 'Academy' },
    { to: '/projects', label: 'CrypticX Originals' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <footer className="relative mt-auto border-t border-slate-200/80 bg-slate-950 text-slate-300 dark:border-white/10">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-xl font-bold text-transparent">
              CrypticX
            </h3>
            <p className="max-w-xs text-sm leading-relaxed text-slate-400">
              Technology, trading, and education — built for clarity and long-term growth in the digital economy.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-500">
              Explore
            </h3>
            <ul className="space-y-2">
              {quickLinks.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-sm text-slate-400 transition-colors hover:text-cyan-300"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-500">
              Contact
            </h3>
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-emerald-900/30 transition-transform hover:scale-105"
                    title="WhatsApp"
                    aria-expanded={isDropdownOpen}
                  >
                    <FaWhatsapp className="text-lg" />
                  </button>

                  {isDropdownOpen && (
                    <div className="absolute bottom-full left-0 z-50 mb-2 w-48 rounded-xl border border-white/10 bg-slate-900 py-2 shadow-xl">
                      {contacts.map((contact, idx) => (
                        <a
                          key={idx}
                          href={`https://wa.me/${contact.number.replace('+', '')}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center px-4 py-2 text-sm text-slate-300 hover:bg-white/5"
                        >
                          <FaWhatsapp className="mr-2 text-[#25D366]" />
                          {contact.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>

                <a
                  href={`https://t.me/${contacts[0].number.replace('+', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0088cc] text-white shadow-lg shadow-sky-900/30 transition-transform hover:scale-105"
                  title="Telegram"
                >
                  <FaTelegram className="text-lg" />
                </a>
              </div>

              <div className="flex items-start gap-2">
                <FaEnvelope className="mt-0.5 shrink-0 text-slate-500" />
                <a
                  href="mailto:crypticxglobal@gmail.com"
                  className="break-all text-sm text-slate-400 hover:text-cyan-300"
                >
                  crypticxglobal@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-500">
              Updates
            </h3>
            <p className="mb-4 text-sm text-slate-400">
              Subscribe for product news and academy openings.
            </p>
            <form
              className="relative"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="you@email.com"
                className="w-full rounded-xl border border-white/10 bg-slate-900/80 py-3 pl-4 pr-24 text-sm text-white placeholder-slate-500 outline-none ring-cyan-500/40 transition-shadow focus:ring-2"
                aria-label="Newsletter email"
              />
              <button
                type="submit"
                className="absolute right-1.5 top-1/2 -translate-y-1/2 rounded-lg bg-gradient-to-r from-cyan-500 to-violet-600 px-3 py-1.5 text-xs font-semibold text-white"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-slate-500">
          &copy; {new Date().getFullYear()} CrypticX. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
