import React from 'react';
import {motion} from 'framer-motion';
import styled from 'styled-components';

const StyledProjects = styled.section`
    padding: 50px 20px;
    background-color: #f9f9f9;
    text-align: center;

    h2 {
        
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

        h3 {
            font-size: 2rem;
        }
    }
`;

const Projects = () => {
    const projects = [
        {
            title: 'Movie-Search-App',
            description: 'В данном проекте можно искать фильмы, ' +
                'но к сожалению на английском языке. Дополнительно можно добавлять фильмы в избранное.' +
                ' Доступна карточка фильма с описанием и трейлером к фильму. Проект адаптивный.',
            url: 'https://loaisa.github.io/movie-search/'
        },
        {title: 'CryptoCoin', description: 'Данный проект для поиска криптовалюты, использовалась openapi для запросов. Дополнительно попробовал использовать библиотеку Ant Design. И попробовал TypeScript.',
            url: 'https://loaisa.github.io/CryptoCoin/'},
        {title: 'Mountain Parallax', description: 'Визульальный проект со слайдером, параллакс эффектом. В данном проекте использовалось минимальное количество библиотек',url: 'https://loaisa.github.io/mountain/'},
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