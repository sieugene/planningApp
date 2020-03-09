import React, {useEffect} from 'react';
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {signOutThunkCreator} from "../../Redux/AuthReducer";
import {useFirebase} from "react-redux-firebase";

const SignedInLinks = (props) => {
    //user and data configuration
    const firebase = useFirebase()
    const firebaseUpdate = (configuration) => {
        return firebase.updateProfile(configuration)
    }
    let configuration = {
        email: props.auth.email,
        lastLoginAt: props.auth.lastLoginAt,
    }
    useEffect(() => {
        firebaseUpdate(configuration);
    }, [props.profile.isLoaded])
    //
    return (
        <ul className="right">
            <li><NavLink to='/create'>New Projects</NavLink></li>
            <li onClick={() => {
                props.signOutThunk()
            }}><NavLink to='/'>Log out</NavLink></li>
            <li className='btn-floating btn-large waves-effect waves-light red'>
                <NavLink to='/profile'>{props.profile.initials}</NavLink>
            </li>
        </ul>
    )
}

export default connect(null, {
    signOutThunk: signOutThunkCreator
})(SignedInLinks);