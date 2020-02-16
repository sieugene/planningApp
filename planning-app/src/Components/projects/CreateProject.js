import React from 'react';
import CreateProjectForm from "./CreateProjectReduxForm";



const CreateProject = (props) => {
    let onSubmit = (values) =>{
        console.log(values)
    }
    return(
        <CreateProjectForm onSubmit={onSubmit} />
    )
}

export default CreateProject;