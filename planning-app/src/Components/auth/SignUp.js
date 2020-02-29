import React from 'react';
import SignUpForm from "./SignUpReduxForm";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {signInWithPopupThunkCreator, signUpThunkCreator} from "../../Redux/AuthReducer";


const SignUp = (props) => {
    let onSubmit = (values) => {
        props.signUpThunk(values)
    }
    if (props.userId) {
        return <Redirect to='/'/>
    }
    return (
        <>
        <SignUpForm onSubmit={onSubmit}/>
        <button onClick={() => {props.signInWithPopupThunk()}}>Sign up with google account</button>
        </>
    )
}

let mapStateToProps = (state) => {
    return {
        userId: state.firebase.auth.uid
    }
}

export default connect(mapStateToProps,{
    signUpThunk:signUpThunkCreator,
    signInWithPopupThunk: signInWithPopupThunkCreator
})(SignUp);