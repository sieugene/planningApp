import React from 'react';
import {connect} from "react-redux";
import UpdateProject from "./UpdateProject";
import {compose} from "redux";
import {updateProjectThunkCreator} from "../../../Redux/ProjectReducer";
import {firestoreConnect} from "react-redux-firebase";

const UpdateProjectContainer = (props) => {
    //gathering information about the user
    const firstName = !props.profile.firstName ? props.authInfo.displayName : !!props.profile.firstName &&
        props.profile.firstName;
    const lastName = !props.profile.lastName ? ' ' : props.profile.lastName;
    const uid = props.authInfo.uid;
    //filtering the array by the selected project
    let result = [{
        title: '',
        content: ''
    }];
    if (!!props.projects) {
        result = props.projects.filter(projects => projects.id === props.match.params.id);
    }
    return <UpdateProject {...props} firstName={firstName} lastName={lastName} uid={uid} result={result}/>
}

let mapStateToProps = (state) => {
    return {
        authInfo: state.firebase.auth,
        profile: state.firebase.profile,
        isLoaded: state.project.isLoaded,
        errors: state.project.errors,
        projects: state.firestore.ordered.projects
    }
}
export default compose(
    connect(mapStateToProps,
        {updateProjectThunk: updateProjectThunkCreator}),
    firestoreConnect([{collection: 'projects'}])
)(UpdateProjectContainer)