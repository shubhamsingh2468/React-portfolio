import React from "react";
import { motion } from "framer-motion";

const AboutMe = () => {
  const skills = [
    { category: "Frontend", items: ["React.js", "Next.js", "Tailwind CSS", "Material UI", "Framer Motion"] },
    { category: "Backend", items: ["Node.js", "Express.js", "MongoDB", "Firebase", "RESTful APIs"] },
    { category: "Mobile", items: ["React Native", "Expo", "Firebase", "Redux"] },
  ];

  return (
    <section id="about-me" className="relative py-20 md:py-32 px-4 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 mb-4">
            About Me
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a passionate Full-Stack Developer with expertise in building scalable web and mobile applications. With 5+ years of experience, I've worked with startups and established companies to deliver high-quality digital solutions.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              My passion lies in creating elegant, user-centric solutions that solve real-world problems. I'm constantly learning and staying updated with the latest technologies and best practices in the industry.
            </p>
            <div className="pt-4">
              <a href="#contact" className="inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white rounded-lg font-semibold transition transform hover:scale-105">
                Let's Work Together
              </a>
            </div>
          </motion.div>

          {/* Right Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {skills.map((skillGroup, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm border border-blue-500/20 rounded-lg p-6 hover:border-blue-500/50 transition">
                <h3 className="text-xl font-bold text-blue-400 mb-4">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-3">
                  {skillGroup.items.map((skill, i) => (
                    <span key={i} className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium hover:bg-blue-500/30 transition">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
