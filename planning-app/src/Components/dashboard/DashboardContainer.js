import React from 'react';
import {connect} from 'react-redux'
import DashBoard from "./Dashboard";
import {compose} from "redux";
import {firestoreConnect} from "react-redux-firebase";



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
        notification: state.firestore.ordered.notification
    }
}


export default compose(
    connect(mapStateToProps, {}),
    firestoreConnect([
            {collection: 'projects'},
            {collection: 'notification',orderBy:('time')}
        ]
    )
)(DashboardContainer)