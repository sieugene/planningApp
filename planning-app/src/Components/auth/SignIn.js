import React from 'react';
import SignInForm from "./SignInReduxForm";


const SignIn = (props) => {
    let onSubmit = (values) =>{
        console.log(values)
    }
    return(
        <SignInForm onSubmit={onSubmit} />
    )
}

export default SignIn;