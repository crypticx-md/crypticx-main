import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CONTACT_EMAIL } from '../data/contact';
import { FaWhatsapp, FaTelegram, FaEnvelope } from 'react-icons/fa';

function Footer() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const contacts = [
    { number: '+447400754677', type: 'whatsapp', label: 'UK' },
    { number: '+353899504694', type: 'both', label: 'Ireland' },
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
              A venture studio that builds AI products, SaaS businesses, digital platforms, trading technology, educational programs, and future technology ventures.
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
                  href="https://t.me/353899504694"
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
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="break-all text-sm text-slate-400 hover:text-cyan-300"
                >
                  {CONTACT_EMAIL}
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-500">
              Start a project
            </h3>
            <p className="mb-4 text-sm text-slate-400">
              Need a website, web app, or mobile app? Tell us about your project and get a tailored response.
            </p>
            <Link to="/contact" className="inline-flex rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90">
              Request a quote
            </Link>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center">

  {/* Legal Links */}
  <div className="mb-6 flex flex-wrap justify-center gap-6 text-sm text-slate-400">
    <a
      href="/privacy-policy"
      className="transition hover:text-cyan-400"
    >
      Privacy Policy
    </a>

    <a
      href="/terms-and-conditions"
      className="transition hover:text-cyan-400"
    >
      Terms & Conditions
    </a>

    <a
      href="/cookie-policy"
      className="transition hover:text-cyan-400"
    >
      Cookie Policy
    </a>


  </div>

  {/* Company Information */}
  <div className="space-y-2 text-sm text-slate-500">

    <p className="text-base font-semibold text-white">
      CRYPTICX TECHNOLOGIES Ltd
    </p>

    <p>
      Registered in England and Wales
    </p>

    <p>
      Company Number: <span className="text-slate-300">17374203</span>
    </p>

    <p>
      Registered Office:
      <br />
      <span className="text-slate-300">
        128 City Road, London, United Kingdom, EC1V 2NX
      </span>
    </p>

    <p>
      Email:&nbsp;
      <a
        href={`mailto:${CONTACT_EMAIL}`}
        className="text-cyan-400 hover:text-cyan-300"
      >
        {CONTACT_EMAIL}
      </a>
    </p>

    <p className="pt-4 text-slate-600">
      © {new Date().getFullYear()} CrypticX Ltd. All rights reserved.
    </p>

  </div>

</div>
      </div>
    </footer>
  );
}

export default Footer;
