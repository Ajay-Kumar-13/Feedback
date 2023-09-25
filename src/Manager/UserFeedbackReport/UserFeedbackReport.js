import './UserFeedbackReport.css';
import React, { useEffect, useState } from 'react';
import User from '../User/User';
import UserAns from '../UserAns/UserAns';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { getSubdomain } from '../../utils/helpers';
import supabase from '../../Auth/supabase';

function UserFeedbackReport() {
    const location = useLocation();
    const [employee, setEmployee] = useState();
    let props = location.state;
    const navigate = useNavigate();

    useEffect(() => {
        if (location.state.id) {
            axios.get('/'+getSubdomain()+'/test/' + props.id + '/getFeedback')
                .then(res => {
                    setEmployee(res.data)
                })
        }
    }, [])

    const handleLogout = async() => {
        let {error} = await supabase.auth.signOut()
        if (!error)  {
            navigate('/Login')
        }
    }


    return (
        <React.Fragment>
            <div className="fp-dashboard">
                <div className="fp-dashboard-controls">
                    <div className="logo">
                        <h1>Chronos</h1>
                    </div>
                    <div className="fp-control fontBold">
                        <i className="fa fa-solid fa-pencil fp-icon"></i>
                        Dashboard
                    </div>
                    <div className="fp-control fontBold">
                        <i className="fa fa-solid fa-file fp-icon"></i>
                        Feedback
                    </div>

                    <div className="logout" onClick={handleLogout}>
                        <img src="/logout.svg"></img>
                        logout
                    </div>
                </div>
                <div className="fp-dashboard-details">
                    <h1 className='fontBold'>Weekly Performance Feedback - Jun 2023 <i class="fa fa-solid fa-angle-right"></i> Abhiram G</h1>
                    <div className='mt-4 d-flex align-items-center justify-content-between'>
                        <User color='#78B5FF' name={props.name} role={props.role} />
                        <div className='summarize'>
                            Summarize
                        </div>
                    </div>
                    <div className="d-flex flex-column">
                        {
                            employee ? employee[0].feedback?.map((f, index) => <UserAns key={index} index={index} question={f.question} />) :
                                <div class="spinner-border text-secondary mt-4" role="status">
                                    <span class="sr-only"></span>
                                </div>
                        }
                    </div>
                </div>

                <div className="fp-baseline"></div>
            </div>
        </React.Fragment>
    )
}

export default UserFeedbackReport;