import React from 'react';

const Skills = () => {
  const skills = [
    'React.js',
    'Redux',
    'Next.js',
    'JavaScript (ES6+)',
    'Node.js/Express.js',
    'Verson control(git)',
    'react-native',
    'firebase/supabase',
    
  ];

  return (
    <section className="skills bg-white py-20" id="skills">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2>Skills</h2>
        <ul className="skill-list grid grid-cols-1 md:grid-cols-2 gap-4">
          {skills.map((skill) => (
            <li key={skill} className="flex items-center py-2">
              <span className="inline-block bg-blue-500 text-white px-2 py-1 rounded-full mr-4 text-lg font-medium">
                {skill}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
