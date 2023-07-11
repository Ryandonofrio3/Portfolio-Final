import React, { useState, useEffect } from 'react';
import { FaCode, FaChevronCircleDown, FaChevronCircleUp } from 'react-icons/fa';
import projects from '../Projects';

const Projects: React.FC = () => {
    const [clicked, setClicked] = useState<Array<boolean>>(new Array(projects.length).fill(false));

    const handleClick = (index: number) => {
        const newClicked = [...clicked];
        newClicked[index] = !newClicked[index];
        setClicked(newClicked);
    };

    useEffect(() => {
        setClicked(new Array(projects.length).fill(false));
    }, [projects]);

    return (
        <div id="projects" className="p-5 bg-blender">
            <h2 className="text-3xl mb-5 font-bold text-white">
                <FaCode className="inline-block mr-2 text-white" />Projects
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className={`card-container bg-white shadow-lg rounded transform transition-all duration-500 hover:bg-green-200 ${clicked[index] ? "clicked" : ""}`}
                        onClick={() => handleClick(index)}
                    >
                        <div className={`card ${clicked[index] ? "rotate-y-180" : ""}`}>
                            <div className="card-face front">
                                <div className="p-5">
                                    <h3 className="font-bold mb-3 text-xl">{project.title}</h3>
                                    <div className="image-container">
                                        <img src={project.imageUrl} alt={project.title} className="mt-3 rounded object-cover h-64 w-50 align-middle" />
                                    </div>
                                    <div className="flex justify-center items-center mt-4">
                                        <FaChevronCircleDown size={30} />
                                    </div>
                                </div>
                            </div>
                            <div className="card-face back flex flex-col items-center justify-center h-full">
                                <div className="flex justify-center items-center mb-4">
                                    <FaChevronCircleUp size={30} />
                                </div>
                                <div className="p-5 text-center">
                                    <h3 className="font-bold mb-4 text-xl">{project.title}</h3>
                                    <p>{project.description}</p>
                                    <p>{project.projectDates}</p>
                                    <a href={project.projectUrl} target="_blank" rel="noopener noreferrer">
                                        <button className="py-2 px-4 mt-3 bg-purple-600 hover:bg-purple-700 transition duration-200 rounded text-white inline-flex items-center">
                                            Read More
                                        </button>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
