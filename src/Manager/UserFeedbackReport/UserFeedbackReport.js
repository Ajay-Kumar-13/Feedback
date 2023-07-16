import './UserFeedbackReport.css';
import React from 'react';
import User from '../User/User';
import UserAns from '../UserAns/UserAns';

function UserFeedbackReport() {
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
                    {/* <div className="fp-control fontBold">
                        <i class="fa fa-solid fa-calendar fp-icon"></i>
                        Holiday Tracker
                    </div> */}
                    <div className="logout">
                        <img src="/logout.svg"></img>
                        logout
                    </div>
                </div>
                <div className="fp-dashboard-details">
                    <h1 className='fontBold'>Weekly Performance Feedback - Jun 2023 <i class="fa fa-solid fa-angle-right"></i> Abhiram G</h1>
                    <div className='mt-4 d-flex align-items-center justify-content-between'>
                        <User color='#78B5FF' />
                        <div className='summarize'>
                            Summarize
                        </div>
                    </div>
                    <div className="d-flex flex-column">
                        <UserAns />
                        <UserAns />
                        <UserAns />
                        <UserAns />
                        <UserAns />
                        <UserAns />
                        <UserAns />
                        <UserAns />
                    </div>
                </div>

                <div className="fp-baseline"></div>
            </div>
        </React.Fragment>
    )
}

export default UserFeedbackReport;