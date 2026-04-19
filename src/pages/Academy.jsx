import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaArrowRight } from 'react-icons/fa';

export default function Academy() {
  return (
    <div className="min-h-[calc(100vh-12rem)] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="glass-panel relative overflow-hidden p-10 md:p-14"
        >
          <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-violet-500/20 blur-3xl" />
          <div className="absolute -bottom-12 -left-12 h-40 w-40 rounded-full bg-cyan-500/20 blur-3xl" />

          <div className="relative mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br from-cyan-500 to-violet-600 shadow-glow-md">
            <FaGraduationCap className="text-4xl text-white" />
          </div>

          <span className="section-eyebrow">Academy</span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
            Coming soon
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-slate-600 dark:text-slate-400">
            We&apos;re building expert-led courses, interactive workshops, and hands-on projects so you can master new skills with structure and support.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link to="/services" className="btn-primary inline-flex gap-2">
              Explore services
              <FaArrowRight className="text-sm" />
            </Link>
            <Link to="/" className="btn-secondary">
              Back home
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
