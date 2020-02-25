import React from 'react';
import SignInForm from "./SignInReduxForm";
import {authThunkCreator} from "../../Redux/AuthReducer";
import {connect} from "react-redux";


const SignIn = (props) => {
    let onSubmit = (values) => {
        props.authThunk(values)
    }
    return (
        <SignInForm onSubmit={onSubmit}/>
    )
}

let mapStateToProps = (state) => {
    return {
    }
}

export default connect(mapStateToProps, {
    authThunk: authThunkCreator
})(SignIn);