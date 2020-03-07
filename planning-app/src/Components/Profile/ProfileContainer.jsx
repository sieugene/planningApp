import React from 'react';
import {connect} from "react-redux";
import Profile from "./Profile";


const ProfileContainer = (props) => {
    if(!props.profile.isLoaded){
        return <div>Loading...</div>
    }
    return (
        <Profile profile={props.profile} auth={props.auth}/>
    )
}

let mapStateToProps = (state) => {
    return {
        profile: state.firebase.profile,
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps, {})(ProfileContainer)