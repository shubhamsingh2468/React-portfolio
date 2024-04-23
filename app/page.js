'use client'

import Head from 'next/head';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer'; // Import the Footer component

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-10 max-w-2xl">
      <Head>
        <title>shubham singh- React.js Developer</title>
        <meta name="description" content="React.js developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col min-h-screen">
        <Hero />
        <AboutMe />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />  {/* Add the Footer component here */}
    </div>
  );
}
