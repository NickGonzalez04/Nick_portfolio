import React from 'react';

import {project_info} from './06_project_data';
import ProjectCard from './07_project_card';
// Styles
import '../style_files/03_projects.scss';

export default function Page() {
    return (

        <div className="projects">
            <h1>Projects</h1>
            
            <div className="cards-container">
                {project_info.map(projects=>(
                    <ProjectCard key={projects.project_title} projects={projects} />
                ))}
            </div>
        </div>
    )
};