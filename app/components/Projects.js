import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Banbanjara (web application)',
    description: 'Travel experiences platform offering trekking, tours, and activities across India with curated adventures for all interests.',
    technologies: ['React.js', 'Next.js', 'MaterialUI', 'Redux', 'Express.js', 'MongoDB'],
    link: 'https://banbanjara.com/',
    icon: '🏔️'
  },
  {
    title: 'Bharat-Taxi (web application)',
    description: 'Fast-growing online cab booking platform providing affordable door-to-door taxi services across India.',
    technologies: ['Next.js', 'React.js', 'Node.js', 'Express.js', 'TypeScript', 'MongoDB'],
    link: 'https://www.bharattaxi.com/',
    icon: '🚕'
  },
  {
    title: 'Rapid-Pest (web application)',
    description: 'Family-run pest and termite management service provider based in Melbourne with 10+ years of expertise.',
    technologies: ['React.js', 'Next.js', 'MongoDB', 'JavaScript', 'Tailwind CSS'],
    link: 'https://www.rapidpestcontrolmelbourne.com.au/',
    icon: '🛡️'
  },
  {
    title: 'InstaShop (web application)',
    description: 'Leading online marketplace and on-demand delivery platform across the Middle East connecting customers with local retailers.',
    technologies: ['React.js', 'Next.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'Firebase'],
    link: 'https://instashop.com/en-ae',
    icon: '🛒'
  },
  {
    title: 'BillPoint (mobile application)',
    description: 'Hassle-free payment platform for bills, services, and betting all in one secure place.',
    technologies: ['React Native', 'Firebase', 'JavaScript', 'Tailwind CSS'],
    link: 'https://play.google.com/store/apps/details?id=co.billpoint.app&hl=en_IN',
    icon: '💳'
  },
  {
    title: 'AthleticApp (mobile application)',
    description: 'Communications and management network for Track & Field and Cross Country teams, athletes, parents and fans.',
    technologies: ['React Native', 'Firebase', 'JavaScript', 'Tailwind CSS'],
    link: 'https://play.google.com/store/apps/details?id=net.athletic.app&hl=en_IN',
    icon: '🏃'
  },
  {
    title: 'Flame (mobile application)',
    description: 'Gamified rewards platform where users get gift cards, money rewards & vouchers for playing mobile games.',
    technologies: ['React Native', 'Firebase', 'JavaScript', 'Tailwind CSS'],
    link: 'https://play.google.com/store/apps/details?id=online.appflame.app&hl=en_IN',
    icon: '🔥'
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative py-20 md:py-32 px-4 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 mb-4">
            Featured Projects
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto"></div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="h-full bg-gradient-to-br from-gray-800 to-gray-900 border border-blue-500/20 rounded-lg p-6 hover:border-blue-500/50 transition backdrop-blur-sm">
                {/* Icon */}
                <div className="text-4xl mb-4">{project.icon}</div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-blue-500/10 text-blue-300 rounded-full text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white text-sm rounded-lg font-semibold transition transform hover:scale-105"
                >
                  View Project →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
