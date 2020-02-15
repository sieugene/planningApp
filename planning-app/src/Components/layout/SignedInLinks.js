import React from 'react';
import {NavLink} from "react-router-dom";

const SignedInLinks = (props) => {
    return(
        <ul className="right hide-on-med-and-down">
           <li><NavLink to='/'>New Projects</NavLink></li>
           <li><NavLink to='/'>Log out</NavLink></li>
            <li><NavLink to='/'>Dashboard</NavLink></li>
            <li className='btn-floating btn-large waves-effect waves-light red'><NavLink to='/'>NN</NavLink></li>
        </ul>
    )
}
export default SignedInLinks