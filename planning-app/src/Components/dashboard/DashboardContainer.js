import React from 'react';
import {connect} from 'react-redux'
import DashBoard from "./Dashboard";
import {compose} from "redux";
import {firestoreConnect} from "react-redux-firebase";
import {deleteProjectThunkCreator} from "../../Redux/ProjectReducer";


const DashboardContainer = (props) => {
    return (
        <div>
            <DashBoard {...props}/>
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        projects: state.firestore.ordered.projects,
        notification: state.firestore.ordered.notification,
        userId: state.firebase.auth.uid
    }
}


export default compose(
    connect(mapStateToProps, {
        deleteProjectThunk: deleteProjectThunkCreator
    }),
    firestoreConnect([
            {collection: 'projects', orderBy: ['createdAt', 'desc']},
            {collection: 'notification', limit: 3, orderBy: ['time', 'desc']},
            {collection: 'users'}
        ]
    )
)(DashboardContainer)