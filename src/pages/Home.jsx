import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaRocket,
  FaChartLine,
  FaGraduationCap,
  FaCode,
  FaRobot,
  FaArrowRight,
  FaStar,
} from 'react-icons/fa';

const fadeIn = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

function Home() {
  const banners = [
    {
      id: 1,
      title: 'Innovative Tech Solutions',
      description: 'Building cutting-edge technology for tomorrow\'s challenges',
      bgColor: 'from-slate-900 via-indigo-950 to-violet-950',
      image:
        'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1600',
      buttonText: 'Explore Services',
      to: '/services',
      icon: <FaCode className="text-6xl" />,
    },
    {
      id: 2,
      title: 'Expert Crypto Trading',
      description: 'Navigate the crypto market with confidence and expertise',
      bgColor: 'from-emerald-950 via-teal-950 to-cyan-950',
      image:
        'https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=1600',
      buttonText: 'Trading Solutions',
      to: '/trading',
      icon: <FaChartLine className="text-6xl" />,
    },
    {
      id: 3,
      title: 'Learn and Grow',
      description: 'Join our academy and master the skills of tomorrow',
      bgColor: 'from-violet-950 via-indigo-950 to-slate-950',
      image:
        'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1600',
      buttonText: 'Join Academy',
      to: '/academy',
      icon: <FaGraduationCap className="text-6xl" />,
    },
    {
      id: 4,
      title: 'Blockchain Development',
      description: 'Secure, transparent, and innovative blockchain solutions',
      bgColor: 'from-fuchsia-950 via-purple-950 to-slate-950',
      image:
        'https://images.unsplash.com/photo-1639762681057-408e52192e55?auto=format&fit=crop&q=80&w=1600',
      buttonText: 'Discover More',
      to: '/services',
      icon: <FaRobot className="text-6xl" />,
    },
    {
      id: 5,
      title: 'AI & Machine Learning',
      description: 'Intelligent solutions powered by cutting-edge AI technology',
      bgColor: 'from-cyan-950 via-blue-950 to-indigo-950',
      image:
        'https://images.unsplash.com/photo-1677442135136-760c813029fb?auto=format&fit=crop&q=80&w=1600',
      buttonText: 'AI Solutions',
      to: '/services',
      icon: <FaRocket className="text-6xl" />,
    },
  ];

  const [currentBanner, setCurrentBanner] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 5500);
    return () => clearInterval(interval);
  }, [banners.length]);

  const divisions = [
    {
      title: 'Tech Division',
      desc: 'Web, mobile, and AI — engineered for scale.',
      icon: FaCode,
      gradient: 'from-cyan-500 to-blue-600',
      border: 'border-cyan-500/20',
      items: ['Web Development', 'Mobile Apps', 'AI Solutions'],
    },
    {
      title: 'Trading Division',
      desc: 'Signals, structure, and risk-aware strategies.',
      icon: FaChartLine,
      gradient: 'from-emerald-500 to-teal-600',
      border: 'border-emerald-500/20',
      items: ['Market Analysis', 'Trading Signals', 'Risk Management'],
    },
    {
      title: 'Academy',
      desc: 'Courses and mentorship for the next generation.',
      icon: FaGraduationCap,
      gradient: 'from-violet-500 to-fuchsia-600',
      border: 'border-violet-500/20',
      items: ['Programming', 'Trading Skills', 'Career Support'],
    },
  ];

  const stats = [
    { value: '10K+', label: 'Active learners' },
    { value: '50M+', label: 'Trading volume' },
    { value: '100+', label: 'Projects shipped' },
    { value: '95%', label: 'Satisfaction' },
  ];

  return (
    <div className="w-full">
      {/* Hero carousel */}
      <section className="relative h-[min(88vh,900px)] w-full overflow-hidden">
        {banners.map((banner, index) => (
          <div
            key={banner.id}
            className={`absolute inset-0 transition-opacity duration-[1200ms] ease-out ${
              index === currentBanner ? 'z-[1] opacity-100' : 'z-0 opacity-0'
            }`}
          >
            <div
              className={`relative h-full bg-gradient-to-br ${banner.bgColor}`}
            >
              <div
                className="absolute inset-0 scale-105 bg-cover bg-center opacity-40 transition-transform duration-[20s] ease-linear"
                style={{
                  backgroundImage: `url(${banner.image})`,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />
              <div className="absolute inset-0 bg-hero-shine opacity-30" />

              <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
                <motion.div
                  key={banner.id}
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md md:h-24 md:w-24"
                >
                  {React.cloneElement(banner.icon, {
                    className: 'text-4xl text-white md:text-5xl',
                  })}
                </motion.div>
                <motion.h1
                  className="max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
                  {...fadeIn}
                  transition={{ delay: 0.05 }}
                >
                  {banner.title}
                </motion.h1>
                <motion.p
                  className="mt-4 max-w-2xl text-lg text-slate-200 md:text-xl"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                >
                  {banner.description}
                </motion.p>
                <motion.div
                  className="mt-10"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                >
                  <Link
                    to={banner.to}
                    className="btn-primary inline-flex gap-2 shadow-glow-md"
                  >
                    {banner.buttonText}
                    <FaArrowRight className="text-sm" />
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        ))}

        <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center gap-2">
          {banners.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrentBanner(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentBanner
                  ? 'w-8 bg-cyan-400'
                  : 'w-2 bg-white/40 hover:bg-white/60'
              }`}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="absolute bottom-4 left-1/2 z-20 -translate-x-1/2 animate-bounce text-white/50">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-eyebrow">
            <FaStar className="mr-2 inline text-xs" />
            What we do
          </span>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
            Three divisions,{' '}
            <span className="text-gradient">one mission</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            Technology, markets, and education — integrated so you can build with confidence.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3">
          {divisions.map((d, i) => (
            <motion.div
              key={d.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`glass-card group border ${d.border}`}
            >
              <div
                className={`mb-6 inline-flex rounded-2xl bg-gradient-to-br ${d.gradient} p-4 shadow-lg`}
              >
                <d.icon className="text-3xl text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                {d.title}
              </h3>
              <p className="mt-2 text-slate-600 dark:text-slate-400">{d.desc}</p>
              <ul className="mt-6 space-y-2">
                {d.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="glass-panel relative mt-20 overflow-hidden p-8 md:p-12"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyan-500/20 blur-3xl" />
          <div className="absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-violet-600/20 blur-3xl" />
          <div className="relative grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl font-bold text-slate-900 dark:text-white md:text-4xl">
                  {s.value}
                </div>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mt-20 rounded-3xl border border-slate-200/80 bg-gradient-to-br from-slate-900 to-slate-800 p-10 text-center dark:border-white/10 dark:from-slate-900 dark:to-violet-950/50"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Ready to move forward?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-300">
            Start with services, trading insights, or the academy — pick your path and we&apos;ll meet you there.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/services" className="btn-primary">
              Explore services
            </Link>
            <Link to="/about" className="btn-secondary border-white/20 bg-white/10 text-white hover:bg-white/20">
              About CrypticX
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Home;
