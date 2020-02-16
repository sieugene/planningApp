import React from 'react';
import {NavLink} from "react-router-dom";

const ProjectSummary = (props) => {
    return(
        <div className="card blue-grey darken-1 project-summary">
            <div className="card-content white-text">
                <span className="card-title">{props.title}</span>
                <p>{props.content}</p>
            </div>
            <div className="card-action">
                <NavLink to={`/project/${props.id}`} >link</NavLink>
            </div>
        </div>
    )
}


export default ProjectSummary

