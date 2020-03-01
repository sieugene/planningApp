import React, {useState} from 'react';
import SignInForm from "./SignInReduxForm";
import {authThunkCreator, signInWithPopupThunkCreator} from "../../Redux/AuthReducer";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import Popup from "./Popup";



const SignIn = (props) => {
    const [activePopup, changeActive] = useState(false);
    let onSubmit = (values) => {
        props.authThunk(values)
    }
    if (props.userId) {
        return <Redirect to='/'/>
    }
    return (
        <>
            {props.isLoaded &&
                <div className="progress">
                    <div className="indeterminate"></div>
                </div>
            }
            <SignInForm onSubmit={onSubmit} changeActive={changeActive}/>
            {activePopup &&
            <Popup changeActive={changeActive} signInWithPopupThunk={props.signInWithPopupThunk}/>
            }
            {props.errors.message &&  <h5 className='container red lighten-1 error'>{props.errors.message}</h5>}
        </>
    )
}

let mapStateToProps = (state) => {
    return {
        userId: state.firebase.auth.uid,
        isLoaded: state.auth.isLoaded,
        errors: state.auth.errors
    }
}

export default connect(mapStateToProps, {
    authThunk: authThunkCreator,
    signInWithPopupThunk: signInWithPopupThunkCreator
})(SignIn);