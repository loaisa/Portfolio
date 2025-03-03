import React from 'react';
import {motion} from "framer-motion";
import styled from "styled-components";


const StyledContact = styled.section`
    padding: 50px 20px;
    background-color: #282c34;
    text-align: center;

    h2 {
        color: white;
    }

    form {
        max-width: 600px;
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        gap: 15px;

    }

    input, textarea, button {
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
        font-size: 1rem;
        outline: none;
    }

    button {
        background-color: white;
        color: black;
        cursor: pointer;

        &:hover {
            background-color: #d3d3d3;
        }
    }

`

const Contact = () => {
    return (
        <StyledContact id='contacts'>
            <motion.h2
                initial={{opacity: 0, y: -50}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 1}}
            >
                Контакты
            </motion.h2>
            <form action="">
                <motion.input type="text" placeholder='Ваше Имя'
                              initial={{opacity: 0, y: -50}}
                              whileInView={{opacity: 1, y: 0}}
                              transition={{delay: 1,duration:1}}/>
                <motion.input type="email" placeholder='Ваш email'
                              initial={{opacity: 0, y: -50}}
                              whileInView={{opacity: 1, y: 0}}
                              transition={{delay: 1.5,duration:1}}/>
                <motion.textarea placeholder='Ваше сообщение' rows={5}
                                 initial={{opacity: 0, y: -50}}
                                 whileInView={{opacity: 1, y: 0,}}
                                 transition={{delay: 2, duration:1}}/>
                <motion.button
                    initial={{opacity: 0, y: -50}}
                    whileInView={{opacity: 1, y: 0,}}
                    transition={{delay: 2.5, duration:1}}
                >
                    Отправить
                </motion.button>
            </form>
        </StyledContact>
    );
};

export default Contact;