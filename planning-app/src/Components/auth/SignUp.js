import React from 'react';
import SignUpForm from "./SignUpReduxForm";


const SignUp = (props) => {
    let onSubmit = (values) =>{
        console.log(values)
    }
    return(
            <SignUpForm onSubmit={onSubmit} />
    )
}

export default SignUp;