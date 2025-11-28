import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about-me' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-gray-800 to-gray-900 border-t border-blue-500/20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 mb-3">
              Shubham Singh
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Full-Stack Developer passionate about building exceptional digital experiences and scalable solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 transition duration-300 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links: GitHub & Facebook only */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-white font-semibold mb-4">Get in Touch</h4>
            <div className="flex gap-4">
              <motion.a
                href="https://github.com/shubhamsingh2468"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="w-10 h-10 bg-blue-500/10 hover:bg-blue-500/20 rounded-lg flex items-center justify-center text-lg transition border border-blue-500/30"
                title="GitHub"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-gray-200">
                  <path d="M12 .5C5.7.5.6 5.6.6 11.9c0 5 3.3 9.2 7.9 10.7.6.1.8-.3.8-.6v-2.1c-3.2.7-3.9-1.5-3.9-1.5-.5-1.2-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.2.1 1.9 1.3 1.9 1.3 1 .1.8 1.7.8 1.7.9 1.5 2.4 1.1 3 .8.1-.7.4-1.1.7-1.4-2.6-.3-5.3-1.3-5.3-6 0-1.3.5-2.3 1.2-3.2-.1-.3-.5-1.6.1-3.3 0 0 1-.3 3.3 1.2.9-.3 1.9-.4 2.9-.4s2 .1 2.9.4c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 3 .1 3.3.8.9 1.2 1.9 1.2 3.2 0 4.7-2.7 5.7-5.3 6 .4.3.8 1 .8 2v3c0 .3.2.7.8.6 4.6-1.5 7.9-5.7 7.9-10.7C23.4 5.6 18.3.5 12 .5z" />
                </svg>
              </motion.a>

              <motion.a
                href="https://www.facebook.com/shubham.kumar.singh.988083/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="w-10 h-10 bg-blue-500/10 hover:bg-blue-500/20 rounded-lg flex items-center justify-center text-lg transition border border-blue-500/30"
                title="Facebook"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-gray-200">
                  <path d="M22 12.1C22 6.6 17.5 2.1 12 2.1S2 6.6 2 12.1c0 5 3.7 9.1 8.5 9.9v-7h-2.6v-2.9H10.5V9.1c0-2.6 1.5-4 3.8-4 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.6v2h2.7l-.4 2.9h-2.3v7C18.3 21.2 22 17.1 22 12.1z" />
                </svg>
              </motion.a>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-blue-500/20 py-8"></div>

        <motion.div
          className="flex flex-col md:flex-row justify-between items-center text-center md:text-left"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-gray-400 text-sm">
            © {currentYear} Shubham Singh. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-4 md:mt-0">
            Designed & Built with <span className="text-red-500">❤️</span> using Next.js & Tailwind CSS
          </p>
        </motion.div>
      </div>

      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 rounded-lg flex items-center justify-center text-white shadow-lg transition"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        ↑
      </motion.button>
    </footer>
  );
};

export default Footer;
