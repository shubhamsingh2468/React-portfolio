import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear(); // Dynamic year

  return (
    <footer className="footer bg-gray-900 text-white py-4 text-center">
      <p>Copyright &copy; {year} shubham singh</p>
      <a href="mailto:shubhamsinha3396@gmail.com" className="text-blue-500 hover:underline">shubhamsinha3396@gmail.com</a>
    </footer>
  );
};

export default Footer;
