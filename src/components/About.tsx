import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const StyledAbout = styled.section`
    padding: 50px 20px;
    background-color: #282c34;
    text-align: center;
    color: white;
    h2 {
        font-size: 2.5rem;
        margin-bottom: 20px;
    }

    p {
        font-weight: bold;
        font-size: 1.5rem;
        max-width: 800px;
        margin: 0 auto;
    }
`;

const About: React.FC = () => {
    return (
        <StyledAbout id="about">
            <motion.h2
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.6, delay:1.2 }}

            >
                Обо мне
            </motion.h2>
            <motion.p
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.6, delay:1.8 }}

            >
                Я фронтенд-разработчик с небольшим опытом создания веб-приложений. Мой стек технологий ещё скромный и включает React, JavaScript, Redux-Toolkit.
            </motion.p>

        </StyledAbout>
    );
};

export default About;