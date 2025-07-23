import React from "react";

// Frontend Icons
import html5Icon from '../assets/Skills/html5.jpg';
import css3Icon from '../assets/Skills/css3.jpg';
import jsIcon from '../assets/Skills/javascript.jpg';
import reactIcon from '../assets/Skills/react.jpg';
import tailwindIcon from '../assets/Skills/tailwind.jpg';
import nextjsIcon from '../assets/Skills/next.jpg';

// Backend Icons
import nodejsIcon from '../assets/Skills/node.jpg';
import expressIcon from '../assets/Skills/express.jpg';
import mongodbIcon from '../assets/Skills/MongoDB.jpg';
import mysqlIcon from '../assets/Skills/MySQL.jpg';

// ML Icons
import pythonIcon from '../assets/Skills/Python.jpg';
import numpyIcon from '../assets/Skills/Pandas.jpg';
import sklearnIcon from '../assets/Skills/Scikit-learn.jpg';
import tensorflowIcon from '../assets/Skills/Keras.jpg';

// Other Tools
import gitIcon from '../assets/Skills/Git.jpg';
import githubIcon from '../assets/Skills/github.jpg';
import vercelIcon from '../assets/Skills/Vercel.jpg';
import netlifyIcon from '../assets/Skills/Netlify.jpg';
import postmanIcon from '../assets/Skills/Postman.jpg';

// Skills Arrays
const frontendSkills = [
  { name: "HTML5", icon: html5Icon },
  { name: "CSS3", icon: css3Icon },
  { name: "JavaScript", icon: jsIcon },
  { name: "React.js", icon: reactIcon },
  { name: "Tailwind CSS", icon: tailwindIcon },
  { name: "Next.js", icon: nextjsIcon },
];

const backendSkills = [
  { name: "Node.js", icon: nodejsIcon },
  { name: "Express.js", icon: expressIcon },
  { name: "MongoDB", icon: mongodbIcon },
  { name: "MySQL", icon: mysqlIcon },
];

const mlSkills = [
  { name: "Python", icon: pythonIcon },
  { name: "Pandas & NumPy", icon: numpyIcon },
  { name: "Scikit-Learn", icon: sklearnIcon },
  { name: "TensorFlow / Keras", icon: tensorflowIcon },
];

const otherSkills = [
  { name: "Git", icon: gitIcon },
  { name: "GitHub", icon: githubIcon },
  { name: "Vercel", icon: vercelIcon },
  { name: "Netlify", icon: netlifyIcon },
  { name: "Postman", icon: postmanIcon },
];

// Skill Card Component
const SkillCard = ({ title, skills, gradientClass }) => (
  <div className="bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl transition-transform transform hover:scale-105">
    <h3 className={`text-2xl font-bold text-center text-transparent bg-clip-text ${gradientClass}`}>
      {title}
    </h3>
    <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-2">
      {skills.map((skill, index) => (
        <div key={index} className="flex items-center space-x-3">
          <img
            src={skill.icon}
            alt={skill.name}
            className="w-10 h-10 rounded-full shadow-md border border-gray-600 object-cover"
          />
          <span className="text-gray-200">{skill.name}</span>
        </div>
      ))}
    </div>
  </div>
);

// Main Component
const Skills = () => {
  return (
    <div className="bg-black text-white py-20" id="skills">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <SkillCard
            title="Frontend Development"
            skills={frontendSkills}
            gradientClass="bg-gradient-to-r from-blue-400 to-cyan-500"
          />
          <SkillCard
            title="Backend Development"
            skills={backendSkills}
            gradientClass="bg-gradient-to-r from-green-400 to-lime-500"
          />
          <SkillCard
            title="Machine Learning"
            skills={mlSkills}
            gradientClass="bg-gradient-to-r from-purple-400 to-pink-500"
          />
          <SkillCard
            title="Other Tools"
            skills={otherSkills}
            gradientClass="bg-gradient-to-r from-orange-400 to-yellow-500"
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
