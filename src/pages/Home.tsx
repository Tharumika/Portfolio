import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col gap-12 pt-8 md:pt-16 w-full"
    >
      <div className="space-y-10 max-w-3xl text-center lg:text-left">
        <div className="space-y-6">
          <h1 className="text-5xl sm:text-6xl md:text-[5.5rem] xl:text-[6rem] leading-[0.9] font-black tracking-tighter uppercase w-full">
            Fullstack <br />
            <span className="text-transparent bg-clip-text bg-[#0A1128]" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}>
              Developer
            </span>
          </h1>
          <p className="text-lg md:text-xl text-[#CBD5E1] font-medium pt-2 max-w-2xl mx-auto lg:mx-0">
            Computer Science Undergraduate at IIT Sri Lanka. Passionate about building robust web applications and modern cloud infrastructure.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
          <motion.a 
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.96 }}
            href="#projects" 
            className="bg-gradient-to-r from-[#805AD5] to-[#9F7AEA] text-white px-8 py-4 rounded-xl font-bold text-lg hover:opacity-95 transition-all flex items-center gap-2 w-full sm:w-auto justify-center shadow-lg shadow-[#805AD5]/10"
          >
            View Projects <ArrowRight className="w-5 h-5" />
          </motion.a>
          <motion.a 
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.96 }}
            href="#contact" 
            className="bg-white/5 text-[#FDFBF7] px-8 py-4 rounded-xl font-bold text-lg border border-white/15 hover:bg-white/10 hover:border-[#B7791F]/30 transition-all w-full sm:w-auto justify-center shadow-lg"
          >
            Contact Me
          </motion.a>
        </div>


      </div>
    </motion.div>
  );
}
