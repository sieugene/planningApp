import React from 'react';
import moment from "moment";

const Notifications = ({notification}) => {
    return (
        <div className='section'>
            <ul className='collection with-header'>
                <li className="collection-header"><span className='title'>Notifications</span></li>
                {notification && notification.map((n) => {
                    return <li className="collection-item" key={n.id}>
                        <p className='red-text text-darken-1'>{n.user}</p>
                        <p>{n.content}</p>
                        <p className='grey-text'>{moment(n.time.toDate()).fromNow()}</p>
                    </li>
                })}
            </ul>
        </div>
    )
}


export default Notifications;