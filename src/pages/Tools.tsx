import React from 'react';
import { motion } from 'motion/react';

const techLogos: { [key: string]: string } = {
  React: 'https://cdn.simpleicons.org/react/61DAFB',
  'Next.js': 'https://cdn.simpleicons.org/nextdotjs/white',
  HTML: 'https://cdn.simpleicons.org/html5/E34F26',
  CSS: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  JavaScript: 'https://cdn.simpleicons.org/javascript/F7DF1E',
  'Tailwind CSS': 'https://cdn.simpleicons.org/tailwindcss/06B6D4',
  Java: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
  Python: 'https://cdn.simpleicons.org/python/3776AB',
  'Node.js': 'https://cdn.simpleicons.org/nodedotjs/339933',
  Express: 'https://cdn.simpleicons.org/express/white',
  Postman: 'https://cdn.simpleicons.org/postman/FF6C37',
  'RESTful APIs': 'https://cdn.simpleicons.org/swagger/85EA2D',
  MongoDB: 'https://cdn.simpleicons.org/mongodb/47A248',
  MySQL: 'https://cdn.simpleicons.org/mysql/4479A1',
  PostgreSQL: 'https://cdn.simpleicons.org/postgresql/4169E1',
  Supabase: 'https://cdn.simpleicons.org/supabase/3ECF8E',
  GCP: 'https://cdn.simpleicons.org/googlecloud/4285F4',
  Linux: 'https://cdn.simpleicons.org/linux/FCC624',
  Docker: 'https://cdn.simpleicons.org/docker/2496ED',
  Kubernetes: 'https://cdn.simpleicons.org/kubernetes/326CE5',
  Git: 'https://cdn.simpleicons.org/git/F05032',
  GitHub: 'https://cdn.simpleicons.org/github/white',
  Terraform: 'https://cdn.simpleicons.org/terraform/844FBA',
  'CI/CD': 'https://cdn.simpleicons.org/githubactions/2088FF',
};

const categories = [
  { label: 'Frontend', skills: ['React', 'Next.js', 'HTML', 'CSS', 'JavaScript', 'Tailwind CSS'] },
  { label: 'Backend', skills: ['Java', 'Python', 'Node.js', 'Express', 'Postman', 'RESTful APIs'] },
  { label: 'Database', skills: ['MongoDB', 'MySQL', 'PostgreSQL', 'Supabase'] },
  { label: 'Cloud & DevOps', skills: ['GCP', 'Linux', 'Docker', 'Kubernetes', 'Git', 'GitHub', 'Terraform', 'CI/CD'] },
];

export default function Tools() {
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
          My<br className="hidden md:block" />
          <span className="text-[#FDFBF7]/30"> Tools</span>
        </h2>
      </div>

      <div className="space-y-8">
        {categories.map((category, idx) => (
          <div key={idx}>
            {/* Clean inline label — no boxes, no numbers, just typography */}
            <p className="text-[#CBD5E1]/40 text-[11px] font-semibold uppercase tracking-[0.25em] mb-4 pl-1">
              {category.label}
            </p>

            {/* Flowing inline strip of tools */}
            <div className="flex flex-wrap gap-2.5">
              {category.skills.map((skill, skillIdx) => (
                <motion.div
                  key={skillIdx}
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.10] hover:border-white/20 transition-all duration-200 cursor-default group"
                >
                  <img
                    src={techLogos[skill]}
                    alt={skill}
                    className="w-4 h-4 object-contain opacity-70 group-hover:opacity-100 transition-opacity"
                  />
                  <span className="text-[13px] font-medium text-[#FDFBF7]/70 group-hover:text-[#FDFBF7] transition-colors whitespace-nowrap">
                    {skill}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
