import React from 'react';
import Notifications from "./Notification";
import ProjectList from "../projects/ProjectList";


const DashBoard = (props) => {
    return (
        <div className='dashboard container'>
            <div className="row">
                <div className="col s12 m6">
                    <ProjectList {...props}/>
                </div>
                <div className="col s12 m5 offset-m1">
                    <Notifications notification={props.notification}/>
                </div>
            </div>
        </div>

    )
}


export default DashBoard