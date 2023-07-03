// src/pages/Hero.tsx

import React from 'react';
import { FaCodeBranch, FaDna, FaFlask } from 'react-icons/fa';
import ThreeScene from '../components/ThreeScene';
const Hero: React.FC = () => {
    return (
        <div id="hero" className="relative h-screen flex items-center justify-center text-center">
            <ThreeScene />
            <div className="absolute z-10 text-white p-5 bg-black bg-opacity-10 rounded shadow-lg">
                <h1 className="text-5xl md:text-7xl font-bold mb-4 text-shadow">Hi, I'm <span className="text-green-400">Ryan D'Onofrio</span></h1>
                <p className="text-2xl md:text-4xl mb-10 text-shadow">A <span className="text-green-400">Biologist</span> Turned <span className="text-green-400">Programmer</span></p>
                <a href="#about" className="py-2 px-4 bg-purple-600 hover:bg-purple-700 transition duration-200 rounded text-white inline-flex items-center">
                    <FaFlask className="mr-2" /> Discover More <  FaCodeBranch className="ml-2" />
                </a>
            </div>
        </div>
    );
};



export default Hero;
