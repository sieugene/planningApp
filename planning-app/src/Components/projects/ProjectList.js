import React from 'react';
import ProjectSummary from "./ProjectSummary";


const ProjectList = (props) => {
    let getProjects = props.projects.map(p => <ProjectSummary id={p.id} title={p.title} content={p.content} key={p.id}/> )

    return(
        <div className="project-list section">
            {getProjects}
        </div>
    )
}


export default ProjectList