import React, {useState} from 'react';
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import logo from "./../../assets/sieugene.png"

const Navbar = (props) => {
    let showLinks = !props.userId ? <SignedOutLinks/> : <SignedInLinks profile={props.profile}/>
    const [activeMenu, toggleActive] = useState(true)
    let addClassName = !activeMenu ? ' active' : ''
    return (
        <div className="navbar-fixed">
            <nav className={'response__nav' + addClassName}>
                <div className="container">
                    <div className="nav-wrapper">
                        <NavLink to="/" className="left"><img src={logo} className='logo' alt='logo'/></NavLink>
                        <div className="navbar__mobile">
                            {activeMenu ?
                                <i className="material-icons right navClickElement" onClick={() => {
                                    toggleActive(false)
                                }}>
                                    format_align_justify
                                </i>
                                :
                                <i className="material-icons right navClickElement" onClick={() => {
                                    toggleActive(true)
                                }}>
                                    clear
                                </i>
                            }
                        </div>
                        {showLinks}
                    </div>
                </div>
            </nav>
        </div>
    )
}
let mapStateToProps = (state) => {
    return {
        userId: state.firebase.auth.uid,
        profile: state.firebase.profile
    }
}
export default connect(mapStateToProps, {})(Navbar)