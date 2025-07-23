import React from "react";
import AboutImage from "../assets/siya.jpeg";

const About = () => {
  return (
    <div className="bg-black text-white py-20" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <img
            src={AboutImage}
            alt="Siya"
            className="w-72 h-80 rounded-lg object-cover shadow-lg mb-8 md:mb-0 hover:scale-105 transition-transform duration-300"
          />

          <div className="flex-1">
            <p className="text-lg mb-6 leading-relaxed text-gray-300">
              👋 I'm <span className="font-semibold text-white">Siya Gajbhe</span>, a dedicated and detail-oriented full-stack developer with a passion for building elegant, performant, and user-focused applications.
              I specialize in modern JavaScript frameworks like <span className="text-green-400">React.js</span> and <span className="text-green-400">Node.js</span>, and love transforming ideas into scalable digital experiences.
            </p>

            <p className="text-md text-gray-400 mb-8">
              My focus lies in crafting clean, responsive, and accessible UIs while maintaining performance and efficiency on the backend.
              I enjoy solving real-world problems, collaborating in cross-functional teams, and continuously learning new technologies.
            </p>

            {/* Skill Progress Bars */}
            <div className="space-y-4">
              <SkillBar label="HTML & CSS" width="90%" />
              <SkillBar label="React JS" width="95%" />
              <SkillBar label="Node JS" width="85%" />
              <SkillBar label="MongoDB" width="80%" />
              <SkillBar label="Tailwind CSS" width="90%" />
            </div>

            {/* Experience Stats 
            <div className="mt-12 flex flex-col sm:flex-row justify-between text-center gap-6 sm:gap-0">
              <StatItem number="20+" label="Projects Completed" />
              <StatItem number="6+" label="Mini Projects" />
              <StatItem number="4+" label="Hackathons Participated" />
            </div>*/}
          </div>
        </div>
      </div>
    </div>
  );
};

// SkillBar Component
const SkillBar = ({ label, width }) => (
  <div className="flex items-center">
    <label className="w-2/5 sm:w-1/4 text-gray-300">{label}</label>
    <div className="grow bg-gray-800 rounded-full h-2.5">
      <div
        className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transition-all duration-500"
        style={{ width }}
      ></div>
    </div>
  </div>
);

// StatItem Component
const StatItem = ({ number, label }) => (
  <div>
    <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
      {number}
    </h3>
    <p className="text-gray-400">{label}</p>
  </div>
);

export default About;
