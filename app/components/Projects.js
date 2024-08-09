import React from 'react';
import Link from 'next/link'; // Import Next.js Link component

const projects = [
  {
    title: 'Banbanjara',
    description: 'This is an article about travel experiences offered by BanBanjara. It discusses trekking, tours, and activities in various locations around India. The company offers curated experiences for different interests, such as adventure travel, weekend getaways, and sightseeing. BanBanjara also offers luxury experiences.',
    technologies: ['React.js', 'Next.js', 'MaterialUI', 'redux', 'express.js', 'mongodb'],
    link: 'https://banbanjara.com/', 
  },
  {
    title: 'Softcoplus',
    description: 'Softcoplus is a company that offers Salesforce services. They describe themselves as a best service and product based company in Canada. Their services include AI/ML services, cloudification services, CMS software, data science services, data services, DevOps services, digital platform development, enterprise application development, mobile app development, quality assurance & testing services, and Salesforce development. Softcoplus states that their motto is mutual growth and that can only be achieved by proper customer management.',
    technologies: ['React.js', 'Next.js', 'Tailwindcss', 'express.js', 'firebase', ],
    link: 'https://softcoplus7-website.vercel.app/', 
  },
  {
    title: 'Bharat-Taxi',
    description: 'the fastest growing online cab booking and taxi hire company in India committed to providing door-to-door online taxi service to travelers. India is huge in terms of area, population, and diversity, proving service is very pleasing. We make taxi booking available to all with our website. Cabs at affordable prices allow anyone to enjoy our service.',
    technologies: ['next.js', 'react.js', 'node.js', 'express.js', 'typescript','mongodb'],
    link: 'https://www.bharattaxi.com/', 
  },

  {
    title: 'Rapid-Pest',
    description: 'This Melbourne, Victoria-based company is family-run and has been providing pest and termite management services for more than ten years. initiated in 2011.',
    technologies: ['react.js', 'next.js', 'mongodb', 'javascript', 'tailwindcss'],
    link: 'https://www.rapidpestcontrolmelbourne.com.au/', 
  },
  {
    title: 'Instashop',
    description: 'InstaShop is an online marketplace and on-demand delivery app that connects users with local shops in the Middle East.',
    technologies: ['React-native', 'firebase', 'javascript', 'tailwindcss'],
    link: 'https://play.google.com/store/apps/details?id=com.stedor.instashop&hl=en_IN', 
  },

  {
    title: 'BillPoint',
    description: 'With BillPoint, you can enjoy a hassle-free payment experience for all your essential bills and services. We offer a simple, fast, and secure way to pay your utility bills, and even place bets all in one place.',
    technologies: ['React-native', 'firebase', 'javascript', 'tailwindcss'],
    link: 'https://play.google.com/store/apps/details?id=co.billpoint.app&hl=en_IN', 
  },
];



const Projects = () => {
  return (
    <section className="projects bg-gray-200 py-20" id="projects">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2>Projects</h2>
        <ul className="project-list grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <li key={project.title} className="project rounded-lg border border-gray-300 p-4">
              {project.link.startsWith('http') ? ( // Check if it's an external link
                <a href={project.link} target="_blank" rel="noreferrer" className="text-blue-500 hover:underline">
                  {project.title}
                </a>
              ) : (
                <Link href={project.link}>
                  {project.title}  {/* Removed the inner <a> tag */}
                </Link>
              )}
              <p className="text-sm mt-2">{project.description}</p>
              {project.technologies && ( // Handle missing technologies gracefully
                <ul className="technologies grid grid-cols-3 items-center text-sm mt-4 ">
                  {project.technologies.map((tech) => (
                    <li key={tech} className="mr-2 mt-4">
                      <span className="inline-block bg-blue-500 text-white px-2 py-1 rounded-full">{tech}</span>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Projects;
