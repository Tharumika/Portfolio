import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const articles = [
  {
    title: 'Checking Acyclicity of Directed Graphs',
    type: 'Coursework Report',
    date: 'Apr 8, 2022',
    readTime: '6min read',
    description: 'An analysis and implementation report on graph theory algorithms, focusing on efficiency and real-world application.',
  },
  {
    title: 'Designing the Smart Campus Sensor API',
    type: 'Architecture Deep-dive',
    date: 'Mar 15, 2022',
    readTime: '8min read',
    description: 'Exploring the architectural decisions behind a RESTful API using Java, JAX-RS, and HATEOAS principles with thread-safe memory management.',
  }
];

export default function Thoughts() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="space-y-12 md:space-y-16"
    >
      <div className="text-center lg:text-right flex flex-col gap-2">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tighter">
          Design<br className="hidden md:block" />
          <span className="text-[#FDFBF7]/30"> Thoughts</span>
        </h2>
      </div>

      <div className="space-y-6 w-full lg:max-w-4xl lg:ml-auto">
        {articles.map((article, idx) => (
          <motion.article 
            whileHover={{ y: -4, scale: 1.01, borderColor: 'rgba(183, 121, 31, 0.4)', backgroundColor: 'rgba(255, 255, 255, 0.08)' }}
            whileTap={{ scale: 0.99 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            key={idx} 
            className="group cursor-pointer bg-white/5 border border-white/15 rounded-3xl p-8 md:p-10 flex flex-col md:flex-row gap-8 items-start md:items-center transition-colors duration-300"
          >
            <div className="flex-1 space-y-4">
              <h3 className="text-2xl font-bold text-[#FDFBF7] group-hover:text-[#B7791F] transition-colors leading-tight">
                {article.title}
              </h3>
              <p className="text-[#CBD5E1] leading-relaxed line-clamp-2">
                {article.description}
              </p>
            </div>
            <div className="flex flex-row md:flex-col justify-between w-full md:w-auto items-center md:items-end gap-2 md:gap-4 border-t border-white/15 md:border-t-0 pt-4 md:pt-0">
              <div className="text-left md:text-right">
                <p className="text-[#B7791F] font-bold text-sm mb-1 uppercase tracking-wider">{article.date}</p>
                <p className="text-[#CBD5E1] text-sm">{article.readTime}</p>
              </div>
              <div className="md:mt-4 text-[#805AD5] bg-white/5 p-3 rounded-full md:opacity-0 group-hover:opacity-100 transition-all duration-300 md:-translate-x-4 group-hover:translate-x-0">
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <div className="mt-16 bg-gradient-to-br from-[#B7791F]/10 to-transparent border border-[#B7791F]/20 rounded-3xl p-8 md:p-12 w-full lg:max-w-4xl lg:ml-auto">
        <h3 className="text-3xl font-black text-[#FDFBF7] mb-4 tracking-tighter uppercase">Beyond the Code</h3>
        <p className="text-[#CBD5E1] leading-relaxed mb-8 max-w-2xl text-lg">
          Outside of IDEs and terminal windows, I maintain balance through a variety of interests. I am constantly exploring macro tech trends to understand where the industry is heading.
        </p>
        <div className="flex flex-wrap gap-4">
          <motion.span whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }} className="px-5 py-3 bg-white/10 text-[#FDFBF7] font-semibold rounded-xl border border-white/15 shadow-sm flex items-center gap-2 cursor-default">
            🏸 Badminton
          </motion.span>
          <motion.span whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }} className="px-5 py-3 bg-white/10 text-[#FDFBF7] font-semibold rounded-xl border border-white/15 shadow-sm flex items-center gap-2 cursor-default">
            ☕ Specialty Coffee
          </motion.span>
        </div>
      </div>
    </motion.div>
  );
}
