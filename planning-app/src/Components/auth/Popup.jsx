import React from 'react'
import googleIcon from "../../assets/google_icon.png";

const Popup = (props) => {
    return (
        <>
            <div className="overlay"></div>
            <div className="container quick__popup">
                <h5>Quick access</h5>
                <hr/>
                <img src={googleIcon} className='icon__google' alt={'icon'} onClick={() => {
                    props.signInWithPopupThunk()
                }}/>
                <span className='close' onClick={() => {
                    props.changeActive(false)
                }}>X</span>
            </div>
        </>
    )
}


export default Popup
