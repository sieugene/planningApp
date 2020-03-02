import React from "react";

export const fieldInput = ({input, label, type, meta: {touched, error, warning}}) => {
    return (
        <>
            <input {...input} placeholder={label} type={type}/>
            {touched &&
            ((error &&
                <span className='error__field'>
            {error}
          </span>) ||
                (warning &&
                    <span className='error__field'>
              {warning}
            </span>))}
        </>
    )
}

