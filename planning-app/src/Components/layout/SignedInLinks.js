import React from 'react';
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {signOutThunkCreator} from "../../Redux/AuthReducer";

const SignedInLinks = (props) => {
    return(
        <ul className="right">
           <li><NavLink to='/create'>New Projects</NavLink></li>
           <li onClick={() => {props.signOutThunk()}}><NavLink to='/'>Log out</NavLink></li>
            <li className='btn-floating btn-large waves-effect waves-light red'><NavLink to='/'>{props.profile.initials}</NavLink></li>
        </ul>
    )
}

export default connect(null,{
    signOutThunk: signOutThunkCreator
})(SignedInLinks);