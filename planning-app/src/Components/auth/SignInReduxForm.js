import React from 'react'
import {Field, reduxForm} from 'redux-form'

let SignInForm = props => {
    const {handleSubmit} = props
    return (
        <form className="col s12 formSign" onSubmit={handleSubmit}>
            <div className="container">
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
                <button className='waves-effect red darken-4 btn-small' type="submit">Login</button>
                <p className='waves-effect green btn-small btn-margin' type="submit"
                   onClick={() => {
                       props.changeActive(true)
                   }}>Quick access
                </p>
            </div>
        </form>
    )
}


SignInForm = reduxForm({
    form: 'login'
})(SignInForm)

export default SignInForm