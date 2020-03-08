import React from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {firestoreConnect} from 'react-redux-firebase';
import moment from "moment";
import {NavLink} from "react-router-dom";
import CommentContainer from "../Comments/CommentContainer";
import CommentForm from "../Comments/CommentReduxForm";
import {addCommentThunkCreator} from "../../Redux/ProjectReducer";

const ProjectDetail = (props) => {
    let result = undefined;
    let commentsArray = undefined;
    if (!!props.projects) {
        result = props.projects.filter(projects => projects.id === props.match.params.id);
    }
    if (!!props.comments) {
        commentsArray = props.comments.filter(c => c.projectId === props.match.params.id);
    }
    let onSubmit = (values) => {
        props.addCommentThunk(props.profile.firstName, props.userId, values, result[0].id)
    }
    return (
        <div className="container section project-details">
            {props.isLoaded &&
            <div className="progress">
                <div className="indeterminate"></div>
            </div>
            }
            {!result || result.length === 0 ? <div>NO FOUND</div> :
                <div className="card z-depth-0">
                    <div className="card-content black-text">
                        <h4><NavLink to={'/user/' + result[0].authorId}>Author: {result[0].authorFirstName}</NavLink>
                        </h4>
                        <span className="card-title">Card Title - {result[0].title}</span>
                        <p>{result[0].content} </p>
                    </div>
                    <div className="card-action">
                        {!!result[0].createdAt ? moment(result[0].createdAt.toDate()).calendar() : ''}
                    </div>
                </div>
            }
            {!!props.userId && <CommentForm onSubmit={onSubmit}/>}
            {!commentsArray ? 'No comments' : <CommentContainer commentsArray={commentsArray}/>}
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        projects: state.firestore.ordered.projects,
        profile: state.firebase.profile,
        userId: state.firebase.auth.uid,
        comments: state.firestore.ordered.comments,
        isLoaded: state.project.isLoaded
    }
}


export default compose(
    connect(mapStateToProps, {
        addCommentThunk: addCommentThunkCreator
    }),
    firestoreConnect([{collection: 'projects'}, {collection: 'comments', orderBy: ['createdAt', 'desc']}])
)(ProjectDetail);




