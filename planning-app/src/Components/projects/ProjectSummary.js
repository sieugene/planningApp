import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import OptionDropdown from "../Options/OptionDropdown";

const ProjectSummary = (props) => {
    const [optionsShow, toggleVisible] = useState(true);
    return (
        <>
            <div className="card blue-grey darken-1 project-summary">
                {props.authorId === props.userId &&
                <OptionDropdown optionsShow={optionsShow} toggleVisible={toggleVisible} id={props.id}
                                deleteProjectThunk={props.deleteProjectThunk}
                />
                }
                <div className="card-content white-text">
                    <span className="card-title">{props.title}</span>
                    <p>{props.content}</p>
                </div>
                <div className="card-action">
                    <NavLink to={`/project/${props.id}`}>link</NavLink>
                </div>
            </div>
        </>
    )
}

export default ProjectSummary

