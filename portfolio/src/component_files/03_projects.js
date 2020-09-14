import React from 'react';

import {project_info} from './06_project_data';
import ProjectCard from './07_project_card';
// Styles
import '../style_files/03_projects.scss';

export default function Page() {
    return (
        <div id="projects" className="project">
            <div className="project-body">
                <div className="projects">
                    <div className="cards-container">
                        <div className="project-header">
                            <h1> Projects 🚀 </h1>
                        </div>
                        {project_info.map(projects => (
                            <ProjectCard key={projects.img_src} projects={projects} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
};