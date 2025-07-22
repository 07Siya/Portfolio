import React from 'react';

const Education = () => {
  const educationData = [
    {
      degree: "BTech in Information Technology",
      institution: "Shri Guru Gobind Singhji Institute of Engineering and Technology, Nanded.",
      year: "2021 - 2025",
      grade: "CGPA: 6.34",
    },
    {
      degree: "HSC (12th Standard)",
      institution: "Z. P. Jr. College of Science, Bhadrawati Chandrapur.",
      year: "2018 - 2020",
      grade: "Percentage: 71%",
    },
    {
      degree: "SSC (10th Standard)",
      institution: "Kisan Vidyalaya Ashta, Chandrapur.",
      year: "2017 - 2018",
      grade: "Percentage: 76%",
    },
  ];

  return (
    <div className="bg-black text-white py-20" id="education">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-4xl font-bold text-center mb-12">Education</h2>
        <div className="space-y-10">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="border-l-4 border-green-400 pl-6 py-4 rounded bg-[#121212] shadow hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-2xl font-semibold">{edu.degree}</h3>
              <p className="text-green-400">{edu.institution}</p>
              <p className="text-gray-400">{edu.year}</p>
              <p className="text-sm text-gray-300">{edu.grade}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
