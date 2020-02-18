  
import React from 'react'

export default function Notification({status, text}) {
    return (
    <div className={`modal alert alert-${status}`}> 
        <div className="modal-content">
            {text} 
        </div>
    </div>
    )
}