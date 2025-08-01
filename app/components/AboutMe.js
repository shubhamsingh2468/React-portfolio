import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 60, damping: 18 } },
};

const AboutMe = () => {
  return (
    <section className="about-me bg-gray-100 py-20" id="about-me">
      <div className="container mx-auto px-4 max-w-2xl rounded-xl shadow-lg bg-white">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col items-center"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-bold mb-6 text-center text-blue-700"
          >
            About Me
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-gray-700 text-base md:text-lg leading-relaxed text-center"
          >
            I am a skilled full-stack developer with a proven ability to craft exceptional digital experiences across web and mobile platforms. My expertise lies in leveraging a robust tech stack including <span className="font-semibold text-blue-600">React</span>, <span className="font-semibold text-blue-600">Next.js</span>, <span className="font-semibold text-blue-600">MongoDB</span>, <span className="font-semibold text-blue-600">Express.js</span>, <span className="font-semibold text-blue-600">React Native</span>, <span className="font-semibold text-blue-600">Tailwind CSS</span>, <span className="font-semibold text-blue-600">JavaScript</span>, and <span className="font-semibold text-blue-600">TypeScript</span> to build high-performance, scalable, and user-centric applications.
            <br /><br />
            With a deep understanding of both frontend and backend development, I excel at transforming complex ideas into intuitive and engaging user interfaces. I am proficient in building robust APIs, managing databases, and optimizing application performance. My passion for staying up-to-date with the latest technological advancements ensures that I deliver cutting-edge solutions that meet the evolving needs of modern businesses.
            <br /><br />
            I thrive on challenges and am dedicated to delivering exceptional results. <span className="font-semibold text-blue-600">Let's collaborate to bring your vision to life.</span>
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
