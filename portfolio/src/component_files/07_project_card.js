import React from 'react';


export default function ProjectCard({projects}){


return (
    <div>
        <h1>{projects.project_title}</h1>
        <br></br>
        <h3>Front-End Tech Stack:</h3>
        <p>{projects.tech_stack}</p>
        
        <h3>Back-End Tech Stack:</h3>
        <p>{projects.tech_stack_2}</p>
    </div>
    )
}