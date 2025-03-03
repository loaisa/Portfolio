import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

import img from '../assets/user-profile-icon.svg'

const motionAmin =

    {initial:{opacity: 0, y: -50},
    whileInView:{opacity: 1, y: 0},
    transition:{duration: 1.6, delay: 1.2}}

const StyledAbout = styled.section`
    padding: 50px 20px;
    background-color: #282c34;
    text-align: center;
    color: white;
    h2 {
        margin-bottom: 20px;
    }
    .about-container{
        display: flex;
        margin: 0 auto;
        max-width: 800px;
        align-items: center;
        img{
            width: 200px;
        }
    }
    p {
        font-weight: bold;
        font-size: 1.5rem;
        margin: 0 auto;
    }
`;

const About= () => {
    return (
        <StyledAbout id="about">
            <motion.h2
                {...motionAmin}

            >
                Обо мне
            </motion.h2>
            <div className='about-container'>

                <motion.p
                    {...motionAmin}

                >
                    Я фронтенд-разработчик с небольшим опытом создания веб-приложений. Мой стек технологий ещё скромный
                    и
                    включает React, JavaScript, Redux-Toolkit.

                </motion.p>
                <motion.img
                    {...motionAmin}
                    src={img} alt="img"/>
            </div>

        </StyledAbout>
    );
};

export default About;