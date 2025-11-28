import React from 'react';
import { motion } from 'framer-motion';

const skillGroups = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React.js', level: 92, color: 'from-blue-400 to-cyan-400' },
      { name: 'Next.js', level: 88, color: 'from-sky-400 to-indigo-400' },
      { name: 'Tailwind CSS', level: 90, color: 'from-teal-400 to-green-400' },
      { name: 'Framer Motion', level: 78, color: 'from-purple-400 to-pink-400' },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', level: 85, color: 'from-lime-400 to-green-400' },
      { name: 'Express.js', level: 82, color: 'from-amber-400 to-yellow-400' },
      { name: 'MongoDB', level: 80, color: 'from-emerald-400 to-green-500' },
      { name: 'REST APIs', level: 88, color: 'from-blue-300 to-cyan-300' },
    ],
  },
  {
    category: 'Mobile & Others',
    skills: [
      { name: 'React Native', level: 80, color: 'from-indigo-400 to-violet-400' },
      { name: 'Firebase', level: 75, color: 'from-orange-400 to-amber-400' },
      { name: 'TypeScript', level: 70, color: 'from-sky-400 to-blue-400' },
      { name: 'Docker', level: 60, color: 'from-gray-400 to-stone-400' },
    ],
  },
];

const barVariants = {
  hidden: { width: 0 },
  visible: (width) => ({ width: `${width}%`, transition: { duration: 1.2, ease: 'easeInOut' } }),
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 md:py-32 px-4 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
            Skills & Expertise
          </h2>
          <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
            Strong technical foundation across frontend, backend and mobile. I focus on building performant, accessible and maintainable applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={gi}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: gi * 0.12 }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 border border-blue-500/20 rounded-xl p-6"
            >
              <h3 className="text-xl font-semibold text-white mb-4">{group.category}</h3>

              <div className="space-y-4">
                {group.skills.map((s, i) => (
                  <div key={i}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-200 font-medium">{s.name}</span>
                      <span className="text-xs text-gray-400">{s.level}%</span>
                    </div>

                    <div className="w-full bg-gray-800 h-3 rounded-full overflow-hidden border border-blue-500/10">
                      <motion.div
                        className={`h-3 rounded-full bg-gradient-to-r ${s.color}`}
                        custom={s.level}
                        variants={barVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skill cloud / tags */}
        <div className="mt-10">
          <motion.div
            className="flex flex-wrap gap-3 justify-center"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {[
              'JavaScript', 'HTML5', 'CSS3', 'Redux', 'SWR', 'GraphQL', 'Webpack',
              'Jest', 'Cypress', 'Git', 'CI/CD', 'AWS', 'Vercel', 'Netlify',
            ].map((tag, i) => (
              <span
                key={i}
                className="px-4 py-2 text-sm bg-white/5 text-gray-200 rounded-full border border-blue-500/10 hover:bg-white/6 transition transform hover:scale-105"
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
