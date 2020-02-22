import React from 'react';
import {NavLink} from "react-router-dom";

const SignedInLinks = (props) => {
    return(
        <ul className="right">
           <li><NavLink to='/create'>New Projects</NavLink></li>
           <li><NavLink to='/'>Log out</NavLink></li>
            <li className='btn-floating btn-large waves-effect waves-light red'><NavLink to='/'>NN</NavLink></li>
        </ul>
    )
}
export default SignedInLinks