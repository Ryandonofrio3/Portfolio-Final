// src/pages/Projects.tsx

import React from 'react';
import { FaCode } from 'react-icons/fa';
import projects from '../Projects';

const Projects: React.FC = () => {
    return (
        <div id="projects" className="p-5 bg-blender">
            <h2 className="text-2xl mb-5 font-bold text-white"><FaCode className="inline-block mr-2 text-white" />Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                {projects.map((project, index) => (
                    <a
                        href={project.projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        key={index}
                        className="bg-white shadow-lg rounded transform transition duration-500 hover:scale-105 block hover:bg-green-200"
                    >
                        <div className="p-5">
                            <h3 className="font-bold mb-3 text-xl">{project.title}</h3>
                            <p>{project.description}</p>
                            <p>{project.projectDates}</p>
                            <img src={project.imageUrl} alt={project.title} className="mt-3 rounded object-cover h-64 w-full" />
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Projects;
