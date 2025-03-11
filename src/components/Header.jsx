import React, { useState } from 'react';
import {motion} from 'framer-motion';
import styled from 'styled-components';

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #282c34;
    color: white;
    overflow: hidden;
    position: sticky;
    top: 0;
    z-index: 1000;
    padding: 0 30px;
    
`;

const Nav = styled.nav`
    display: flex;
    gap: 20px;

    @media (max-width: 768px) {
        position: fixed;
        top: 0;
        right: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
        height: 100vh;
        width: 250px;
        background-color: #282c34;
        flex-direction: column;
        padding: 80px 20px;
        transition: right 0.3s ease-in-out;
    }

    a {
        color: white;
        text-decoration: none;
        font-weight: bold;
        font-size: 25px;

        &:hover {
            color: #61dafb;
        }

        @media (max-width: 768px) {
            font-size: 20px;
            padding: 15px 0;
        }
    }
`;

const BurgerButton = styled.button`
    display: none;
    background: none;
    border: none;
    cursor: pointer;
    padding: 10px;
    z-index: 1001;

    @media (max-width: 768px) {
        display: block;
    }

    div {
        width: 25px;
        height: 3px;
        background-color: white;
        margin: 5px 0;
        transition: all 0.3s ease;

        &:nth-child(1) {
            transform: ${({ isOpen }) => isOpen ? 'rotate(45deg) translate(8px, 6px)' : 'rotate(0)'};
        }

        &:nth-child(2) {
            opacity: ${({ isOpen }) => isOpen ? '0' : '1'};
        }

        &:nth-child(3) {
            transform: ${({ isOpen }) => isOpen ? 'rotate(-45deg) translate(7px, -5px)' : 'rotate(0)'};
        }
    }
`;

const Overlay = styled.div`
    display: none;
    
    @media (max-width: 768px) {
        display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
    }
`;

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const HandleScroll=(id)=>{
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsOpen(false);
    }

    const ListNav = ['Обо мне', 'Навыки', 'Проекты', 'Контакты']
    const idNav = ['about', 'skills', 'projects', 'contacts']

    return (
        <StyledHeader>
            <motion.div
                initial={{opacity: 0, x:-200}}
                transition={{duration: 0.8, delay: 0.2}}
                whileInView={{ opacity: 1, x: 0 }}
            >
                <h1>Мое Портфолио</h1>
            </motion.div>
            <BurgerButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
                <div />
                <div />
                <div />
            </BurgerButton>
            <Overlay isOpen={isOpen} onClick={() => setIsOpen(false)} />
            <Nav isOpen={isOpen}>
                {ListNav.map((value, index) =>
                    <motion.a
                        key={index}
                        initial={{opacity: 0, x:100 }}
                        transition={{duration: 1, delay: index * 0.2 }}
                        whileHover={{scale: 1.1}}
                        animate={{ opacity: 1, x:0}}
                        onClick={()=>HandleScroll(idNav[index])}
                    >
                        {value}
                    </motion.a>
                )}
            </Nav>
        </StyledHeader>
    );
};

export default Header;