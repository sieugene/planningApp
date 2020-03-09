import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {fieldInput} from "../../assets/utils/FieldsCustom";

let ProfileUpdateReduxForm = props => {
    const {handleSubmit} = props
    return (
        <form className="updateProfile" onSubmit={handleSubmit}>
            <div className="updateProfile__content">
                <div className="row">
                    <div className="input-field col s12">
                        <Field type="url" pattern="https?://.+" className="materialize-textarea" component={fieldInput}
                               name="photoURL"/>
                        <label htmlFor="content">Url</label>
                    </div>
                </div>
                <button className='waves-effect red darken-1 btn-small left' type="submit">Save</button>
                <a className='waves-effect red darken-4 btn-small right' type="submit"
                   onClick={() => {props.toggleActive(false)}}
                >Exit</a>
            </div>
        </form>
    )
}

ProfileUpdateReduxForm = reduxForm({
    form: 'updateProfile'
})(ProfileUpdateReduxForm)

export default ProfileUpdateReduxForm