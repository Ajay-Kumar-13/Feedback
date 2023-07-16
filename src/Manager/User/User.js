import './User.css'
import React from 'react';
import Circle from '../../Circle';
import { useNavigate } from 'react-router-dom';

function User(props) {
    const navigate = useNavigate();
    const handleUser = () => {
        navigate('/User/FeedbackReport')
    }
    return (
        <React.Fragment>
            <div className='user' onClick={handleUser}>
                <Circle color={props.color} />
                Abhiram G | Frontend Developer
            </div>
        </React.Fragment>
    )
}

export default User;