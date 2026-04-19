import React from 'react';
import { motion } from 'framer-motion';
import { FaGamepad, FaCoins, FaBrain, FaChartLine } from 'react-icons/fa';

const projects = [
  {
    title: 'Conqueror Game',
    description:
      'A strategy-driven game concept initiated by CrypticX, designed to combine engaging gameplay with a broader digital ecosystem and expansion potential.',
    status: 'In Development',
    category: 'Gaming',
    icon: FaGamepad,
    accent: 'from-amber-500 to-orange-600',
  },
  {
    title: 'Conqueror Coin (CQR)',
    description:
      'A digital coin connected to the Conqueror ecosystem, created to support the long-term vision of integrating blockchain utility with the game environment.',
    status: 'Concept / Development Stage',
    category: 'Web3 / Blockchain',
    icon: FaCoins,
    accent: 'from-cyan-500 to-blue-600',
  },
  {
    title: 'AI Assignment Management',
    description:
      'An AI-powered platform idea focused on simplifying assignment handling, tracking, and academic workflow support for students and educational use cases.',
    status: 'In Planning',
    category: 'AI / Education',
    icon: FaBrain,
    accent: 'from-violet-500 to-fuchsia-600',
  },
  {
    title: 'TradeMind AI',
    description:
      'An AI-powered trading intelligence platform built to analyze markets, generate trade setups, and provide professional-grade insights for traders.',
    status: 'In Development',
    category: 'AI / FinTech',
    icon: FaChartLine,
    accent: 'from-emerald-500 to-teal-600',
  },
];

function OurProjects() {
  return (
    <div className="min-h-screen px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-eyebrow">Portfolio</span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl lg:text-6xl">
            CrypticX <span className="text-gradient">Originals</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            Original products and ideas — from AI and trading technology to gaming and blockchain.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="glass-card group relative overflow-hidden border border-slate-200/60 p-8 dark:border-white/10"
            >
              <div
                className={`mb-6 inline-flex rounded-2xl bg-gradient-to-br ${project.accent} p-4 shadow-lg transition-transform group-hover:scale-105`}
              >
                <project.icon className="text-2xl text-white" />
              </div>
              <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  {project.title}
                </h2>
                <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-cyan-700 dark:text-cyan-300">
                  {project.category}
                </span>
              </div>
              <p className="leading-relaxed text-slate-600 dark:text-slate-400">
                {project.description}
              </p>
              <div className="mt-6 flex items-center gap-2 border-t border-slate-200/80 pt-6 dark:border-white/10">
                <span className="text-sm text-slate-500 dark:text-slate-500">Status</span>
                <span className="text-sm font-medium text-violet-600 dark:text-violet-300">
                  {project.status}
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurProjects;
