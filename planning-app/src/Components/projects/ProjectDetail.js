import React from 'react';



const ProjectDetail = (props) => {
    return (
            <div className="container section project-details">
                <div className="card z-depth-0">
                    <div className="card-content black-text">
                        <span className="card-title">Card Title - {props.match.params.id}</span>
                        <p>I am a very simple card. I am good at containing small bits of information.
                            I am convenient because I require little markup to use effectively.</p>
                    </div>
                    <div className="card-action">
                        More info are project
                    </div>
                </div>
            </div>
    )
}


export default ProjectDetail;