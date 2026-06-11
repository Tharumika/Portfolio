import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'EduMath LK',
    description: 'AI-powered learning platform for A/L Combined Mathematics students. Engineered the secure authentication flow and established the CI/CD pipeline.',
    tags: ['React', 'Node.js', 'Supabase', 'MongoDB Atlas'],
    link: '#',
    repo: '#',
  },
  {
    title: 'Smart Campus API',
    description: 'Production-ready RESTful sensor and room management API featuring a HATEOAS Discovery Endpoint and thread-safe in-memory storage.',
    tags: ['Java 11+', 'JAX-RS', 'Tomcat'],
    link: null,
    repo: '#',
  },
  {
    title: 'CloudPulse GCP Hub',
    description: 'GCP-first cloud operations automation platform for real-time event monitoring and rule-based workflows.',
    tags: ['Python', 'FastAPI', 'Docker', 'Terraform', 'GCP'],
    link: null,
    repo: '#',
  },
  {
    title: 'HelaBooking',
    description: 'Cloud-native event ticket booking platform utilizing microservices and Zero Trust security architecture.',
    tags: ['Microservices', 'Zero Trust', 'Cloud Native'],
    link: null,
    repo: '#',
  }
];

export default function Projects() {
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
          Recent<br className="hidden md:block" />
          <span className="text-[#FDFBF7]/30"> Projects</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {projects.map((project, index) => (
          <motion.a 
            whileHover={{ y: -6, scale: 1.01, borderColor: 'rgba(183, 121, 31, 0.4)', backgroundColor: 'rgba(255, 255, 255, 0.08)' }}
            whileTap={{ scale: 0.99 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            key={index} 
            href={project.link || project.repo || '#'} 
            className="group bg-white/5 border border-white/15 rounded-3xl p-8 md:p-10 flex flex-col h-full relative overflow-hidden shadow-lg transition-colors duration-300"
          >
            <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0 text-[#B7791F]">
              <ArrowUpRight className="w-8 h-8" />
            </div>
            
            <h3 className="text-2xl font-bold text-[#FDFBF7] mb-4 pr-10">{project.title}</h3>
            
            <p className="text-[#CBD5E1] leading-relaxed mb-8 flex-grow">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tags.map((tag, tagIndex) => (
                <span key={tagIndex} className="px-3 py-1.5 bg-white/10 text-[#B7791F] font-semibold text-xs rounded-lg border border-[#B7791F]/25 uppercase tracking-wider">
                  {tag}
                </span>
              ))}
            </div>
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
}
