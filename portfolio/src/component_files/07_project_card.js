import React from 'react';

import '../style_files/07_project_cards.scss'
import {GitHub} from '../assets_file/svg_file/02_github_icon'

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
                <br></br>
                <h3>Back-End Tech Stack:</h3>
                <p>{projects.tech_stack_2}</p>
                <a href={projects.link_url}>
                <GitHub  />
                </a>
            </div>
        </div>
    )
};