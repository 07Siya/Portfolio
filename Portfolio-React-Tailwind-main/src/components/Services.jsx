import React from "react";

// Skill arrays
const frontendSkills = [
  "HTML5",
  "CSS3",
  "JavaScript (ES6+)",
  "React.js",
  "Tailwind CSS",
  "Redux / Context API",
];

const backendSkills = [
  "Node.js",
  "Express.js",
  "MongoDB",
  "RESTful APIs",
  "Authentication (JWT, OAuth)",
  "Git & GitHub",
];

const mlSkills = [
  "Python",
  "Pandas & NumPy",
  "Scikit-Learn",
  "TensorFlow / Keras",
  "Data Visualization (Matplotlib, Seaborn)",
  "Model Evaluation & Tuning",
];

const otherSkills = [
  "Git",
  "GitHub",
  "Vercel",
  "Netlify",
  "Postman",
];

// SkillCard Component
const SkillCard = ({ title, skills, gradientClass }) => (
  <div
    className="bg-gray-800 px-6 py-8 rounded-lg hover:shadow-lg transform transition-transform 
    duration-300 hover:scale-105"
  >
    <h3
      className={`text-2xl font-bold text-transparent bg-clip-text ${gradientClass}`}
    >
      {title}
    </h3>
    <ul className="mt-4 space-y-2 text-gray-300 list-disc list-inside">
      {skills.map((skill, index) => (
        <li key={index}>{skill}</li>
      ))}
    </ul>
  </div>
);

// Main Skills Component
const Skills = () => {
  return (
    <div className="bg-black text-white py-20" id="skills">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
