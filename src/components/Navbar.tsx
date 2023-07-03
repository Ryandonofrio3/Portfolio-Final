// src/components/Navbar.tsx
import React, { useState, useEffect } from "react";

const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const checkScroll = () => {
            // Here, 800 is the approximate height of your hero section.
            // Adjust this value to match the actual height of your hero section.
            setIsScrolled(window.pageYOffset > 650);
        };

        window.addEventListener('scroll', checkScroll);

        // Cleanup after the effect:
        return () => {
            window.removeEventListener('scroll', checkScroll);
        };
    }, []);

    return (
        <nav className="w-full p-5 fixed top-0 left-0 z-50 bg-transparent">
            <ul className="flex justify-end space-x-5">
                <li><a href="#hero" className={`text-2xl ${isScrolled ? 'text-white' : 'text-white'} hover:text-green-300 transition duration-200`}>Home</a></li>
                <li><a href="#about" className={`text-2xl ${isScrolled ? 'text-white' : 'text-white'} hover:text-green-300 transition duration-200`}>About</a></li>
                <li><a href="#projects" className={`text-2xl ${isScrolled ? 'text-white' : 'text-white'} hover:text-green-300 transition duration-200`}>Projects</a></li>
                <li><a href="#contact" className={`text-2xl ${isScrolled ? 'text-white' : 'text-white'} hover:text-green-300 transition duration-200`}>Contact</a></li>
                {/* <li><a href="#blog" className={`text-2xl ${isScrolled ? 'text-black' : 'text-white'} hover:text-green-300 transition duration-200`}>Blog</a></li> */}
                <li><a href="#resume" className={`text-2xl ${isScrolled ? 'text-white' : 'text-white'} hover:text-green-300 transition duration-200`}>Resume</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
