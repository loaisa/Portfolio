import React from 'react';
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

    const HandleScroll=(id)=>{
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
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
            <Nav>
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