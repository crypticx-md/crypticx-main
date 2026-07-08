import React, { useState } from 'react';
import {
  FaEnvelope,
  FaFilePdf,
  FaPaperPlane,
  FaPhoneAlt,
  FaTelegram,
  FaUpload,
  FaUser,
  FaWhatsapp
} from 'react-icons/fa';

function Contact() {
  const [selectedFile, setSelectedFile] = useState('');

  return (
    <div className="min-h-screen px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <span className="section-eyebrow">Hello</span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
            Contact us
          </h1>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            Questions about services, trading, or partnerships - we&apos;re here to help.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div className="glass-panel space-y-6 p-8 md:p-10">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-600 dark:text-cyan-300">
                Direct channels
              </p>
              <h2 className="mt-3 text-2xl font-bold text-slate-950 dark:text-white">
                Talk to our team
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                Prefer a quick message? Reach us directly, or use the project
                form and attach your brief as a PDF.
              </p>
            </div>

            <a
              href="mailto:mdfahad041123@gmail.com"
              className="flex items-center gap-4 rounded-2xl border border-slate-200/80 bg-white/50 p-4 transition-all hover:-translate-y-1 hover:border-cyan-500/40 hover:shadow-glow-sm dark:border-white/10 dark:bg-slate-900/40"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-violet-600 text-white">
                <FaEnvelope />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Email
                </p>
                <p className="font-medium text-slate-900 dark:text-white">
                  mdfahad041123@gmail.com
                </p>
              </div>
            </a>

            <a
              href="https://wa.me/353899504694"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-2xl border border-slate-200/80 bg-white/50 p-4 transition-all hover:-translate-y-1 hover:border-emerald-500/40 hover:shadow-glow-sm dark:border-white/10 dark:bg-slate-900/40"
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
              className="flex items-center gap-4 rounded-2xl border border-slate-200/80 bg-white/50 p-4 transition-all hover:-translate-y-1 hover:border-sky-500/40 hover:shadow-glow-sm dark:border-white/10 dark:bg-slate-900/40"
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

          <form
            action="https://formsubmit.co/mdfahad041123@gmail.com"
            method="POST"
            encType="multipart/form-data"
            className="glass-panel relative overflow-hidden p-6 md:p-8"
          >
            <div
              className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-cyan-500/20 blur-3xl dark:bg-cyan-400/10"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -bottom-20 left-8 h-52 w-52 rounded-full bg-violet-600/20 blur-3xl dark:bg-violet-500/10"
              aria-hidden
            />

            <input type="hidden" name="_subject" value="New IT services inquiry from CrypticX" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />

            <div className="relative">
              <span className="section-eyebrow">Project request</span>
              <h2 className="mt-3 text-3xl font-bold text-slate-950 dark:text-white">
                Tell us what you need
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600 dark:text-slate-400">
                Share the essentials and upload your PDF brief. We&apos;ll review
                the details and get back to you with the next best step.
              </p>
            </div>

            <div className="relative mt-8 grid gap-5 sm:grid-cols-2">
              <label className="group block">
                <span className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
                  <FaUser className="text-cyan-500" />
                  Full name
                </span>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your name"
                  className="w-full rounded-2xl border border-slate-200/80 bg-white/80 px-4 py-3 text-slate-900 outline-none transition focus:border-cyan-400 focus:ring-4 focus:ring-cyan-500/10 dark:border-white/10 dark:bg-slate-950/40 dark:text-white"
                />
              </label>

              <label className="group block">
                <span className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
                  <FaEnvelope className="text-violet-500" />
                  Email address
                </span>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="you@company.com"
                  className="w-full rounded-2xl border border-slate-200/80 bg-white/80 px-4 py-3 text-slate-900 outline-none transition focus:border-violet-400 focus:ring-4 focus:ring-violet-500/10 dark:border-white/10 dark:bg-slate-950/40 dark:text-white"
                />
              </label>

              <label className="group block sm:col-span-2">
                <span className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
                  <FaPhoneAlt className="text-emerald-500" />
                  Phone number with country code
                </span>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="+353 89 950 4694"
                  className="w-full rounded-2xl border border-slate-200/80 bg-white/80 px-4 py-3 text-slate-900 outline-none transition focus:border-emerald-400 focus:ring-4 focus:ring-emerald-500/10 dark:border-white/10 dark:bg-slate-950/40 dark:text-white"
                />
              </label>

              <label className="group block sm:col-span-2">
                <span className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
                  <FaPaperPlane className="text-cyan-500" />
                  Message
                </span>
                <textarea
                  name="message"
                  required
                  rows="5"
                  placeholder="Tell us about your project, goals, budget, timeline, or any technical requirements."
                  className="w-full resize-none rounded-2xl border border-slate-200/80 bg-white/80 px-4 py-3 text-slate-900 outline-none transition focus:border-cyan-400 focus:ring-4 focus:ring-cyan-500/10 dark:border-white/10 dark:bg-slate-950/40 dark:text-white"
                />
              </label>

              <label className="group block cursor-pointer sm:col-span-2">
                <span className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
                  <FaFilePdf className="text-rose-500" />
                  Upload PDF
                </span>
                <div className="rounded-2xl border border-dashed border-cyan-300/80 bg-cyan-50/60 p-5 text-center transition group-hover:border-violet-400 group-hover:bg-violet-50/60 dark:border-cyan-400/30 dark:bg-cyan-400/5 dark:group-hover:border-violet-400/50 dark:group-hover:bg-violet-400/10">
                  <input
                    type="file"
                    name="attachment"
                    accept="application/pdf,.pdf"
                    required
                    className="sr-only"
                    onChange={(event) => {
                      setSelectedFile(event.target.files?.[0]?.name || '');
                    }}
                  />
                  <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white text-cyan-600 shadow-md dark:bg-slate-950/70 dark:text-cyan-300">
                    <FaUpload />
                  </span>
                  <p className="mt-3 text-sm font-semibold text-slate-800 dark:text-white">
                    {selectedFile || 'Click to attach your PDF brief'}
                  </p>
                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                    PDF files only, up to 10MB
                  </p>
                </div>
              </label>
            </div>

            <button type="submit" className="btn-primary relative mt-7 w-full gap-2 py-4 text-base">
              Send project request
              <FaPaperPlane />
            </button>

            <p className="relative mt-4 text-center text-xs text-slate-500 dark:text-slate-400">
              Your details and PDF will be submitted to
              {' '}mdfahad041123@gmail.com.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
