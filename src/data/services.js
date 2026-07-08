import {
  FaBitcoin,
  FaCloud,
  FaEthereum,
  FaLaptopCode,
  FaMobileAlt,
  FaPalette,
  FaRobot,
  FaShieldAlt
} from 'react-icons/fa';

export const SERVICE_INQUIRY_EMAIL = 'crypticx.md@gmail.com';

export const services = [
  {
    slug: 'web-development',
    title: 'Web Development',
    description: 'Build modern, responsive websites that engage your audience and drive results.',
    bannerDescription: 'Modern, responsive websites that engage your audience.',
    bgColor: 'from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20',
    borderColor: 'border-blue-200 dark:border-blue-800',
    iconBg: 'from-blue-600 to-blue-400',
    iconShadow: 'group-hover:shadow-blue-500/50',
    checkColor: 'text-blue-500',
    bannerGradient: 'from-blue-900 to-purple-900',
    bannerImage:
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=1000',
    icon: FaLaptopCode,
    features: ['Responsive Design', 'E-commerce Solutions', 'CMS Development']
  },
  {
    slug: 'ai-solutions',
    title: 'AI Solutions',
    description: 'Intelligent systems to automate and enhance decision-making.',
    bannerDescription: 'Intelligent systems to automate and enhance decision-making.',
    bgColor: 'from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20',
    borderColor: 'border-green-200 dark:border-green-800',
    iconBg: 'from-green-600 to-green-400',
    iconShadow: 'group-hover:shadow-green-500/50',
    checkColor: 'text-green-500',
    bannerGradient: 'from-emerald-800 to-teal-900',
    bannerImage:
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=1000',
    icon: FaRobot,
    features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision']
  },
  {
    slug: 'mobile-applications',
    title: 'Mobile Applications',
    description: 'Native and cross-platform apps for exceptional user experiences.',
    bannerDescription: 'Native and cross-platform apps for exceptional user experiences.',
    bgColor: 'from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20',
    borderColor: 'border-purple-200 dark:border-purple-800',
    iconBg: 'from-purple-600 to-purple-400',
    iconShadow: 'group-hover:shadow-purple-500/50',
    checkColor: 'text-purple-500',
    bannerGradient: 'from-indigo-900 to-violet-900',
    bannerImage:
      'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&q=80&w=1000',
    icon: FaMobileAlt,
    features: ['iOS Development', 'Android Development', 'Cross-platform Apps']
  },
  {
    slug: 'blockchain-development',
    title: 'Blockchain Development',
    description: 'Secure, transparent, and innovative blockchain solutions.',
    bannerDescription: 'Secure, transparent, and innovative blockchain solutions.',
    bgColor: 'from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20',
    borderColor: 'border-orange-200 dark:border-orange-800',
    iconBg: 'from-orange-600 to-orange-400',
    iconShadow: 'group-hover:shadow-orange-500/50',
    checkColor: 'text-orange-500',
    bannerGradient: 'from-purple-900 to-pink-900',
    bannerImage:
      'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&q=80&w=1000',
    icon: FaBitcoin,
    features: ['Smart Contracts', 'DApps Development', 'Token Development']
  },
  {
    slug: 'cloud-integration',
    title: 'Cloud Integration',
    description: 'Seamless cloud solutions for scalability and reliability.',
    bannerDescription: 'Seamless cloud solutions for scalability and reliability.',
    bgColor: 'from-cyan-50 to-cyan-100 dark:from-cyan-900/20 dark:to-cyan-800/20',
    borderColor: 'border-cyan-200 dark:border-cyan-800',
    iconBg: 'from-cyan-600 to-cyan-400',
    iconShadow: 'group-hover:shadow-cyan-500/50',
    checkColor: 'text-cyan-500',
    bannerGradient: 'from-blue-800 to-cyan-900',
    bannerImage:
      'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&q=80&w=1000',
    icon: FaCloud,
    features: ['AWS Solutions', 'Azure Services', 'Google Cloud']
  },
  {
    slug: 'ui-ux-design',
    title: 'UI/UX Design',
    description: 'Beautiful and intuitive user interfaces that enhance user experience.',
    bannerDescription: 'Beautiful and intuitive user interfaces that enhance user experience.',
    bgColor: 'from-pink-50 to-pink-100 dark:from-pink-900/20 dark:to-pink-800/20',
    borderColor: 'border-pink-200 dark:border-pink-800',
    iconBg: 'from-pink-600 to-pink-400',
    iconShadow: 'group-hover:shadow-pink-500/50',
    checkColor: 'text-pink-500',
    bannerGradient: 'from-pink-800 to-rose-900',
    bannerImage:
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=1000',
    icon: FaPalette,
    features: ['User Research', 'Wireframing', 'Prototyping']
  },
  {
    slug: 'nfts-smart-contracts',
    title: 'NFTs & Smart Contracts',
    description: 'Create, deploy, and manage NFTs and smart contracts on blockchain networks.',
    bannerDescription: 'Create, deploy, and manage NFTs and smart contracts on blockchain networks.',
    bgColor: 'from-violet-50 to-violet-100 dark:from-violet-900/20 dark:to-violet-800/20',
    borderColor: 'border-violet-200 dark:border-violet-800',
    iconBg: 'from-violet-600 to-violet-400',
    iconShadow: 'group-hover:shadow-violet-500/50',
    checkColor: 'text-violet-500',
    bannerGradient: 'from-violet-900 to-indigo-900',
    bannerImage:
      'https://images.unsplash.com/photo-1639762681057-408e52192e55?auto=format&fit=crop&q=80&w=1000',
    icon: FaEthereum,
    features: ['NFT Development', 'Smart Contract Development', 'Blockchain Integration'],
    gridClass: 'md:col-start-2 md:col-span-1'
  }
];

export const bannerServices = [
  ...services,
  {
    slug: 'blockchain-web3-solutions',
    title: 'Blockchain & Web3 Solutions',
    bannerDescription: 'Cutting-edge blockchain and Web3 development services.',
    bannerGradient: 'from-orange-900 to-red-900',
    bannerImage:
      'https://images.unsplash.com/photo-1639762681057-408e52192e55?auto=format&fit=crop&q=80&w=1000',
    icon: FaShieldAlt
  }
];

export function getServiceBySlug(slug) {
  return services.find((service) => service.slug === slug);
}
