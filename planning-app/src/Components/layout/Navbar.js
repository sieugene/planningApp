import React from 'react';
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import {NavLink} from "react-router-dom";

const Navbar = (props) => {
    return(
        <div className="navbar-fixed">
            <nav>
                <div className="container">
                    <div className="nav-wrapper">
                        <NavLink to="/" className="left">Logo</NavLink>
                        <SignedInLinks/>
                        <SignedOutLinks/>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Navbar