import React from 'react';

export default function ToggleMenuSm(props) {

    let transformButton= "toggle-button__line";

    if(props.sideDrawer){
      transformButton="toggle-button__line active"
    }
    return (
        <div className="toolbar_toogle-button">
        <button className="toggle-button"
        onClick={ props.toggleNavHandler}>
            <div className={transformButton}></div>
            <div className={transformButton}></div>
            <div className={transformButton}></div>
        </button>
       
    </div>
    )
}

 