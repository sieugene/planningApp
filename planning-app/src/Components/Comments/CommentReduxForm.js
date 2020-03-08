import React from 'react'
import {Field, reduxForm, reset} from 'redux-form'
import {minLength1, requiredEmpty} from "../../assets/utils/ValidationForm";
import {fieldInput} from "../../assets/utils/FieldsCustom";

let CommentForm = props => {
    const {handleSubmit} = props
    return (
        <form className="col s12 commentForm" onSubmit={handleSubmit}>
            <div className="row">
                <div className="input-field col s12">
                    <Field component={fieldInput} name="commentBody" placeholder='write here'
                           validate={[requiredEmpty, minLength1]}/>
                </div>
            </div>
            <button className='waves-effect blue lighten-3 btn-small' type="submit">
                Send
                <i className="material-icons right">send</i>
            </button>
        </form>
    )
}

const afterSubmit = (result, dispatch) =>
    dispatch(reset('comment'));

CommentForm = reduxForm({
    form: 'comment',
    onSubmitSuccess: afterSubmit,
})(CommentForm);

export default CommentForm