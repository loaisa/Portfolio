import React from 'react';
import styled from "styled-components";


const FooterStyled = styled.section`
    text-align: center;
    padding: 20px;
    background-color: #ffffff;
    color: black;

    a {
        color: #000000;
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }
`;
const Footer = () => {
    return (
        <FooterStyled>
            <p>© 2025 Евгений :)</p>
            <p>
                Свяжитесь со мной: <a href="Webloaisa@gmail.com">Webloaisa@gmail.com</a>
            </p>
            <p>https://github.com/loaisa</p>
        </FooterStyled>
    );
};

export default Footer;