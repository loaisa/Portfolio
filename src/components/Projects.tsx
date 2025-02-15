import React from 'react';
import {motion} from 'framer-motion';
import styled from 'styled-components';

const StyledProjects = styled.section`
    padding: 50px 20px;
    background-color: #f9f9f9;
    text-align: center;

    h2 {
        font-size: 2.5rem;
        margin-bottom: 20px;
    }

    .projects-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 20px;
        padding: 0 20px;
    }

    .project-card {
        background-color: #fff;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
`;

const Projects: React.FC = () => {
    const projects = [
        {
            title: 'Movie-Search-App',
            description: 'В данном проекте можно искать фильмы, ' +
                'но к сожалению на английском языке. Дополинтельно можно добавлять фильмы в избранное.' +
                ' Доступна карточка фильма с описанием и трейлером к фильму',
            url:'https://loaisa.github.io/movie-search/'
        },
        {title: 'Проект 2', description: 'Описание проекта 2'},
        {title: 'Проект 3', description: 'Описание проекта 3'},
    ];

    return (
        <StyledProjects id="projects">
            <motion.h2
                initial={{opacity: 0, y: -50}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.8}}
            >
                Проекты
            </motion.h2>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        className="project-card"
                        initial={{opacity: 0, y: 50}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 0.8, delay: index * 0.2}}
                    >
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <a href={project.url}>Ссылка</a>
                    </motion.div>
                ))}
            </div>
        </StyledProjects>
    );
};

export default Projects;