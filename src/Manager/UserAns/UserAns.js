import './UserAns.css';

import React from 'react';

function UserAns(props) {
    return (
        <React.Fragment>
            <div className='f-user-question mt-4 mb-4'>
                <div className='question'>
                    Question {props.index + 1}
                </div>
                <div className='questionDesc'>{props.question[0]}</div>
                <div className='answer'>
                    Answer
                </div>
                <div className='answerDesc'>{props.question[1]}</div>
            </div>
        </React.Fragment>
    )
}

export default UserAns;