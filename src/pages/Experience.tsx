import { motion } from 'motion/react';

export default function Experience() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="space-y-12 md:space-y-16"
    >
      <div className="text-center lg:text-left flex flex-col gap-2">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tighter">
          Timeline &<br className="hidden md:block" />
          <span className="text-[#FDFBF7]/30"> Education</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Seek Internship Card (Highlighted) */}
        <motion.div 
          whileHover={{ y: -6, scale: 1.01, borderColor: 'rgba(128, 90, 213, 0.6)' }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="bg-[#805AD5]/5 border border-[#805AD5]/30 rounded-3xl p-6 md:p-8 transition-all flex flex-col h-full justify-between shadow-[0_0_30px_rgba(128,90,213,0.08)]"
        >
          <div>
            <div className="flex justify-between items-center gap-4 mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-green-500/10 text-green-400 border border-green-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                Open to Work
              </span>
              <span className="text-[#9F7AEA] font-mono text-xs font-semibold uppercase tracking-wider">Present</span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-[#FDFBF7] mb-2 leading-tight">Seeking Internship Opportunities</h3>
            <p className="text-[#CBD5E1] leading-relaxed text-sm md:text-base">
              Currently seeking internship opportunities within the tech industry in Colombo or Gampaha to apply my fullstack and cloud engineering skills in a professional environment.
            </p>
          </div>
        </motion.div>

        {/* B.Sc. Card */}
        <motion.div 
          whileHover={{ y: -6, scale: 1.01, borderColor: 'rgba(183, 121, 31, 0.4)' }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="bg-white/5 border border-white/15 rounded-3xl p-6 md:p-8 transition-all flex flex-col h-full justify-between"
        >
          <div>
            <div className="flex justify-between items-start gap-4 mb-4">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-[#FDFBF7] leading-tight">BSc (Hons) Computer Science</h3>
                <p className="text-[#CBD5E1]/60 text-xs font-semibold uppercase tracking-wider mt-1">Westminster • IIT Sri Lanka</p>
              </div>
              <span className="text-[#B7791F] font-mono text-xs font-semibold uppercase tracking-wider shrink-0 mt-1">2024 - 2028</span>
            </div>
            <p className="text-[#CBD5E1] leading-relaxed text-sm md:text-base">
              Building a strong foundation in computer science principles, software engineering methodologies, algorithms, and technical architecture.
            </p>
          </div>
        </motion.div>

        {/* Foundation Card */}
        <motion.div 
          whileHover={{ y: -6, scale: 1.01, borderColor: 'rgba(183, 121, 31, 0.4)' }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="bg-white/5 border border-white/15 rounded-3xl p-6 md:p-8 transition-all flex flex-col h-full justify-between"
        >
          <div>
            <div className="flex justify-between items-start gap-4 mb-4">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-[#FDFBF7] leading-tight">Foundation Certificate in HE - IT</h3>
                <p className="text-[#CBD5E1]/60 text-xs font-semibold uppercase tracking-wider mt-1">IIT Sri Lanka</p>
              </div>
              <span className="text-[#B7791F] font-mono text-xs font-semibold uppercase tracking-wider shrink-0 mt-1">2023 - 2024</span>
            </div>
            <p className="text-[#CBD5E1] leading-relaxed text-sm md:text-base">
              Completed preparatory coursework and fundamentals in programming, logic, and mathematics for advanced computer science studies.
            </p>
          </div>
        </motion.div>

        {/* School Education Card */}
        <motion.div 
          whileHover={{ y: -6, scale: 1.01, borderColor: 'rgba(183, 121, 31, 0.4)' }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="bg-white/5 border border-white/15 rounded-3xl p-6 md:p-8 transition-all flex flex-col h-full justify-between"
        >
          <div>
            <div className="flex justify-between items-start gap-4 mb-4">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-[#FDFBF7] leading-tight">School Education</h3>
                <p className="text-[#CBD5E1]/60 text-xs font-semibold uppercase tracking-wider mt-1">Bandaranayake College, Gampaha</p>
              </div>
              <span className="text-[#B7791F] font-mono text-xs font-semibold uppercase tracking-wider shrink-0 mt-1">2016 - 2023</span>
            </div>
            <p className="text-[#CBD5E1] leading-relaxed text-sm md:text-base">
              Completed primary and secondary schooling, establishing a solid academic foundation and participating in extracurricular activities.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
