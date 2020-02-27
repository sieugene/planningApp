import React from 'react';
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";

const Navbar = (props) => {
    let showLinks = !props.userId ? <SignedOutLinks/> : <SignedInLinks/>
    return(
        <div className="navbar-fixed">
            <nav>
                <div className="container">
                    <div className="nav-wrapper">
                        <NavLink to="/" className="left">Logo</NavLink>
                        {showLinks}
                    </div>
                </div>
            </nav>
        </div>
    )
}
let mapStateToProps = (state) => {
    return {
        userId: state.firebase.auth.uid
    }
}
export default connect(mapStateToProps,{})(Navbar)