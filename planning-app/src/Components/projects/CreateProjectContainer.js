import React from 'react'
import {connect} from "react-redux";
import CreateProject from "./CreateProject";
import {createProjectAC, createProjectThunkCreator} from "../../Redux/ProjectReducer";
import {compose} from "redux";


const CreateProjectContainer = (props) => {
    return (
        <CreateProject {...props}/>
    )
}


let mapStateToProps = (state) => {
    return {
        authInfo: state.firebase.auth,
        profile: state.firebase.profile,
        isLoaded: state.project.isLoaded,
        errors: state.project.errors
    }
}
export default compose(
    connect(mapStateToProps, {
        createProject: createProjectAC,
        createProjectThunk: createProjectThunkCreator,
    })
)(CreateProjectContainer)