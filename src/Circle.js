import React from "react";

function Circle(props) {
    return (
        <React.Fragment>
            <svg className="fp-icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="16" r="16" fill={props.color} />
            </svg>
        </React.Fragment>
    )
}

export default Circle;