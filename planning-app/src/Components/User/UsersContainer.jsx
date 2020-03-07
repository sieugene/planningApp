import React from 'react';
import {connect} from "react-redux";
import {compose} from "redux";
import {firestoreConnect} from "react-redux-firebase";
import Users from "./User";


const UsersContainer = (props) => {
    let currentUser = undefined;
    if (!!props.users && props.users.length >= 3) {
        currentUser = props.users.filter(users => users.id === props.match.params.id);
    }
    return (
        <Users users={props.users} currentUser={currentUser}/>
    )
}

let mapStateToProps = (state) => {
    return {
        users: state.firestore.ordered.users
    }
}

export default compose(
    connect(mapStateToProps, {})
)(UsersContainer)