import React from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {firestoreConnect} from 'react-redux-firebase';
import moment from "moment";
import {NavLink} from "react-router-dom";

const ProjectDetail = (props) => {
    let result = undefined;
    if (!!props.projects) {
        result = props.projects.filter(projects => projects.id === props.match.params.id);
    }
    return (
        <div className="container section project-details">
            {!result || result.length === 0 ? <div>NO FOUND</div> :
                <div className="card z-depth-0">
                    <div className="card-content black-text">
                        <h4><NavLink to={'/user/' + result[0].authorId}>Author: {result[0].authorFirstName}</NavLink>
                        </h4>
                        <span className="card-title">Card Title - {result[0].title}</span>
                        <p>{result[0].content} </p>
                    </div>
                    <div className="card-action">
                        {!!result[0].createdAt ?
                            moment(result[0].createdAt.toDate()).calendar()
                            :
                            ''
                        }
                    </div>
                </div>
            }
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        projects: state.firestore.ordered.projects
    }
}


export default compose(
    connect(mapStateToProps, {}),
    firestoreConnect([{collection: 'projects'}, {collection: 'users'}])
)(ProjectDetail);




