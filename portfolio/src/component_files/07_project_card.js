import React from 'react';

// import '../style_files/07_project_cards.scss'
// import {GitHub} from '../assets_file/svg_file/02_github_icon'
// import { Play } from '../assets_file/svg_file/10_play_buuton';

export default function ProjectCard({ projects }){

    return (
        <div className="card-style">
            <div className="project-image">
                <span href={projects.project_link}>
                    <img src={projects.img_src} alt="created website name and photo" />
                <div className="projectTitle"><h1>{projects.project_title}</h1></div>
                </span>
            </div>
            <div className="project-info">
                    <p>{projects.description}</p>
            </div>
        </div>
    )
};