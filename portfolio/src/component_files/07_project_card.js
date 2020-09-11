import React from 'react';


export default function ProjectCard({ projects }){

    return (
        <div className="card-style">
            <div className="project-image">
                <span href={projects.project_link}>
                    <img src={projects.img_src} alt="created website name and photo" />
                </span>
            </div>
            <div className="project-info">
            <h1>{projects.project_title}</h1>
                <p>{projects.description}</p>
            </div>
        </div>
    )
};