import React from 'react';
import { FaEnvelope } from 'react-icons/fa';

function EmailButton() {
  const email = 'crypticxglobal@gmail.com';

  return (
    <a
      href={`mailto:${email}`}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-violet-600 text-white shadow-glow-md transition-all duration-300 hover:scale-110 hover:shadow-lg"
      title="Email us"
    >
      <FaEnvelope className="text-xl" />
    </a>
  );
}

export default EmailButton;
