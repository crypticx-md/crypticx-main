import React from 'react';
import { FaEnvelope, FaWhatsapp, FaTelegram } from 'react-icons/fa';

function Contact() {
  return (
    <div className="min-h-screen px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <div className="mb-12 text-center">
          <span className="section-eyebrow">Hello</span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
            Contact us
          </h1>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            Questions about services, trading, or partnerships — we&apos;re here to help.
          </p>
        </div>

        <div className="glass-panel space-y-6 p-8 md:p-10">
          <a
            href="mailto:crypticxglobal@gmail.com"
            className="flex items-center gap-4 rounded-2xl border border-slate-200/80 bg-white/50 p-4 transition-all hover:border-cyan-500/40 dark:border-white/10 dark:bg-slate-900/40"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-violet-600 text-white">
              <FaEnvelope />
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Email
              </p>
              <p className="font-medium text-slate-900 dark:text-white">
                crypticxglobal@gmail.com
              </p>
            </div>
          </a>

          <a
            href="https://wa.me/353899504694"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 rounded-2xl border border-slate-200/80 bg-white/50 p-4 transition-all hover:border-emerald-500/40 dark:border-white/10 dark:bg-slate-900/40"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#25D366] text-white">
              <FaWhatsapp />
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                WhatsApp
              </p>
              <p className="font-medium text-slate-900 dark:text-white">
                Ireland & Pakistan numbers
              </p>
            </div>
          </a>

          <a
            href="https://t.me/353899504694"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 rounded-2xl border border-slate-200/80 bg-white/50 p-4 transition-all hover:border-sky-500/40 dark:border-white/10 dark:bg-slate-900/40"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0088cc] text-white">
              <FaTelegram />
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Telegram
              </p>
              <p className="font-medium text-slate-900 dark:text-white">
                Message the team
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
