import React from "react";
import './Notification.css'

function Notification() {
    return (
        <React.Fragment>
            <div className="fp-notification">

                <p style={{margin: '0'}}><i className="fa fa-light fa-bell" style={{marginRight: '10px', color:'yellowgreen'}}></i>  This is a sample Notification</p>
                <p style={{margin: '0'}}>26 mins ago</p>
            </div>
        </React.Fragment>
    )
}

export default Notification;