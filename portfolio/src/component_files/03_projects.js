import React from 'react';

import {project_info} from './06_project_data';
import ProjectCard from './07_project_card';
// Styles
import '../style_files/03_projects.scss';
import {Code} from '../assests_file/svg_file/01_code_Icon'

export default function Page() {
    return (

        <div className="projects">
            <div className="project-header">
            <Code/>
            <h1>Projects</h1>
            </div>
            
            <div className="cards-container">
                {project_info.map(projects=>(
                    <ProjectCard key={projects.project_title} projects={projects} />
                ))}
            </div>
        </div>
    )
};