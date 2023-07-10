import React from "react";
import './Dashboard.css'
import Notification from "../Notification/Notification";
import { useNavigate } from "react-router-dom";

function Dashboard() {
    const navigate = useNavigate();
    const handleHolidayTracker = () => {
        navigate('/employee/holidaytracker')
    }
    return (
        <React.Fragment>
            <div className="fp-dashboard">
                <div className="fp-dashboard-controls">
                    <div className="logo">
                        <h1>Logo</h1>
                    </div>
                    <div className="fp-control fontBold">
                        <i className="fa fa-solid fa-pencil fp-icon"></i>
                        Create template
                    </div>
                    <div className="fp-control fontBold">
                        <i className="fa fa-solid fa-file fp-icon"></i>
                        Feedback
                    </div>
                    <div className="fp-control fontBold">
                        <i class="fa fa-solid fa-calendar fp-icon"></i>
                        Holiday Tracker
                    </div>
                    <div className="logout">
                        <img src="logout.svg"></img>
                        logout
                    </div>
                </div>
                <div className="fp-dashboard-details">
                    <div className="row">
                        <div className="col-md-4 d-flex align-items-center justify-content-center">
                            <div className="card" style={{ width: '25rem', cursor: 'pointer', padding: '47px 54px', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)' }}>
                                <div className="card-body text-center">
                                    <div className="card-title fp-pending">8</div>
                                    <div className="card-text">of 25 completed the feedback</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 d-flex align-items-center justify-content-center">
                            <div className="card" style={{ width: '25rem', cursor: 'pointer', padding: '47px 54px', height: '100%', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)' }}>
                                <div className="card-body d-flex align-items-center">
                                    <div className="card-title fontBold">Create and manage templates</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 d-flex align-items-center justify-content-center" onClick={handleHolidayTracker}>
                            <div className="card" style={{ width: '25rem', cursor: 'pointer', padding: '47px 54px', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)' }}>
                                <div className="card-body text-center">
                                    <div className="frame" style={{ margin: 'auto' }}></div>
                                    <div className="card-text pd-1 fontBold">Holiday Tracker</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-around">
                        <div className="col-md-7 fp-notifications">
                            <div className="fontBold">Notifications</div>
                            <Notification />
                            <Notification />
                            <Notification />
                            <Notification />
                        </div>
                        <div className="col-md-3 fp-notes">
                            <div className="fontBold">Quick Notes</div>
                            <ul>
                                <li>
                                    Setup a onboarding meet with Raghu today
                                </li>
                                <li>
                                    Meet with stakeholders about design decisions
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="fp-baseline"></div>
            </div>
        </React.Fragment>
    )
}

export default Dashboard;