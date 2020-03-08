import React from 'react';
import {connect} from "react-redux";
import Comments from "./Comments";
import {deleteCommentThunkCreator} from "../../Redux/ProjectReducer";


const CommentContainer = (props) => {
    return (
        props.commentsArray.map(c => <Comments userFirstName={c.userFirstName} commentBody={c.commentBody} key={c.id}
                                               id={c.id} userId={c.userId}
                                               authId={props.authId} deleteCommentThunk={props.deleteCommentThunk}
        />)
    )
}

let mapStateToProps = (state) => {
    return {
        authId: state.firebase.auth.uid
    }
}

export default connect(mapStateToProps, {deleteCommentThunk: deleteCommentThunkCreator})(CommentContainer)