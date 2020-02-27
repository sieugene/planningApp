import React from 'react';
import SignInForm from "./SignInReduxForm";
import {authThunkCreator} from "../../Redux/AuthReducer";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";



const SignIn = (props) => {
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
            <SignInForm onSubmit={onSubmit}/>
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
})(SignIn);