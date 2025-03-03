import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const StyledHero = styled.section`
    text-align: center;
    padding: 100px 20px;
    color: black;
    background: linear-gradient(-45deg, #ee7752, #808080, #23a6d5, #23d5ab);
    background-size: 400% 400%;
    animation: gradient 15s ease infinite;

    h1 {
        font-size: 3rem;
        margin-bottom: 20px;
    }

    p {
        font-size: 1.8rem;
        font-weight: bold;
    }

    @keyframes gradient {
        0% {
            background-position: 0 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0 50%;
        }
    }
`;

const Hero= () => {
    return (
        <StyledHero >
            <motion.h1
                initial={{ opacity: 0, y: -50 }}

                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, y: 0 }}
            >
                Привет, я Евгений
            </motion.h1>
            <motion.p
                initial={{ opacity: 0, y: 50 }}

                transition={{ duration: 1, delay: 0.6}}
                whileInView={{ opacity: 1, y: 0 }}
            >
               Начинающий фронтенд-разработчик.
            </motion.p>
        </StyledHero>
    );
};

export default Hero;