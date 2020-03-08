import React, {useState} from 'react';
import OptionDropdownComment from "../Options/OptionDropdownComment";


const Comments = (props) => {
    const [optionsShow, toggleVisible] = useState(true);
    return (
        <ul className="collection">
            {props.userId === props.authId &&
            <OptionDropdownComment optionsShow={optionsShow} toggleVisible={toggleVisible} id={props.id}
                                   deleteCommentThunk={props.deleteCommentThunk}
            />
            }
            <li className="collection-item">
                <h5 className='title'>{props.userFirstName}</h5>
                <p>{props.commentBody}</p>
            </li>
        </ul>
    )
}


export default Comments