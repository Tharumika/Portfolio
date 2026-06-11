import React from 'react';
import { Terminal, Linkedin, Twitter, Instagram } from 'lucide-react';
import { motion } from 'motion/react';
import vidunImage from '../assets/vidun.jpeg';

export default function ProfileCard() {
  return (
    <div className="relative w-full max-w-full md:max-w-2xl lg:max-w-[320px] mx-auto lg:mt-0 mt-6 px-2 md:px-0">
      {/* Ambient Glow matching premium purple and warm gold wood themes */}
      <div className="absolute -inset-4 bg-[#805AD5] blur-[80px] opacity-15 rounded-full pointer-events-none" />
      <div className="absolute inset-4 bg-[#B7791F] blur-[100px] opacity-10 rounded-full pointer-events-none" />

      {/* Card Container */}
      <div className="bg-[#1A365D] border border-[#2A4365] rounded-[2.5rem] p-5 md:p-8 lg:p-6 lg:pb-8 w-full relative overflow-hidden shadow-2xl flex flex-col md:flex-row lg:flex-col gap-6 md:gap-8 lg:gap-0 items-center md:items-center lg:items-center">
        
        {/* Top Left Decorative Circle */}
        <svg 
          className="absolute -top-6 -left-6 w-48 h-48 pointer-events-none z-0 text-[#B7791F]/20 hidden lg:block" 
          viewBox="0 0 200 200"
        >
          <circle 
            cx="100" 
            cy="100" 
            r="80" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="3" 
            strokeDasharray="8 8" 
          />
        </svg>

        {/* Profile Image - Crisp, gorgeous natural corporate style matching the curly hair portrait */}
        <div className="relative z-10 w-full max-w-[240px] md:max-w-[200px] lg:max-w-full aspect-[4/5] rounded-[2rem] bg-[#2A4365] overflow-hidden shadow-lg mt-2 border-[6px] border-white shrink-0">
          <img
            src={vidunImage}
            alt="Vidun Tharumika"
            className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Card Details/Content Container */}
        <div className="flex-1 text-center md:text-left lg:text-center w-full z-10">
          
          {/* Tie gradient-themed Terminal Badge & Connecting Wood Line */}
          <div className="relative z-20 flex justify-center md:justify-start lg:justify-center -mt-9 md:mt-2 lg:-mt-5 mb-5 md:mb-4 lg:mb-5">
            <div className="w-[42px] h-[42px] bg-gradient-to-tr from-[#805AD5] to-[#9F7AEA] rounded-full flex items-center justify-center text-white border-[4px] border-white relative shrink-0 shadow-md">
              <Terminal size={16} className="stroke-[2.5px]" />

              {/* Curved Dashed Line connecting to badge (Only shown in mobile and desktop, hidden in tablet flex-row) */}
              <svg
                className="absolute right-[100%] top-1/2 -translate-y-1/2 w-64 h-48 pointer-events-none text-[#B7791F] hidden lg:block md:hidden"
                viewBox="0 0 200 120"
                style={{ transform: 'translateX(4px)' }}
              >
                <path
                  d="M -100,120 Q 90,120 196,60"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeDasharray="6 6"
                />
              </svg>
            </div>
          </div>

          {/* Name in Rich Espresso */}
          <h2 className="text-3xl font-black text-[#FDFBF7] mb-3 md:mb-2 lg:mb-3 tracking-tight">
            Vidun Tharumika
          </h2>

          {/* Bio in Warm Charcoal-Sand */}
          <p className="text-[#CBD5E1] font-medium leading-relaxed text-[15px] max-w-[260px] md:max-w-none lg:max-w-[260px] mx-auto md:mx-0 lg:mx-auto mb-6 md:mb-5 lg:mb-8">
            Computer Science undergraduate passionate about full-stack engineering and cloud infrastructure.
          </p>

          {/* Social Icons in Purple/Rose tie accent */}
          <div className="flex justify-center md:justify-start lg:justify-center gap-5 text-[#805AD5]">
            <motion.a 
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.9 }}
              href="https://www.linkedin.com/in/vidun-tharumika-8791aa293/" 
              target="_blank" 
              rel="noreferrer" 
              className="hover:text-[#9F7AEA] transition-colors p-1" 
              aria-label="LinkedIn"
            >
              <Linkedin size={24} strokeWidth={2} />
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.9 }}
              href="https://x.com/VidunTharu" 
              target="_blank" 
              rel="noreferrer" 
              className="hover:text-[#9F7AEA] transition-colors p-1" 
              aria-label="Twitter"
            >
              <Twitter size={24} strokeWidth={2} />
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.9 }}
              href="https://www.instagram.com/vidun_tharu/" 
              target="_blank" 
              rel="noreferrer" 
              className="hover:text-[#9F7AEA] transition-colors p-1" 
              aria-label="Instagram"
            >
              <Instagram size={24} strokeWidth={2} />
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  );
}
