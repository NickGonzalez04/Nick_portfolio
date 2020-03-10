import React from 'react';

import '../style_files/07_project_cards.scss'

export default function ProjectCard({ projects }){



    return (
        <div className="card-style">
            <div className="project-image">
            <img src={projects.img_src} alt="project image"/>
            </div>
            <div className="project-info">
                <h1>{projects.project_title}</h1>
                <br></br>
                <h3>Front-End Tech Stack:</h3>
                <p>{projects.tech_stack}</p>

                <h3>Back-End Tech Stack:</h3>
                <p>{projects.tech_stack_2}</p>
            </div>
        </div>
    )
};