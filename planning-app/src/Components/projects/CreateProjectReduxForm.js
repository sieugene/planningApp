import React from 'react'
import {Field, reduxForm} from 'redux-form'

let CreateProjectForm = props => {
    const {handleSubmit} = props
    return (
        <form className="col s12" onSubmit={handleSubmit}>
            <div className="container">
                <div className="row">
                    <div className="input-field col s12">
                        <Field id="title" type="text" className="validate" component="input" name="title"/>
                        <label htmlFor="Title">Title</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <Field id="content" type="text" className="materialize-textarea" component="textarea" name="content"/>
                        <label htmlFor="content">content</label>
                    </div>
                </div>
                <button className='waves-effect red darken-4 btn-small' type="submit">Create</button>
            </div>
        </form>
    )
}


CreateProjectForm = reduxForm({
    form: 'createProject'
})(CreateProjectForm)

export default CreateProjectForm