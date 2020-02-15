import React from 'react'
import {Field, reduxForm} from 'redux-form'

let SignUpForm = props => {
    const {handleSubmit} = props
    return (
        <form className="col s12" onSubmit={handleSubmit}>
            <div className="container">
                <div className="row">
                    <div className="input-field col s6">
                        <Field placeholder="Placeholder" id="first_name" type="text" component="input"
                               className="validate" name="first_name"/>
                        <label htmlFor="first_name">First Name</label>
                    </div>
                    <div className="input-field col s6">
                        <Field id="last_name" type="text" className="validate" component="input" name="last_name"/>
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
            </div>
        </form>
    )
}


SignUpForm = reduxForm({
    form: 'registration'
})(SignUpForm)

export default SignUpForm