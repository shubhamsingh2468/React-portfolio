import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  'React.js',
  'Redux',
  'Next.js',
  'JavaScript (ES6+)',
  'Node.js',
  'Express.js',
  'MongoDB',
  'React Native',
  'TypeScript',
  'Python',
  'TensorFlow',
  'LLM',
  'Tailwind CSS',
  'Material UI',
  'Firebase',
  'HTML5',
  'CSS3',
  'Git',
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 60, damping: 15 } },
};

const Skills = () => {
  return (
    <section className="skills bg-white py-20" id="skills">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-bold mb-10 text-center">Skills</h2>
        <motion.ul
          className="skill-list flex flex-wrap justify-center gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {skills.map((skill) => (
            <motion.li
              key={skill}
              variants={itemVariants}
              className="py-2"
            >
              <span className="inline-block bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-2 rounded-full text-base md:text-lg font-semibold shadow hover:scale-105 transition-transform duration-200">
                {skill}
              </span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};

export default Skills;
