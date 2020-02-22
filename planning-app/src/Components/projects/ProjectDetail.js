import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';

const ProjectDetail = (props) => {
    let result = undefined;
    if (!!props.projects) {
        result = props.projects.filter(projects => projects.id === props.match.params.id);
    }

    return (
        <div className="container section project-details">
            {!result ? <div>NO FOUND</div> :
                <div className="card z-depth-0">
                    <div className="card-content black-text">
                        <h4>Author: {result[0].authorFirstName}</h4>
                        <span className="card-title">Card Title - {result[0].title}</span>
                        <p>{result[0].content} </p>
                    </div>
                    <div className="card-action">
                        {!!result[0].createdAt ?
                            new Date(result[0].createdAt.seconds * 1000).toUTCString()
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
    firestoreConnect([{ collection: 'projects' }])
)(ProjectDetail);




