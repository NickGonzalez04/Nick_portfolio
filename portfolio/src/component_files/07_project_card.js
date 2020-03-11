import React from 'react';

import '../style_files/07_project_cards.scss'
import {GitHub} from '../assets_file/svg_file/02_github_icon'
import { Play } from '../assets_file/svg_file/10_play_buuton';

export default function ProjectCard({ projects }){



    return (
        <div className="card-style">
            <div className="project-image">
                <a className="photo" href={projects.project_link}>
                    <img src={projects.img_src} alt="project image" />
                </a>
            </div>
            <div className="project-info">
                <h1>{projects.project_title}</h1>
                    <p>{projects.description}</p>
                        <br />
                        <h1>Role: {projects.role}</h1>
                        <p>{projects.role_info}</p>
                        <br />
                        <h3>Front-End Tech Stack:</h3>
                        <p>{projects.tech_stack}</p>
                        <br />
                        <h3>Back-End Tech Stack:</h3>
                        <p>{projects.tech_stack_2}</p>
                    <a href={projects.link_url}>
                        <GitHub />
                    </a>
                    <a href={projects.project_link}>
                        <img src='/images/Link.png' alt='Link to website' />
                    </a>
                    <a href={projects.marketing_vid}>
                        {projects.marketing_vid ? <Play/> : ''}
                    </a>
            </div>
        </div>
    )
};