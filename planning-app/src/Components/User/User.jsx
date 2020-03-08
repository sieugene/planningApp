import React from 'react';
import defaultImg from "../../assets/default__img.png";
import moment from "moment";

const Users = (props) => {
    if(!props.currentUser){
        return <div>wait</div>
    }
    return (
        <div className='container profile'>
            <div className="row">
                <div className="col l6">
                    <div className="pre__card">
                        <div className="card">
                            <div className="default__img__block">
                                <img src={defaultImg} alt='img'/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col s12 l6 center-align">
                    <h5> {props.currentUser[0].firstName} {props.currentUser[0].lastName}</h5>
                    <hr/>
                    <div className="col s3 left-align">
                        <p>Mail</p>
                        <p>lastLoginAt</p>
                        <p>createdAt</p>
                    </div>
                    <div className="col s9 right-align">
                        <p>{props.currentUser[0].email}</p>
                        <p>{moment(new Date(props.currentUser[0].lastLoginAt * 1)).calendar()}</p>
                        <p>{moment(new Date
                        ((props.currentUser[0].createdAt - 86400000) * 1)).add(1, 'days')
                            .calendar()}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Users