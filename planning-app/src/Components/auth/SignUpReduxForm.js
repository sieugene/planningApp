import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {required} from "../../assets/utils/ValidationForm";
import {fieldInput} from "../../assets/utils/FieldsCustom";


let SignUpForm = (props) => {
    const {error, handleSubmit} = props
    return (
        <form className="col s12 formSign" onSubmit={handleSubmit}>
            {error && <strong>{error}</strong>}
            <div className="container">
                <div className="row">
                    <div className="input-field col s6">
                        <Field id="firstName" type="text" component={fieldInput}
                               className="validate" name="firstName" validate={[required]}/>
                        <label htmlFor="first_name">First Name</label>
                    </div>
                    <div className="input-field col s6">
                        <Field id="lastName" type="text" className="validate" component={fieldInput} name="lastName"
                               validate={[required]}/>
                        <label htmlFor="last_name">Last Name</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <Field id="password" type="password" className="validate" component="input" name="password"/>
                        <label htmlFor="password">Password</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <Field id="email" type="email" className="validate" component="input" name="email"/>
                        <label htmlFor="email">Email</label>
                    </div>
                </div>
                <button className='waves-effect red darken-4 btn-small' type="submit">Sign Up</button>
                <p className='waves-effect green btn-small btn-margin' type="submit"
                   onClick={() => {
                       props.changeActive(true)
                   }}>Quick sign up
                </p>
            </div>
        </form>
    )
}


SignUpForm = reduxForm({
    form: 'registration'
})(SignUpForm)

export default SignUpForm