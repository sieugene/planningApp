import React from 'react';
import CreateProjectForm from "./CreateProjectReduxForm";


const CreateProject = (props) => {
    const firstName = !props.profile.firstName ? props.authInfo.displayName : !!props.profile.firstName &&
        props.profile.firstName;
    const lastName = !props.profile.lastName && ' ';
    const uid = props.authInfo.uid;
    let onSubmit = (values) => {
        props.createProjectThunk(firstName, lastName, uid, values)
    }
    return (
        <>
            {props.isLoaded &&
            <div className="progress">
                <div className="indeterminate"></div>
            </div>
            }
            <CreateProjectForm onSubmit={onSubmit}/>
            {props.errors.message && <h5 className='container red lighten-1 error'>
                {props.errors.message}</h5>}
        </>
    )
}

export default CreateProject;