import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

interface SkillProps {
    skill: {
        name: string;
        proficiency: number;
    };
}

const Skill: React.FC<SkillProps> = ({ skill }) => {
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: .6,
    });

    const animation = useAnimation();
    const [value, setValue] = useState(0);

    useEffect(() => {
        if (inView) {
            animation.start({
                opacity: 1,
                y: 0,
                transition: {
                    type: 'spring',
                    duration: 2,
                    bounce: 0.3,
                },
            });
            setValue(skill.proficiency); // Set value to animate progress bar
        }
        if (!inView) {
            animation.start({ opacity: 0, y: -100 });
        }
    }, [animation, inView, skill.proficiency]);

    return (
        <motion.div className="skill" ref={ref} animate={animation}>
            <CircularProgressbarWithChildren
                value={value}
                styles={buildStyles({
                    pathColor: '#49de80',
                    trailColor: '#FFFFFF',
                })}
            >
                <div style={{ color: 'white', fontSize: 15, marginTop: -5 }}>
                    <strong>{skill.name}</strong>
                </div>
            </CircularProgressbarWithChildren>
        </motion.div>
    );
};



const SkillsDisplay: React.FC = () => {
    const skills = [
        { name: 'Python', proficiency: 85 },
        { name: 'AI Workflows', proficiency: 95 },
        { name: 'CRISPR', proficiency: 90 },
        { name: 'Wet Lab', proficiency: 75 },
    ];

    return (
        <div className="skills-container flex flex-row justify-between">
            {skills.map((skill, index) => (
                <Skill key={index} skill={skill} />
            ))}
        </div>
    );
};

export default SkillsDisplay;
