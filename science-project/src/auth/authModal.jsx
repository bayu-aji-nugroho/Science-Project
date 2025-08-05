// app/components/AuthModal.jsx

'use client';

import { useState, useEffect } from 'react';
import Login from './login';
import Register from './register';

// Komponen Icon X untuk tombol close
const CloseIcon = () => (
  
    <div>X</div>
  
);

export default function AuthModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('login'); // 'login' atau 'register'

  // Logika untuk transisi fade-in/out
  const [isRendering, setIsRendering] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setIsRendering(true);
    } else {
      const timer = setTimeout(() => setIsRendering(false), 300); // durasi transisi
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Mencegah render jika tidak diperlukan
  if (!isRendering) {
    return null;
  }
  
  // Style dinamis untuk tab
  const tabStyle = "w-1/2 py-3 text-center cursor-pointer font-semibold";
  const activeTabStyle = "text-green-600 border-b-2 border-green-600";
  const inactiveTabStyle = "text-gray-500 hover:text-gray-700";

  return (
    // Backdrop
    <div
      onClick={onClose}
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-3xl text-white transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-[#030712] rounded-xl shadow-2xl w-full max-w-md mx-4 transition-transform duration-300 ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
      >
        <div className="relative">
           {/* Tombol Close */}
           <button
            onClick={onClose}
            className="absolute top-4 right-4  transition-colors"
          >
            <CloseIcon />
          </button>

          {/* Tab Switcher */}
          <div className="flex border-b border-gray-200">
            <div 
              className={`${tabStyle} ${activeTab === 'login' ? activeTabStyle : inactiveTabStyle}`}
              onClick={() => setActiveTab('login')}
            >
              Login
            </div>
            <div 
              className={`${tabStyle} ${activeTab === 'register' ? activeTabStyle : inactiveTabStyle}`}
              onClick={() => setActiveTab('register')}
            >
              Register
            </div>
          </div>
          
          {/* Form Content */}
          <div className="p-8">
            {activeTab === 'login' ? <Login/> : <Register/>}
          </div>
        </div>
      </div>
    </div>
  );
}