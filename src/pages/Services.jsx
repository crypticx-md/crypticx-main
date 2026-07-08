import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaChartLine, FaRobot, FaShieldAlt, FaUsers } from 'react-icons/fa';
import { bannerServices, services } from '../data/services';

function Services() {
  const [currentBanner, setCurrentBanner] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % bannerServices.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen w-full text-slate-900 dark:text-slate-100">
      <div className="relative mb-12 h-[60vh] w-full overflow-hidden sm:h-[70vh]">
        {bannerServices.map((banner, index) => {
          const BannerIcon = banner.icon;

          return (
            <div
              key={banner.slug}
              className={`absolute inset-0 h-full w-full transition-opacity duration-1000 ease-in-out ${
                index === currentBanner ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className={`relative h-full bg-gradient-to-r ${banner.bannerGradient}`}>
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-30"
                  style={{ backgroundImage: `url(${banner.bannerImage})` }}
                />
                <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-white">
                  <div className="mb-8 transform text-white transition-transform duration-300 hover:scale-110">
                    <BannerIcon className="text-6xl" />
                  </div>
                  <h1 className="animate-fade-in mb-4 text-center text-4xl font-bold text-white md:text-5xl">
                    {banner.title}
                  </h1>
                  <p className="animate-fade-in-delay mb-8 max-w-2xl text-center text-xl text-white/90 md:text-2xl">
                    {banner.bannerDescription}
                  </p>
                </div>
              </div>
            </div>
          );
        })}

        <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center gap-2">
          {bannerServices.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentBanner(index)}
              className={`h-3 w-3 rounded-full transition-all duration-300 ${
                index === currentBanner ? 'scale-125 bg-secondary' : 'bg-white bg-opacity-50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12">
        <h1 className="animate-fade-in mb-12 text-center text-4xl font-bold text-slate-900 dark:text-white md:text-5xl">
          Our Services
        </h1>

        <div className="mb-16 grid gap-8 md:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <Link
                key={service.slug}
                to={`/services/${service.slug}`}
                className={`group block ${service.gridClass || ''}`}
              >
                <div
                  className={`h-full rounded-2xl border bg-gradient-to-br p-8 shadow-xl backdrop-blur-md transition-all duration-300 hover:scale-105 hover:shadow-2xl ${service.bgColor} ${service.borderColor}`}
                >
                  <div className="mb-6 flex justify-center">
                    <div
                      className={`flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-tr p-6 shadow-lg transition-all duration-300 group-hover:rotate-12 ${service.iconBg} ${service.iconShadow}`}
                    >
                      <Icon className="text-5xl text-white" />
                    </div>
                  </div>
                  <h3 className="mb-4 text-center text-2xl font-bold text-slate-900 dark:text-white">
                    {service.title}
                  </h3>
                  <p className="mb-6 text-center text-gray-600 dark:text-gray-300">
                    {service.description}
                  </p>
                  <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center space-x-2">
                        <span className={service.checkColor}>✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6 text-center text-sm font-semibold text-cyan-600 transition group-hover:text-violet-600 dark:text-cyan-300 dark:group-hover:text-violet-300">
                    Request this service →
                  </p>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mb-16 rounded-2xl p-12">
          <h2 className="mb-8 text-center text-3xl font-bold text-slate-900 dark:text-white">
            Why Choose Our Services?
          </h2>
          <div className="grid gap-8 md:grid-cols-4">
            <div className="group rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50 to-blue-100 p-8 text-slate-900 shadow-xl backdrop-blur-md transition-all duration-300 hover:scale-105 hover:shadow-2xl dark:border-blue-800 dark:from-blue-900/20 dark:to-blue-800/20 dark:text-white">
              <div className="mb-6 flex justify-center">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-tr from-blue-600 to-blue-400 p-6 shadow-lg transition-all duration-300 group-hover:rotate-12 group-hover:shadow-blue-500/50">
                  <FaChartLine className="text-5xl text-white" />
                </div>
              </div>
              <h3 className="mb-2 text-center text-2xl font-bold">Proven Results</h3>
              <p className="text-center text-gray-600 dark:text-gray-300">
                Consistent delivery of high-quality solutions
              </p>
            </div>

            <div className="group rounded-2xl border border-pink-200 bg-gradient-to-br from-pink-50 to-pink-100 p-8 text-slate-900 shadow-xl backdrop-blur-md transition-all duration-300 hover:scale-105 hover:shadow-2xl dark:border-pink-800 dark:from-pink-900/20 dark:to-pink-800/20 dark:text-white">
              <div className="mb-6 flex justify-center">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-tr from-pink-600 to-pink-400 p-6 shadow-lg transition-all duration-300 group-hover:rotate-12 group-hover:shadow-pink-500/50">
                  <FaShieldAlt className="text-5xl text-white" />
                </div>
              </div>
              <h3 className="mb-2 text-center text-2xl font-bold">Security First</h3>
              <p className="text-center text-gray-600 dark:text-gray-300">
                Enterprise-grade security measures
              </p>
            </div>

            <div className="group rounded-2xl border border-green-200 bg-gradient-to-br from-green-50 to-green-100 p-8 text-slate-900 shadow-xl backdrop-blur-md transition-all duration-300 hover:scale-105 hover:shadow-2xl dark:border-green-800 dark:from-green-900/20 dark:to-green-800/20 dark:text-white">
              <div className="mb-6 flex justify-center">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-tr from-green-600 to-green-400 p-6 shadow-lg transition-all duration-300 group-hover:rotate-12 group-hover:shadow-green-500/50">
                  <FaUsers className="text-5xl text-white" />
                </div>
              </div>
              <h3 className="mb-2 text-center text-2xl font-bold">Expert Team</h3>
              <p className="text-center text-gray-600 dark:text-gray-300">
                Skilled professionals with years of experience
              </p>
            </div>

            <div className="group rounded-2xl border border-orange-200 bg-gradient-to-br from-orange-50 to-orange-100 p-8 text-slate-900 shadow-xl backdrop-blur-md transition-all duration-300 hover:scale-105 hover:shadow-2xl dark:border-orange-800 dark:from-orange-900/20 dark:to-orange-800/20 dark:text-white">
              <div className="mb-6 flex justify-center">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-tr from-orange-600 to-orange-400 p-6 shadow-lg transition-all duration-300 group-hover:rotate-12 group-hover:shadow-orange-500/50">
                  <FaRobot className="text-5xl text-white" />
                </div>
              </div>
              <h3 className="mb-2 text-center text-2xl font-bold">Innovation</h3>
              <p className="text-center text-gray-600 dark:text-gray-300">
                Cutting-edge technology solutions
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white md:text-4xl">
            Ready to Transform Your Business?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-600 dark:text-gray-400">
            Let&apos;s discuss how our services can help you achieve your goals.
          </p>
          <Link
            to={`/services/${services[0].slug}`}
            className="inline-block rounded-full bg-secondary px-8 py-4 font-bold text-white transition-all duration-300 hover:scale-105 hover:bg-secondary-dark hover:shadow-lg"
          >
            Get Started Now
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Services;
