import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {minLength10, required} from "../../../assets/utils/ValidationForm";
import {fieldInput} from "../../../assets/utils/FieldsCustom";
import {connect} from "react-redux";


let UpdateProjectForm = props => {
    const {handleSubmit} = props
    return (
        <form className="col s12" onSubmit={handleSubmit}>
            <div className="container">
                <h5 className='center-align'>Update</h5>
                <div className="row">
                    <div className="input-field col s12">
                        <Field id="title" type="text" className="validate" component={fieldInput} name="title"
                               validate={[required, minLength10]}/>
                        <label className="active" htmlFor="title">Title</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <Field id="content" type="text" className="materialize-textarea" component={fieldInput}
                               value={props.content}
                               name="content" validate={[required, minLength10]}/>
                        <label className="active" htmlFor="content">content</label>
                    </div>
                </div>
                <button className='waves-effect red darken-4 btn-small' type="submit">Update</button>
            </div>
        </form>
    )
}

const mapStateToProps = (state, props) => ({
    initialValues: {title:props.title,content:props.content}
})

export default connect(mapStateToProps)(reduxForm({
    form: 'updateProject',
    enableReinitialize: true
})(UpdateProjectForm))