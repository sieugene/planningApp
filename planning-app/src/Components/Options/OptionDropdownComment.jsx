import React from 'react'


const OptionDropdownComment = ({optionsShow, id, toggleVisible, deleteCommentThunk}) => {
    return (
        <>
            <div className='right-align editCommentPopup'>
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
                        <p className='waves-effect waves-light red darken-4 btn-small'
                           onClick={() => {
                               deleteCommentThunk(id)
                           }}
                        >delete</p>
                    </>
                }
            </div>
        </>
    )
}
export default OptionDropdownComment