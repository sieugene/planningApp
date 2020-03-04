import React from 'react';
import {NavLink} from "react-router-dom";
import moment from "moment";

const Notifications = ({notification}) => {
    return (
        <div className='section'>
            <ul className='collection with-header'>
                <li className="collection-header"><span className='title'>Notifications</span></li>
                {notification && notification.slice().reverse().map((n) => {
                    return <li className="collection-item" key={n.id}>
                            <a className='red-text text-darken-1'>{n.user}</a>
                            <p>{n.content}</p>
                            <p className='grey-text'>{moment(n.time.toDate()).fromNow()}</p>
                        </li>
                })}
            </ul>
        </div>
    )
}


export default Notifications;