import React from "react";
import './Notification.css'

function Notification() {
    return (
        <React.Fragment>
            <div className="fp-notification">

                <p className="d-flex align-items-center" style={{ margin: '0' }}><div className="fp-icon" style={{ borderRadius: '50%', height: '10px', width: '10px', backgroundColor: '#00FF23' }}></div>  This is a sample Notification</p>


                <p style={{ margin: '0' }}>26 mins ago</p>
            </div>
        </React.Fragment>
    )
}

export default Notification;