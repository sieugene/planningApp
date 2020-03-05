import React from 'react';
import UpdateProjectForm from "./UpdateProjectReduxForm";


const UpdateProject = (props) => {
    let onSubmit = (values) => {
        props.updateProjectThunk(props.firstName, props.lastName, props.uid, values, props.result[0].id)
    }
    return (
        <>
            {props.isLoaded &&
            <div className="progress">
                <div className="indeterminate"></div>
            </div>
            }
            <UpdateProjectForm onSubmit={onSubmit} title={props.result[0].title} content={props.result[0].content}/>
            {props.errors.message && <h5 className='container red lighten-1 error'>
                {props.errors.message}</h5>}
        </>
    )
}


export default UpdateProject;