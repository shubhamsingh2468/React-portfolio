import React from 'react';

const Contact = () => {
  return (
    <section className="contact bg-gray-100 py-20" id="contact">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2>Contact</h2>
        <p>Feel free to reach out and connect with me!</p>
        <form className="contact-form mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label htmlFor="name" className="text-sm font-medium block mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
              required
            />
            <label htmlFor="email" className="text-sm font-medium block mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="your.email@example.com"
              className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
              required
            />
          </div>
          <label htmlFor="message" className="text-sm font-medium block mt-4 mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Write your message here..."
            className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
            required
          ></textarea>
          <button
            type="submit"
            className="px-4 py-2 mt-8 bg-blue-500 hover:bg-blue-700 text-white rounded-md font-medium"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
