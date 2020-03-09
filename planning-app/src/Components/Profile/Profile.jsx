import React from 'react';
import defaultImg from "./../../assets/default__img.png"
import moment from "moment";

const Profile = (props) => {
    const userImage = !!props.profile.photoURL ? props.profile.photoURL : defaultImg
    return (
        <div className='container profile'>
            <div className="row">
                <div className="col l6">
                    <div className="pre__card">
                        <div className="card">
                            <div className="default__img__block">
                                <img src={userImage} alt='userImage'/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col s12 l6 center-align">
                    <h5> {props.profile.firstName} {props.profile.lastName}</h5>
                    <hr/>
                    <div className="col s3 left-align">
                        <p>Mail</p>
                        <p>lastLoginAt</p>
                        <p>createdAt</p>
                    </div>
                    <div className="col s9 right-align">
                        <p>{props.profile.email}</p>
                        <p>{moment(new Date(props.profile.lastLoginAt * 1)).calendar()}</p>
                        <p>{!!props.profile.createdAt ? moment(props.profile.createdAt.toDate()).calendar() : ''}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile