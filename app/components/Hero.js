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
};

const Hero = () => {
  return (
    <section className="hero bg-gray-800 text-white py-16 md:py-24 flex flex-col items-center justify-center min-h-[60vh] px-4">
      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 text-center"
        variants={textVariants}
        initial="hidden"
        animate="visible"
        custom={1}
      >
        Shubham Singh
      </motion.h1>
      <motion.h2
        className="text-xl sm:text-2xl md:text-3xl font-medium mb-3 text-center"
        variants={textVariants}
        initial="hidden"
        animate="visible"
        custom={2}
      >
        Full-Stack Developer: Web & Mobile Mastery
      </motion.h2>
      <motion.p
        className="text-base sm:text-lg md:text-xl mb-6 text-center max-w-2xl"
        variants={textVariants}
        initial="hidden"
        animate="visible"
        custom={3}
      >
        Building innovative web and mobile applications using Next.js, React, React Native, MongoDB, Node.js, and Tailwind CSS.
      </motion.p>
      <motion.a
        href="#about-me"
        className="px-5 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded-md text-base md:text-lg font-semibold shadow transition"
        variants={buttonVariants}
        initial="hidden"
        animate="visible"
      >
        Learn More
      </motion.a>
    </section>
  );
};

export default Hero;
