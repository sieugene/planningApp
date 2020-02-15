import React from 'react';
import {NavLink} from "react-router-dom";

const ProjectSummary = (props) => {
    return(
        <div className="card blue-grey darken-1 project-summary">
            <div className="card-content white-text">
                <span className="card-title">Card Title</span>
                <p>I am a very simple card. I am good at containing small bits of information.
                    I am convenient because I require little markup to use effectively.</p>
            </div>
            <div className="card-action">
                <NavLink to='/project/1'>link</NavLink>
            </div>
        </div>
    )
}


export default ProjectSummary

