import React from 'react'
import {NavLink} from "react-router-dom";

const OptionDropdown = ({optionsShow, id, toggleVisible, deleteProjectThunk}) => {
    return (
        <>
            <div className='right-align editPostPopup'>
                {optionsShow ?
                    <div><i className="material-icons" onClick={() => {
                        toggleVisible(false)
                    }}>more_horiz</i></div>
                    :
                    <>
                        <i className="material-icons" onClick={() => {
                            toggleVisible(true)
                        }}>
                            more_horiz
                        </i>
                        <NavLink to={'/update/' + id}>
                            <p className='waves-effect green darken-3 waves-light btn-small'>
                                Edit
                            </p>
                        </NavLink>
                        <p className='waves-effect waves-light red darken-4 btn-small'
                           onClick={() => {
                               deleteProjectThunk(id)
                           }}
                        >delete</p>
                    </>
                }
            </div>
        </>
    )
}
export default OptionDropdown