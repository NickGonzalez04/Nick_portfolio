import React from 'react';

import '../style_files/07_project_cards.scss'
import {GitHub} from '../assets_file/svg_file/02_github_icon'

export default function ProjectCard({ projects }){



    return (
        <div className="card-style">
            <div className="project-image">
            <a className="photo" href={projects.project_link}>
            <img src={projects.img_src} alt="project image"/>
            </a>
            </div>
            <div className="project-info">
                <h1>{projects.project_title}</h1>
                <p>{projects.descripition}</p>
                <br></br>
                <h1>Role: {projects.role}</h1>
                <p>{projects.role_info}</p>
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