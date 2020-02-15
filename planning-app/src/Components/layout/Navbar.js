import React from 'react';
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";

const Navbar = (props) => {
    return(
        <div className="navbar-fixed">
            <nav>
                <div className="container">
                    <div className="nav-wrapper">
                        <a href="/" className="brand-logo">Logo</a>
                        <SignedInLinks/>
                        <SignedOutLinks/>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Navbar