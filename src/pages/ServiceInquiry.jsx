import React from 'react';
import { Link, Navigate, useParams, useSearchParams } from 'react-router-dom';
import { FaArrowLeft, FaCheckCircle } from 'react-icons/fa';
import ServiceInquiryForm from '../components/ServiceInquiryForm';
import { getServiceBySlug } from '../data/services';

function ServiceInquiry() {
  const { slug } = useParams();
  const [searchParams] = useSearchParams();
  const service = getServiceBySlug(slug);
  const submitted = searchParams.get('submitted') === 'true';

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const Icon = service.icon;

  return (
    <div className="min-h-screen px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <Link
          to="/services"
          className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-slate-600 transition hover:text-cyan-600 dark:text-slate-400 dark:hover:text-cyan-300"
        >
          <FaArrowLeft />
          Back to services
        </Link>

        {submitted && (
          <div className="mb-8 flex items-start gap-3 rounded-2xl border border-emerald-200 bg-emerald-50/80 p-4 text-emerald-800 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-200">
            <FaCheckCircle className="mt-0.5 shrink-0 text-lg" />
            <div>
              <p className="font-semibold">Inquiry sent successfully</p>
              <p className="mt-1 text-sm opacity-90">
                Thank you for your interest in {service.title}. Our team will
                contact you shortly.
              </p>
            </div>
          </div>
        )}

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className={`glass-panel overflow-hidden bg-gradient-to-br ${service.bgColor} p-8 md:p-10`}>
            <div className="flex justify-center">
              <div
                className={`flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-tr ${service.iconBg} shadow-lg`}
              >
                <Icon className="text-5xl text-white" />
              </div>
            </div>

            <div className="mt-8 text-center lg:text-left">
              <span className="section-eyebrow">{service.title}</span>
              <h1 className="mt-4 text-3xl font-bold text-slate-900 dark:text-white md:text-4xl">
                Let&apos;s build something great
              </h1>
              <p className="mt-4 text-slate-600 dark:text-slate-300">
                {service.description}
              </p>
            </div>

            <ul className="mt-8 space-y-3 text-slate-600 dark:text-slate-300">
              {service.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <span className={service.checkColor}>✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <ServiceInquiryForm serviceTitle={service.title} serviceSlug={service.slug} />
        </div>
      </div>
    </div>
  );
}

export default ServiceInquiry;
