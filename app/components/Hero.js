import React from 'react';
import { motion } from 'framer-motion';

const textVariants = {
  hidden: { x: -100, opacity: 0 },
  visible: (i = 1) => ({
    x: 0,
    opacity: 1,
    transition: {
      x: { type: 'spring', stiffness: 50, damping: 20 },
      opacity: { duration: 0.5 },
      delay: i * 0.2,
    },
  }),
};

const buttonVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.8, duration: 0.5 },
  },
  hover: { scale: 1.05 },
};

const floatingVariants = {
  animate: {
    y: [0, -20, 0],
    transition: { duration: 4, repeat: Infinity },
  },
};

const Hero = () => {
  return (
    <section className="relative hero bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white py-20 md:py-32 flex flex-col items-center justify-center min-h-screen px-4 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="relative z-10 text-center max-w-4xl">
        {/* Badge */}
        <motion.div
          className="inline-block mb-6 px-4 py-2 bg-blue-500/20 border border-blue-400/50 rounded-full"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <span className="text-blue-300 text-sm font-medium">Welcome to My Portfolio</span>
        </motion.div>

        <motion.h1
          className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-300 to-cyan-400"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          Shubham Singh
        </motion.h1>

        <motion.h2
          className="text-xl sm:text-2xl md:text-4xl font-semibold mb-6 text-center text-gray-200"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          custom={2}
        >
          Full-Stack Developer <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Web & Mobile Mastery</span>
        </motion.h2>

        <motion.p
          className="text-base sm:text-lg md:text-xl mb-8 text-center max-w-3xl text-gray-300 leading-relaxed"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          custom={3}
        >
          Crafting exceptional digital experiences with cutting-edge technologies. Specializing in Next.js, React, React Native, Node.js, MongoDB, and modern UI/UX design.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.a
            href="#about-me"
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white rounded-lg text-base md:text-lg font-semibold shadow-lg hover:shadow-xl transition transform"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore My Work
          </motion.a>
          <motion.a
            href="#contact"
            className="px-8 py-3 border-2 border-blue-400 text-blue-300 hover:bg-blue-400/10 rounded-lg text-base md:text-lg font-semibold transition transform"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </div>

      {/* Floating scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-gray-400 text-sm">Scroll to explore</span>
          <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
