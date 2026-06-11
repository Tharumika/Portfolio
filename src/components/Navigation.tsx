import { motion } from 'motion/react';
import React, { useState, useEffect } from 'react';
import { Mail } from 'lucide-react';

const tabs = ['Home', 'Experience', 'Projects', 'Tools', 'Thoughts'];

export default function Navigation() {
  const [activeTab, setActiveTab] = useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // Offset for sticky navbar reading detection

      for (let i = tabs.length - 1; i >= 0; i--) {
        const section = document.getElementById(tabs[i].toLowerCase());
        if (section && section.offsetTop <= scrollPosition) {
          setActiveTab(tabs[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (tab: string) => {
    const sectionId = tab.toLowerCase();
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 120, // Offset for sticky navbar
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl">
      <div className="bg-white/5 backdrop-blur-2xl border border-white/15 rounded-2xl px-6 py-4 flex items-center justify-between shadow-2xl">
        <div className="flex items-center gap-2">
          <span 
            className="font-bold text-xl tracking-tight text-[#FDFBF7] cursor-pointer hover:opacity-80 transition-opacity" 
            onClick={() => scrollToSection('Home')}
          >
            Vidun Tharumika
          </span>
        </div>
        
        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-2 bg-white/5 rounded-xl p-1.5 border border-white/10">
          {tabs.map((tab) => (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              key={tab}
              onClick={() => scrollToSection(tab)}
              className="relative px-4 py-2 text-sm font-semibold rounded-lg transition-all cursor-pointer"
            >
              {activeTab === tab && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-[#B7791F] rounded-lg shadow-md shadow-[#B7791F]/10 z-0"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className={`relative z-10 transition-colors duration-200 ${
                activeTab === tab ? 'text-[#0A1128]' : 'text-[#CBD5E1] hover:text-[#FDFBF7]'
              }`}>
                {tab}
              </span>
            </motion.button>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <motion.a 
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            href="mailto:vidun.us@gmail.com" 
            className="bg-white/10 hover:bg-white/15 border border-white/10 p-2 rounded-lg text-[#FDFBF7] transition-colors" 
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </motion.a>
        </div>
      </div>
      
      {/* Mobile Nav (Scrollable underneath, so it doesn't clutter top bar) */}
      <div className="lg:hidden flex overflow-x-auto mt-2 space-x-2 hide-scrollbar mx-auto justify-center bg-[#1A365D]/95 backdrop-blur-md p-2 rounded-2xl border border-[#B7791F]/15 w-max max-w-full shadow-lg">
        {tabs.map((tab) => (
          <motion.button
            whileTap={{ scale: 0.95 }}
            key={tab}
            onClick={() => scrollToSection(tab)}
            className="relative px-4 py-2 text-xs rounded-lg font-medium transition-all cursor-pointer"
          >
            {activeTab === tab && (
              <motion.div
                layoutId="activeTabMobile"
                className="absolute inset-0 bg-[#B7791F] rounded-lg z-0"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            <span className={`relative z-10 transition-colors duration-200 ${
              activeTab === tab ? 'text-[#0A1128] font-semibold' : 'text-[#CBD5E1]'
            }`}>
              {tab}
            </span>
          </motion.button>
        ))}
      </div>
    </nav>
  );
}
