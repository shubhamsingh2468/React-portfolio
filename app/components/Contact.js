import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  const contactMethods = [
    { icon: '📧', label: 'Email', value: 'shubhamsinha3396@gmail.com', link: 'mailto:shubhamsinha3396@gmail.com' },
    { icon: '🐙', label: 'GitHub', value: 'github.com/shubhamsingh2468', link: 'https://github.com/shubhamsingh2468' },
    { icon: '📘', label: 'Facebook', value: 'facebook.com/shubham.kumar.singh.988083', link: 'https://www.facebook.com/shubham.kumar.singh.988083/' },
  ];

  return (
    <section id="contact" className="relative py-20 md:py-32 px-4 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="max-w-5xl mx-auto">
        <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 mb-3">
            Get In Touch
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">Let's collaborate and create something amazing together!</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <form onSubmit={handleSubmit} className="space-y-6 bg-gray-800/40 p-6 rounded-lg border border-blue-500/10">
              <div>
                <label className="block text-white font-semibold mb-2">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-blue-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">Your Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-blue-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 bg-gray-900 border border-blue-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition resize-none"
                  placeholder="Your message here..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-semibold shadow"
              >
                {submitted ? '✓ Message Sent!' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Methods */}
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="space-y-4">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-gradient-to-br from-gray-800 to-gray-900 border border-blue-500/10 rounded-lg hover:shadow-lg transition"
              >
                <div className="text-3xl w-12 h-12 flex items-center justify-center bg-blue-500/10 rounded-lg">{method.icon}</div>

                <div className="min-w-0">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-white font-semibold">{method.label}</h3>
                  </div>
                  <p className="text-gray-400 text-sm mt-1 break-all md:max-w-md">{method.value}</p>
                </div>
              </a>
            ))}

            {/* Optional: small note */}
            <div className="text-sm text-gray-400 mt-4">
              Or send a direct email to <a href="mailto:shubhamsinha3396@gmail.com" className="text-blue-400 underline">shubhamsinha3396@gmail.com</a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
