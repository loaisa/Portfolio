import React from 'react';
import {motion} from 'framer-motion';
import styled from 'styled-components';

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background-color: #282c34;
    color: white;
    overflow: hidden;
    
`;

const Nav = styled.nav`
    display: flex;
    gap: 20px;


    a {
        color: white;
        text-decoration: none;
        font-weight: bold;
        font-size: 25px;

        &:hover {
            color: #61dafb;
        }
    }
`;

const Header = () => {

    const listNav = ['Обо мне', 'Навыки', 'Проекты', 'Контакты']

    return (
        <StyledHeader>
            <motion.div
                initial={{opacity: 0, x:-200}}
                transition={{duration: 0.8, delay: 0.2}}
                whileInView={{ opacity: 1, x: 0 }}
            >
                <h1>Мое Портфолио</h1>
            </motion.div>
            <Nav>
                {listNav.map((value, index) =>
                    <motion.a
                        key={index}
                        initial={{opacity: 0, x:200 }}
                        transition={{duration: 1, delay: index * 0.2 }}
                        whileHover={{scale: 1.1}}
                        whileInView={{ opacity: 1, x:0}}

                    >
                        {value}
                    </motion.a>
                )}
            </Nav>
        </StyledHeader>
    );
};

export default Header;