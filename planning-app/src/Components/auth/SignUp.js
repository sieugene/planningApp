import React from 'react';
import SignUpForm from "./SignUpReduxForm";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";


const SignUp = (props) => {
    let onSubmit = (values) => {
        console.log(values)
    }
    if (props.userId) {
        return <Redirect to='/'/>
    }
    return (
        <SignUpForm onSubmit={onSubmit}/>
    )
}

let mapStateToProps = (state) => {
    return {
        userId: state.firebase.auth.uid
    }
}

export default connect(mapStateToProps,{})(SignUp);