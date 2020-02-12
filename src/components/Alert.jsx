import React from 'react'

export default function Alert({status, text}) {
    return (
    <div className={`modal alert alert-${status}`}> 
        <div className="modal-content">
            {text} 
        </div>
    </div>
    )
}