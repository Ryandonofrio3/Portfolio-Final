// src/components/Footer.tsx

import React from 'react';
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer: React.FC = () => {
    return (
        <div className="bg-blendll p-4">
            <div className="hero flex items-center justify-between text-white">
                <div>
                    &copy; {new Date().getFullYear()} Ryan D'Onofrio. All rights reserved.
                </div>
                <div className="flex space-x-5 px-3">
                    <a href="https://twitter.com/Ryandonofrio3" target="_blank" rel="noopener noreferrer">
                        <FaTwitter className="text-white h-6 w-6 hover:text-green-500 transition duration-200" />
                    </a>
                    <a href="https://github.com/Ryandonofrio3" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="text-white h-6 w-6 hover:text-green-500 transition duration-200" />
                    </a>
                    <a href="https://www.linkedin.com/in/ryan-d-onofrio-bbb321170/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="text-white h-6 w-6 hover:text-green-500 transition duration-200" />
                    </a>
                </div>


            </div>
        </div>
    );
};

export default Footer;
