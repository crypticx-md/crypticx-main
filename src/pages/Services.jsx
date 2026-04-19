import React, { useState, useEffect } from 'react';
import { FaLaptopCode, FaRobot, FaMobileAlt, FaBitcoin, FaPalette, FaCloud, FaShieldAlt, FaChartLine, FaUsers, FaEthereum } from 'react-icons/fa';

function Services() {
  // 5 banners for services
  const banners = [
    {
      id: 1,
      title: "Web Development",
      description: "Modern, responsive websites that engage your audience.",
      bgColor: "from-blue-900 to-purple-900",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=1000",
      icon: <FaLaptopCode className="text-6xl" />
    },
    {
      id: 2,
      title: "AI Solutions",
      description: "Intelligent systems to automate and enhance decision-making.",
      bgColor: "from-emerald-800 to-teal-900",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=1000",
      icon: <FaRobot className="text-6xl" />
    },
    {
      id: 3,
      title: "Mobile Applications",
      description: "Native and cross-platform apps for exceptional user experiences.",
      bgColor: "from-indigo-900 to-violet-900",
      image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&q=80&w=1000",
      icon: <FaMobileAlt className="text-6xl" />
    },
    {
      id: 4,
      title: "Blockchain Development",
      description: "Secure, transparent, and innovative blockchain solutions.",
      bgColor: "from-purple-900 to-pink-900",
      image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&q=80&w=1000",
      icon: <FaBitcoin className="text-6xl" />
    },
    {
      id: 5,
      title: "Cloud Integration",
      description: "Seamless cloud solutions for scalability and reliability.",
      bgColor: "from-blue-800 to-cyan-900",
      image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&q=80&w=1000",
      icon: <FaCloud className="text-6xl" />
    },
    {
      id: 6,
      title: "Blockchain & Web3 Solutions",
      description: "Cutting-edge blockchain and Web3 development services.",
      bgColor: "from-orange-900 to-red-900",
      image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?auto=format&fit=crop&q=80&w=1000",
      icon: <FaShieldAlt className="text-6xl" />
    },
    {
      id: 7,
      title: "UI/UX Design",
      description: "Beautiful and intuitive user interfaces that enhance user experience.",
      bgColor: "from-pink-800 to-rose-900",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=1000",
      icon: <FaPalette className="text-6xl" />
    },
    {
      id: 8,
      title: "NFTs & Smart Contracts",
      description: "Create, deploy, and manage NFTs and smart contracts on blockchain networks.",
      bgColor: "from-violet-900 to-indigo-900",
      image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?auto=format&fit=crop&q=80&w=1000",
      icon: <FaEthereum className="text-6xl" />
    }
  ];

  const [currentBanner, setCurrentBanner] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [banners.length]);

  return (
    <div className="min-h-screen w-full text-slate-900 dark:text-slate-100">
      {/* Banner Slider */}
      <div className="relative h-[60vh] sm:h-[70vh] w-full overflow-hidden mb-12">
        {banners.map((banner, index) => (
          <div
            key={banner.id}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              index === currentBanner ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className={`relative h-full bg-gradient-to-r ${banner.bgColor}`}>
              {/* Overlay Image */}
              <div 
                className="absolute inset-0 opacity-30 bg-cover bg-center"
                style={{ backgroundImage: `url(${banner.image})` }}
              ></div>
              {/* Content */}
              <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-4">
                <div className="transform hover:scale-110 transition-transform duration-300 mb-8 text-white">
                  {banner.icon}
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center animate-fade-in text-white">
                  {banner.title}
                </h1>
                <p className="text-xl md:text-2xl mb-8 max-w-2xl text-center animate-fade-in-delay text-white/90">
                  {banner.description}
                </p>
              </div>
            </div>
          </div>
        ))}
        {/* Indicators */}
        <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-20">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentBanner(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentBanner ? 'bg-secondary scale-125' : 'bg-white bg-opacity-50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-12 text-center animate-fade-in">
          Our Services
        </h1>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* First Row - 3 Columns */}
          {/* Web Development */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 backdrop-blur-md rounded-2xl shadow-xl p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-blue-200 dark:border-blue-800 group">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-tr from-blue-600 to-blue-400 rounded-full p-6 shadow-lg group-hover:shadow-blue-500/50 transition-all duration-300 transform group-hover:rotate-12 flex items-center justify-center w-24 h-24">
                <FaLaptopCode className="text-5xl text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 text-center">Web Development</h3>
            <p className="text-gray-600 dark:text-gray-300 text-center mb-6">
              Build modern, responsive websites that engage your audience and drive results.
            </p>
            <ul className="space-y-3 text-gray-600 dark:text-gray-300">
              <li className="flex items-center space-x-2">
                <span className="text-blue-500">✓</span>
                <span>Responsive Design</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-blue-500">✓</span>
                <span>E-commerce Solutions</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-blue-500">✓</span>
                <span>CMS Development</span>
              </li>
            </ul>
          </div>

          {/* AI Solutions */}
          <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 backdrop-blur-md rounded-2xl shadow-xl p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-green-200 dark:border-green-800 group">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-tr from-green-600 to-green-400 rounded-full p-6 shadow-lg group-hover:shadow-green-500/50 transition-all duration-300 transform group-hover:rotate-12 flex items-center justify-center w-24 h-24">
                <FaRobot className="text-5xl text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 text-center">AI Solutions</h3>
            <p className="text-gray-600 dark:text-gray-300 text-center mb-6">
              Intelligent systems to automate and enhance decision-making.
            </p>
            <ul className="space-y-3 text-gray-600 dark:text-gray-300">
              <li className="flex items-center space-x-2">
                <span className="text-green-500">✓</span>
                <span>Machine Learning</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-green-500">✓</span>
                <span>Natural Language Processing</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-green-500">✓</span>
                <span>Computer Vision</span>
              </li>
            </ul>
          </div>

          {/* Mobile Applications */}
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 backdrop-blur-md rounded-2xl shadow-xl p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-purple-200 dark:border-purple-800 group">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-tr from-purple-600 to-purple-400 rounded-full p-6 shadow-lg group-hover:shadow-purple-500/50 transition-all duration-300 transform group-hover:rotate-12 flex items-center justify-center w-24 h-24">
                <FaMobileAlt className="text-5xl text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 text-center">Mobile Applications</h3>
            <p className="text-gray-600 dark:text-gray-300 text-center mb-6">
              Native and cross-platform apps for exceptional user experiences.
            </p>
            <ul className="space-y-3 text-gray-600 dark:text-gray-300">
              <li className="flex items-center space-x-2">
                <span className="text-purple-500">✓</span>
                <span>iOS Development</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-purple-500">✓</span>
                <span>Android Development</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-purple-500">✓</span>
                <span>Cross-platform Apps</span>
              </li>
            </ul>
          </div>

          {/* Blockchain Development */}
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 backdrop-blur-md rounded-2xl shadow-xl p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-orange-200 dark:border-orange-800 group">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-tr from-orange-600 to-orange-400 rounded-full p-6 shadow-lg group-hover:shadow-orange-500/50 transition-all duration-300 transform group-hover:rotate-12 flex items-center justify-center w-24 h-24">
                <FaBitcoin className="text-5xl text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 text-center">Blockchain Development</h3>
            <p className="text-gray-600 dark:text-gray-300 text-center mb-6">
              Secure, transparent, and innovative blockchain solutions.
            </p>
            <ul className="space-y-3 text-gray-600 dark:text-gray-300">
              <li className="flex items-center space-x-2">
                <span className="text-orange-500">✓</span>
                <span>Smart Contracts</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-orange-500">✓</span>
                <span>DApps Development</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-orange-500">✓</span>
                <span>Token Development</span>
              </li>
            </ul>
          </div>

          {/* Cloud Integration */}
          <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 dark:from-cyan-900/20 dark:to-cyan-800/20 backdrop-blur-md rounded-2xl shadow-xl p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-cyan-200 dark:border-cyan-800 group">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-tr from-cyan-600 to-cyan-400 rounded-full p-6 shadow-lg group-hover:shadow-cyan-500/50 transition-all duration-300 transform group-hover:rotate-12 flex items-center justify-center w-24 h-24">
                <FaCloud className="text-5xl text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 text-center">Cloud Integration</h3>
            <p className="text-gray-600 dark:text-gray-300 text-center mb-6">
              Seamless cloud solutions for scalability and reliability.
            </p>
            <ul className="space-y-3 text-gray-600 dark:text-gray-300">
              <li className="flex items-center space-x-2">
                <span className="text-cyan-500">✓</span>
                <span>AWS Solutions</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-cyan-500">✓</span>
                <span>Azure Services</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-cyan-500">✓</span>
                <span>Google Cloud</span>
              </li>
            </ul>
          </div>

          {/* UI/UX Design */}
          <div className="bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-900/20 dark:to-pink-800/20 backdrop-blur-md rounded-2xl shadow-xl p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-pink-200 dark:border-pink-800 group">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-tr from-pink-600 to-pink-400 rounded-full p-6 shadow-lg group-hover:shadow-pink-500/50 transition-all duration-300 transform group-hover:rotate-12 flex items-center justify-center w-24 h-24">
                <FaPalette className="text-5xl text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 text-center">UI/UX Design</h3>
            <p className="text-gray-600 dark:text-gray-300 text-center mb-6">
              Beautiful and intuitive user interfaces that enhance user experience.
            </p>
            <ul className="space-y-3 text-gray-600 dark:text-gray-300">
              <li className="flex items-center space-x-2">
                <span className="text-pink-500">✓</span>
                <span>User Research</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-pink-500">✓</span>
                <span>Wireframing</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-pink-500">✓</span>
                <span>Prototyping</span>
              </li>
            </ul>
          </div>

          {/* NFTs & Smart Contracts - Centered in its own row */}
          <div className="md:col-start-2 md:col-span-1">
            <div className="bg-gradient-to-br from-violet-50 to-violet-100 dark:from-violet-900/20 dark:to-violet-800/20 backdrop-blur-md rounded-2xl shadow-xl p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-violet-200 dark:border-violet-800 group h-full">
              <div className="flex justify-center mb-6">
                <div className="bg-gradient-to-tr from-violet-600 to-violet-400 rounded-full p-6 shadow-lg group-hover:shadow-violet-500/50 transition-all duration-300 transform group-hover:rotate-12 flex items-center justify-center w-24 h-24">
                  <FaEthereum className="text-5xl text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 text-center">NFTs & Smart Contracts</h3>
              <p className="text-gray-600 dark:text-gray-300 text-center mb-6">
                Create, deploy, and manage NFTs and smart contracts on blockchain networks.
              </p>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-center space-x-2">
                  <span className="text-violet-500">✓</span>
                  <span>NFT Development</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-violet-500">✓</span>
                  <span>Smart Contract Development</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-violet-500">✓</span>
                  <span>Blockchain Integration</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="rounded-2xl p-12 mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-slate-900 dark:text-white">Why Choose Our Services?</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {/* Proven Results Card */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 backdrop-blur-md rounded-2xl shadow-xl p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-blue-200 dark:border-blue-800 group text-slate-900 dark:text-white">
              <div className="flex justify-center mb-6">
                <div className="bg-gradient-to-tr from-blue-600 to-blue-400 rounded-full p-6 shadow-lg group-hover:shadow-blue-500/50 transition-all duration-300 transform group-hover:rotate-12 flex items-center justify-center w-24 h-24">
                  <FaChartLine className="text-5xl text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-center">Proven Results</h3>
              <p className="text-center text-gray-600 dark:text-gray-300">Consistent delivery of high-quality solutions</p>
            </div>

            {/* Security First Card */}
            <div className="bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-900/20 dark:to-pink-800/20 backdrop-blur-md rounded-2xl shadow-xl p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-pink-200 dark:border-pink-800 group text-slate-900 dark:text-white">
              <div className="flex justify-center mb-6">
                <div className="bg-gradient-to-tr from-pink-600 to-pink-400 rounded-full p-6 shadow-lg group-hover:shadow-pink-500/50 transition-all duration-300 transform group-hover:rotate-12 flex items-center justify-center w-24 h-24">
                  <FaShieldAlt className="text-5xl text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-center">Security First</h3>
              <p className="text-center text-gray-600 dark:text-gray-300">Enterprise-grade security measures</p>
            </div>

            {/* Expert Team Card */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 backdrop-blur-md rounded-2xl shadow-xl p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-green-200 dark:border-green-800 group text-slate-900 dark:text-white">
              <div className="flex justify-center mb-6">
                <div className="bg-gradient-to-tr from-green-600 to-green-400 rounded-full p-6 shadow-lg group-hover:shadow-green-500/50 transition-all duration-300 transform group-hover:rotate-12 flex items-center justify-center w-24 h-24">
                  <FaUsers className="text-5xl text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-center">Expert Team</h3>
              <p className="text-center text-gray-600 dark:text-gray-300">Skilled professionals with years of experience</p>
            </div>

            {/* Innovation Card */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 backdrop-blur-md rounded-2xl shadow-xl p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-orange-200 dark:border-orange-800 group text-slate-900 dark:text-white">
              <div className="flex justify-center mb-6">
                <div className="bg-gradient-to-tr from-orange-600 to-orange-400 rounded-full p-6 shadow-lg group-hover:shadow-orange-500/50 transition-all duration-300 transform group-hover:rotate-12 flex items-center justify-center w-24 h-24">
                  <FaRobot className="text-5xl text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-center">Innovation</h3>
              <p className="text-center text-gray-600 dark:text-gray-300">Cutting-edge technology solutions</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Let's discuss how our services can help you achieve your goals.
          </p>
          <button className="bg-secondary hover:bg-secondary-dark text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
            Get Started Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Services;
