import React, {useState} from 'react';
import SignUpForm from "./SignUpReduxForm";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {signInWithPopupThunkCreator, signUpThunkCreator} from "../../Redux/AuthReducer";
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
            {props.isLoaded &&
            <div className="progress">
                <div className="indeterminate"></div>
            </div>
            }
            <SignUpForm onSubmit={onSubmit} changeActive={changeActive}/>
            {activePopup &&
            <Popup changeActive={changeActive} signInWithPopupThunk={props.signInWithPopupThunk}/>
            }
            {props.errors.errorsSignUp.message &&
            <h5 className='container red lighten-1 error'>{props.errors.errorsSignUp.message}</h5>}
        </>
    )
}

let mapStateToProps = (state) => {
    return {
        userId: state.firebase.auth.uid,
        isLoaded: state.auth.isLoaded,
        errors: state.auth.errors,
        errorsForm: state.form.registration
    }
}

export default connect(mapStateToProps, {
    signUpThunk: signUpThunkCreator,
    signInWithPopupThunk: signInWithPopupThunkCreator
})(SignUp);