import React from "react";
import financeImage from "../assets/Expense_Tracker.png";
import talentSyncLogo from "../assets/TalentSync Logo Design.png";
import pizzaImage from "../assets/pizza-app.jpeg";
import glassesImage from "../assets/Glasses.png"; 
import airlineImage from "../assets/airline.jpg";
import code from "../assets/Code_collaboration.jpg";

const projects = [
  {
    id: 1,
    name: "Finance Expense Tracker APP",
    technologies: "Full Stack",
    image: financeImage,
    github: "https://github.com/07Siya/Fianace_Tracker",
  },
  {
    id: 2,
    name: "TalentSync",
    technologies: "MERN Stack",
    image: talentSyncLogo,
    github: "https://github.com/07Siya/Recruitment_Portal",
  },
  {
    id: 3,
    name: "Code Collaboration Web App",
    technologies: "MERN Stack",
    image: code,
    github: "https://github.com/07Siya/Code_Collaboration_WebApp",
  },
  {
    id: 4,
    name: "Pizza App",
    technologies: "Flutter",
    image: pizzaImage,
    github: "https://github.com/07Siya/pizza_app-main",
  },
  {
    id: 5,
    name: "Glasses Classification",
    technologies: "CNN",
    image: glassesImage,
    github: "https://github.com/07Siya/Glasses_Classification",
  },
  {
    id: 6,
    name: "Airline Passenger Satisfaction",
    technologies: "Machine Learning",
    image: airlineImage,
    github: "https://github.com/07Siya/Airline_Passenger_Clustering",
  },
];

const Projects = () => {
  return (
    <div className="bg-black text-white py-20" id="project">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-gray-800 p-6 rounded-lg hover:shadow-lg 
            transform transition-transform duration-300 hover:scale-105">
              <img src={project.image} alt={project.name} className="rounded-lg mb-4 
              w-full h-48 object-cover" />
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-400 mb-4">{project.technologies}</p>
              <a href={project.github} className="inline-block bg-gradient-to-r 
              from-green-400 to-blue-500 text-white px-4 py-2 rounded-full" target="_blank" 
              rel="noopener noreferrer">GitHub</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
