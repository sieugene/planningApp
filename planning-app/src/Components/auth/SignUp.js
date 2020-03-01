import React, {useState} from 'react';
import SignUpForm from "./SignUpReduxForm";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {signInWithPopupThunkCreator, signUpThunkCreator} from "../../Redux/AuthReducer";
import googleIcon from "./../../assets/google_icon.png"
import Popup from "./Popup";


const SignUp = (props) => {
    const [activePopup, changeActive] = useState(false);
    let onSubmit = (values) => {
        props.signUpThunk(values)
    }
    if (props.userId) {
        return <Redirect to='/'/>
    }
    return (
        <>
            <SignUpForm onSubmit={onSubmit} changeActive={changeActive}/>
            {activePopup &&
            <Popup changeActive={changeActive} signInWithPopupThunk={props.signInWithPopupThunk}/>
            }
        </>
    )
}

let mapStateToProps = (state) => {
    return {
        userId: state.firebase.auth.uid
    }
}

export default connect(mapStateToProps, {
    signUpThunk: signUpThunkCreator,
    signInWithPopupThunk: signInWithPopupThunkCreator
})(SignUp);