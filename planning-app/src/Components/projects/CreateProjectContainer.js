import React from 'react'
import {connect} from "react-redux";
import CreateProject from "./CreateProject";
import {createProjectAC} from "../../Redux/ProjectReducer";


const CreateProjectContainer = (props) => {
    return(
        <CreateProject {...props}/>
    )
}


let mapDispatchToProps = (state) => {
    return{
        projects: state.project.projects
    }
}


export default connect(mapDispatchToProps,{
    createProject: createProjectAC
})(CreateProjectContainer)