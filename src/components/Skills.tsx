import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const StyledSkills = styled.section`
    padding: 50px 20px;
    background-color: #282c34;
    text-align: center;
    color: white;

    h2 {
        font-size: 2.5rem;
        margin-bottom: 20px;
    }

    ul {
        list-style: none;
        padding: 0;
        display: flex;
        justify-content: center;
        gap: 20px;
        flex-wrap: wrap;
    }

    li {
        color: black;
        font-size: 1.2rem;
        background-color: #f1f1f1;
        padding: 10px 20px;
        border-radius: 5px;
    }
`;

const Skills: React.FC = () => {
    const skills = ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Redux-Toolkit'];

    return (
        <StyledSkills id="skills">
            <motion.h2
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 2 }}
            >
                Навыки
            </motion.h2>
            <ul>
                {skills.map((skill, index) => (
                    <motion.li
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.4 }}
                    >
                        {skill}
                    </motion.li>
                ))}
            </ul>
        </StyledSkills>
    );
};

export default Skills;