import React, {useState} from 'react';
import defaultImg from "./../../assets/default__img.png"
import moment from "moment";
import ProfileUpdateReduxForm from "./ProfileUpdateReduxForm";
import {useFirebase} from "react-redux-firebase";

const Profile = (props) => {
    const [active, toggleActive] = useState(false);
    const firebase = useFirebase()
    const firebaseUpdate = (update) => {
        return firebase.updateProfile(update)
    }
    let onSubmit = (values) => {
         firebaseUpdate({photoURL: values.photoURL })
    }
    const userImage = !!props.profile.photoURL ? props.profile.photoURL : defaultImg
    return (
        <div className='container profile'>
            <div className="row">
                <div className="col m4 s12 l6 xl6">
                    <div className="pre__card">
                        <div className="card">
                            <div className="default__img__block">
                                <img src={userImage} alt='userImage'/>
                            </div>
                            {!active &&
                            <a className="btn-floating btn-small waves-effect waves-light red" onClick={() => {
                                toggleActive(true);
                            }}>
                                <i className="material-icons">create</i></a>
                            }
                        </div>
                    </div>
                    {active && <ProfileUpdateReduxForm onSubmit={onSubmit} toggleActive={toggleActive}/>}
                </div>
                <div className="col m8 s12 l6 xl6 center-align">
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