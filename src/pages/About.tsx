import React from 'react';
import { FaLeaf, FaCodeBranch } from 'react-icons/fa';
import SkillsDisplay from '../components/skills'; // the correct path to your SkillsDisplay component

const About: React.FC = () => {
    return (
        <div id="about" className="p-5 flex flex-col md:flex-row items-center space-y-10 md:space-y-0 md:space-x-10 bg-blender">
            <div className="flex-1">
                <img
                    src="headshot.jpeg"
                    alt="Headshot"
                    className="w-3/4 object-cover rounded shadow-lg mx-auto" // reduced image size and centered
                />
            </div>
            <div className="flex-1 space-y-5">
                <h2 className="text-3xl font-bold flex items-center">
                    <FaLeaf className="text-green-500 mr-2 text-3xl" />
                    <span className="text-white">Biology & </span> &nbsp;
                    <span className="text-white">Coding </span>
                    <FaCodeBranch className="ml:3 text-blue-500 mr-2" />

                </h2>
                <p className="text-3xl text-white">
                    I'm Ryan D'Onofrio, a third year PhD student who found his true passion in software development. We are at a critical juncture point in new technologies and I believe I can make an impact.
                </p>
                <p className="text-3xl text-white">
                    Having a strong background in biology allows me to approach problems with a unique perspective. Combined with my coding skills, this enables me to create innovative and impactful solutions.
                </p>

                <h2 className="text-3xl font-bold text-white flex items-center">
                    My Skills
                </h2>
                <SkillsDisplay />
            </div>
        </div>
    );
};

export default About;
