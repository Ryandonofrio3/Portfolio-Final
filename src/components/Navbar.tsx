import React, { useState, useEffect } from "react";

const Navbar: React.FC = () => {
    const [lastYPos, setLastYPos] = useState(0);
    const [shouldShowActions, setShouldShowActions] = useState(true);

    useEffect(() => {
        function handleScroll() {
            const yPos = window.scrollY;
            const isScrollingUp = yPos < lastYPos;

            setShouldShowActions(isScrollingUp);
            setLastYPos(yPos);
        }

        window.addEventListener("scroll", handleScroll, false);

        return () => {
            window.removeEventListener("scroll", handleScroll, false);
        };
    }, [lastYPos]);

    return (
        <nav
            className={`w-full p-5 fixed top-0 left-0 z-50 bg-transparent transition ease-in-out duration-200 ${shouldShowActions ? "opacity-100" : "opacity-0"
                }`}
        >
            <ul className="flex justify-end space-x-5">
                <li><a href="#hero" className={`text-2xl  text-white hover:text-green-300 transition duration-200`}>Home</a></li>
                <li><a href="#about" className={`text-2xl text-white hover:text-green-300 transition duration-200`}>About</a></li>
                <li><a href="#projects" className={`text-2xl text-white hover:text-green-300 transition duration-200`}>Projects</a></li>
                <li><a href="#contact" className={`text-2xl text-white hover:text-green-300 transition duration-200`}>Contact</a></li>
                <li><a href="#resume" className={`text-2xl text-white hover:text-green-300 transition duration-200`}>Resume</a></li>      </ul>
        </nav>
    );
};

export default Navbar;
