import React, { useState } from 'react';
import {
  FaEnvelope,
  FaFileAlt,
  FaFilePdf,
  FaPaperPlane,
  FaPhoneAlt,
  FaUpload,
  FaUser
} from 'react-icons/fa';
import { SERVICE_INQUIRY_EMAIL } from '../data/services';

function ServiceInquiryForm({ serviceTitle, serviceSlug }) {
  const [selectedFile, setSelectedFile] = useState('');

  return (
    <form
      action={`https://formsubmit.co/${SERVICE_INQUIRY_EMAIL}`}
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

      <input
        type="hidden"
        name="_subject"
        value={`New ${serviceTitle} inquiry from CrypticX`}
      />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="service" value={serviceTitle} />
      <input
        type="hidden"
        name="_next"
        value={`${window.location.origin}/services/${serviceSlug}?submitted=true`}
      />

      <div className="relative">
        <span className="section-eyebrow">Get in touch</span>
        <h2 className="mt-3 text-3xl font-bold text-slate-950 dark:text-white">
          Tell us about your project
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600 dark:text-slate-400">
          Fill in your details and we&apos;ll review your {serviceTitle} request
          and contact you with the next steps.
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
            Contact number
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
            <FaFileAlt className="text-cyan-500" />
            Project description
          </span>
          <textarea
            name="description"
            required
            rows="5"
            placeholder="Describe your goals, timeline, budget, and any technical requirements."
            className="w-full resize-none rounded-2xl border border-slate-200/80 bg-white/80 px-4 py-3 text-slate-900 outline-none transition focus:border-cyan-400 focus:ring-4 focus:ring-cyan-500/10 dark:border-white/10 dark:bg-slate-950/40 dark:text-white"
          />
        </label>

        <label className="group block cursor-pointer sm:col-span-2">
          <span className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
            <FaFilePdf className="text-rose-500" />
            Upload PDF
            <span className="text-xs font-normal text-slate-500">(optional)</span>
          </span>
          <div className="rounded-2xl border border-dashed border-cyan-300/80 bg-cyan-50/60 p-5 text-center transition group-hover:border-violet-400 group-hover:bg-violet-50/60 dark:border-cyan-400/30 dark:bg-cyan-400/5 dark:group-hover:border-violet-400/50 dark:group-hover:bg-violet-400/10">
            <input
              type="file"
              name="attachment"
              accept="application/pdf,.pdf"
              className="sr-only"
              onChange={(event) => {
                setSelectedFile(event.target.files?.[0]?.name || '');
              }}
            />
            <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white text-cyan-600 shadow-md dark:bg-slate-950/70 dark:text-cyan-300">
              <FaUpload />
            </span>
            <p className="mt-3 text-sm font-semibold text-slate-800 dark:text-white">
              {selectedFile || 'Attach a PDF brief if you have one'}
            </p>
            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
              PDF files only, up to 10MB
            </p>
          </div>
        </label>
      </div>

      <button type="submit" className="btn-primary relative mt-7 w-full gap-2 py-4 text-base">
        Submit inquiry
        <FaPaperPlane />
      </button>
    </form>
  );
}

export default ServiceInquiryForm;
