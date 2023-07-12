import React from 'react';
import { FaLeaf, FaCodeBranch } from 'react-icons/fa';
import SkillsDisplay from '../components/skills'; // the correct path to your SkillsDisplay component

const About: React.FC = () => {
    return (
        <div id="about" className="hero p-5 flex flex-col md:flex-row items-center space-y-10 md:space-y-0 md:space-x-10 bg-blender">
            <div className="flex-1">
                <img
                    src="headshot.jpeg"
                    alt="Headshot"
                    className="w-3/4 object-cover rounded shadow-lg mx-auto" // reduced image size and centered
                />
            </div>
            <div className="flex-1 space-y-5">
                <h2 className="text-3xl font-bold flex items-center text-center ml-20">
                    <FaLeaf className="text-green-500 mr-3 text-3xl" />
                    <span className="text-white">Where Biology Meets</span> &nbsp;
                    <span className="text-white">Code</span>
                    <FaCodeBranch className="ml-3 text-blue-500 mr-2" />
                </h2>

                <p className="text-3xl text-white text-left">
                    I am Ryan D'Onofrio, a PhD candiate in Dynamical Neuroscience at UC Santa Barbara. <br /> <br />  Throughout this journey, I've uncovered a passion for the intersection of software development and scientific exploration <br /> <br />
                    Armed with creative problem-solving abilities, an innovative mindset, and a deep-seated passion for advancing our world through science, I am excited to

                    be a part of the upcoming technological revolution
                </p>
            </div >
        </div >
    );
};

export default About;
