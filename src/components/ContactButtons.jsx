import React, { useState, useEffect } from 'react';
import { FaWhatsapp, FaTelegram } from 'react-icons/fa';

function ContactButtons() {
  const [isOpen, setIsOpen] = useState({
    whatsapp: false,
    telegram: false
  });
  
  const contacts = {
    whatsapp: [
      {
        number: "353899504694",
        type: "whatsapp",
        label: "Ireland"
      },
      {
        number: "923181010080",
        type: "whatsapp",
        label: "Pakistan"
      }
    ]
  };
  
  const telegramNumber = "353899504694"; // Ireland number for Telegram

  const toggleDropdown = (type) => {
    setIsOpen(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen.whatsapp && !event.target.closest('.contact-buttons')) {
        setIsOpen({ whatsapp: false });
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen.whatsapp]);

  const renderWhatsAppDropdown = () => (
    <div className="absolute right-0 bottom-full mb-2 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-3 min-w-[200px] z-10">
      <div className="text-sm text-gray-700 dark:text-gray-200">
        {contacts.whatsapp.map((contact, index) => (
          <a
            key={index}
            href={`https://wa.me/${contact.number}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen({ whatsapp: false });
            }}
          >
            +{contact.number.replace(/(\d{3})(\d{3})(\d+)/, '$1 $2 $3')} ({contact.label})
          </a>
        ))}
      </div>
    </div>
  );
  
  const handleTelegramClick = (e) => {
    e.stopPropagation();
    window.open(`https://t.me/${telegramNumber}`, '_blank');
  };

  return (
    <div className="flex gap-6 items-center justify-center contact-buttons">
      {/* WhatsApp Button */}
      <div className="relative">
        <div 
          onClick={() => toggleDropdown('whatsapp')}
          className="text-green-500 hover:text-green-600 text-4xl transition-all duration-300 transform hover:scale-110 inline-block cursor-pointer"
          title="Contact on WhatsApp"
        >
          <FaWhatsapp />
        </div>
        {isOpen.whatsapp && renderWhatsAppDropdown()}
      </div>

      {/* Telegram Button - Direct Link */}
      <a 
        href={`https://t.me/${telegramNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:text-blue-600 text-4xl transition-all duration-300 transform hover:scale-110 inline-block"
        title="Contact on Telegram"
        onClick={handleTelegramClick}
      >
        <FaTelegram />
      </a>
    </div>
  );
}

export default ContactButtons;