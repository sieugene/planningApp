import React from 'react';
import ProjectSummary from "./ProjectSummary";


const ProjectList = (props) => {
    if(!props.projects){
        return <div>No data or loading</div>
    }
    return(
        <div className="project-list section">
            { props.projects.map(p => 
            <ProjectSummary id={p.id} title={p.title} content={p.content} key={p.id}/> ) }
        </div>
    )
}


export default ProjectList