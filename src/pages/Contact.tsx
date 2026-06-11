import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Send, CheckCircle2, AlertCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      setStatusMessage('Please fill in all fields.');
      return;
    }

    setStatus('loading');

    try {
      const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || 'YOUR_ACCESS_KEY_HERE';
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `Portfolio Contact from ${formData.name}`,
        })
      });

      const result = await response.json();
      if (response.status === 200 && result.success) {
        setStatus('success');
        setStatusMessage('Thank you! Your message has been sent successfully.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
        setStatusMessage(result.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setStatusMessage('Failed to connect to the server. Please check your internet connection.');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="bg-white/5 border border-white/15 rounded-[2rem] md:rounded-[3rem] p-6 md:p-12 xl:p-16 overflow-hidden relative"
    >
      <div className="absolute inset-0 w-full h-full bg-[#805AD5]/5 pointer-events-none"></div>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 xl:gap-16 items-start relative z-10 w-full">
        
        {/* Left Side: Call to Action */}
        <div className="xl:col-span-5 text-center xl:text-left space-y-6 w-full">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tighter leading-[0.95] select-none">
            Let's Work<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-transparent whitespace-nowrap" style={{ WebkitTextStroke: '1.5px rgba(255,255,255,0.2)' }}>
              Together
            </span>
          </h2>
          <p className="text-[#CBD5E1] text-sm md:text-base leading-relaxed max-w-md mx-auto xl:mx-0">
            Have a project in mind, want to collaborate, or just want to chat? Fill out the form or reach out directly via email.
          </p>
          <div className="flex flex-col sm:flex-row xl:flex-col gap-3 max-w-md mx-auto xl:mx-0 pt-2 w-full">
            <motion.a 
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              href="mailto:vidun.us@gmail.com" 
              className="w-full bg-white/10 hover:bg-white/15 border border-white/10 text-[#FDFBF7] font-bold py-4 px-6 rounded-2xl flex items-center justify-center gap-3 transition-colors text-sm md:text-base"
            >
              <Mail className="w-5 h-5 text-[#B7791F]" />
              vidun.us@gmail.com
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              href="#projects" 
              className="w-full bg-white/5 text-[#CBD5E1] border border-white/10 font-bold py-4 px-6 rounded-2xl flex items-center justify-center gap-2 hover:bg-white/10 transition-colors text-sm md:text-base"
            >
              View Projects
            </motion.a>
          </div>
        </div>

        {/* Right Side: Web3Forms Contact Form */}
        <div className="xl:col-span-7 bg-[#1A365D]/40 border border-white/10 backdrop-blur-xl rounded-[2rem] p-6 md:p-8 w-full max-w-full xl:max-w-xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-[#FDFBF7] mb-2 text-left">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-[#FDFBF7] placeholder-[#CBD5E1]/40 focus:outline-none focus:border-[#805AD5] transition-colors"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-[#FDFBF7] mb-2 text-left">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-[#FDFBF7] placeholder-[#CBD5E1]/40 focus:outline-none focus:border-[#805AD5] transition-colors"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-[#FDFBF7] mb-2 text-left">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="What would you like to discuss?"
                rows={4}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-[#FDFBF7] placeholder-[#CBD5E1]/40 focus:outline-none focus:border-[#805AD5] transition-colors resize-none"
                required
              />
            </div>

            {/* Submission Status Alert */}
            {status !== 'idle' && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-4 rounded-xl flex items-start gap-3 text-sm ${
                  status === 'success' ? 'bg-green-500/10 border border-green-500/20 text-green-400' :
                  status === 'error' ? 'bg-red-500/10 border border-red-500/20 text-red-400' :
                  'bg-white/5 border border-white/10 text-[#CBD5E1]'
                }`}
              >
                {status === 'success' && <CheckCircle2 className="w-5 h-5 shrink-0 text-green-400" />}
                {status === 'error' && <AlertCircle className="w-5 h-5 shrink-0 text-red-400" />}
                {status === 'loading' && (
                  <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                )}
                <span>{statusMessage || (status === 'loading' && 'Sending message...')}</span>
              </motion.div>
            )}

            <motion.button
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={status === 'loading'}
              className="w-full bg-gradient-to-r from-[#805AD5] to-[#9F7AEA] hover:opacity-95 text-white font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#805AD5]/20 disabled:opacity-50 cursor-pointer"
            >
              <span>Send Message</span>
              <Send className="w-4.5 h-4.5" />
            </motion.button>
          </form>
        </div>

      </div>
    </motion.div>
  );
}
