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
                <h2 className="text-3xl font-bold flex items-center text-left">
                    <FaLeaf className="text-green-500 mr-3 text-3xl" />
                    <span className="text-white">Where Biology Meets</span> &nbsp;
                    <span className="text-white">Code</span>
                    <FaCodeBranch className="ml-3 text-blue-500 mr-2" />
                </h2>

                <p className="text-3xl text-white text-left">
                    I am Ryan D'Onofrio, a PhD candiate in Dynamical Neuroscience at UC Santa Barbara. <br /> <br />  Throughout this journey, I've uncovered a passion for building Artificial Intelligence workflows to enhance scientific exploration <br /> <br />
                    Armed with creative problem-solving abilities, and an entrepreneurial spirit I am excited to

                    be a part of the upcoming technological revolution
                </p>
                <br />
                <br />
                <p className="text-3xl text-white text-left">Some technologies I have worked with include:</p>
                <div style={{ display: "flex" }}>
                    <div style={{ flex: "1" }}>
                        <br />
                        <ul className="text-2xl text-left justify-left text-white">
                            <li> * Python</li>
                            <li> * R/RStudio</li>
                            <li>* CRISPR-Cas9</li>
                            <li>* React/TailwindCSS</li>
                        </ul>
                    </div>
                    <div style={{ flex: "1", marginLeft: "20px", marginTop: "25px" }}>
                        <ul className="text-2xl text-left justify-left text-white">

                            <li>* Infusion Cloning</li>
                            <li>* OpenAI API</li>
                            <li>* MGDrive</li>
                            <li>* DeepSqueak</li>
                        </ul>
                    </div>
                </div>

            </div >
        </div >
    );
};

export default About;
