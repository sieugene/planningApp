import React from 'react';
import {connect} from "react-redux";
import {compose} from "redux";
import Users from "./User";


const UsersContainer = (props) => {
    let users = props.users
    let currentUser = undefined;
    if (!!users) {
        currentUser = users.filter(users => users.id === props.match.params.id);
    }
    return (
        <Users currentUser={currentUser}/>
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