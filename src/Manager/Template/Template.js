import './Template.css'
import React from 'react'
import NewForm from '../../dialog/NewForm/NewForm';
import { useNavigate } from 'react-router-dom';

function Template() {

    const navigate = useNavigate();
    const handleDots = () => {
        console.log("hey");
        var dropdown = document.getElementsByClassName("fp-dropdown")[0];
        dropdown.style.display = (dropdown.style.display === "block") ? "none" : "block";
    }

    const handleRecents = () => {
        navigate('/FeedbackReport');
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
                    {/* <div className="fp-control fontBold">
                        <i class="fa fa-solid fa-calendar fp-icon"></i>
                        Holiday Tracker
                    </div> */}
                    <div className="logout">
                        <img src="logout.svg"></img>
                        logout
                    </div>
                </div>
                <div className="fp-dashboard-details">
                    <h1 className='fontBold'>Create/Manage Templates</h1>


                    <div className="d-flex mt-3" style={{ overflow: 'scroll' }}>
                        <div className="d-flex align-items-center justify-content-center" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            <div className="card" style={{ width: '30rem', height: '100%', cursor: 'pointer', padding: '47px 54px', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', marginRight: '1.25rem' }}>
                                <div className="card-body text-center fontBold justify-content-center align-items-center d-flex">
                                    Weekly performance Feedback
                                </div>
                            </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-center">
                            <div className="card disabled" style={{ width: '30rem', height: '100%', cursor: 'pointer', padding: '47px 54px', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', marginRight: '1.25rem', position: 'relative' }}>
                                <div className="card-body text-center fontBold align-items-center  justify-content-center d-flex">
                                    Monthly Performance Feedback
                                </div>
                                <span className="badge badge-dark">Coming Soon</span>
                            </div>

                        </div>
                        <div className="d-flex align-items-center justify-content-center" >
                            <div className="card disabled" style={{ width: '30rem', height: '100%', cursor: 'pointer', padding: '47px 54px', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', marginRight: '1.25rem', position: 'relative' }}>
                                <div className="card-body text-center">
                                    <div className="frame" style={{ margin: 'auto' }}></div>
                                    <div className="card-text pd-1 fontBold">Holiday Tracker</div>
                                </div>
                                <span className="badge badge-dark">Coming Soon</span>
                            </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-center" >
                            <div className="card disabled" style={{ width: '30rem', height: '100%', cursor: 'pointer', padding: '47px 54px', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', marginRight: '1.25rem', position: 'relative' }}>
                                <div className="card-body text-center">
                                    <div className="frame" style={{ margin: 'auto' }}></div>
                                    <div className="card-text pd-1 fontBold">Holiday Tracker</div>
                                </div>
                                <span className="badge badge-dark">Coming Soon</span>
                            </div>
                        </div>
                    </div>


                    <div className="d-flex flex-column fp-recents">
                        <h4>Recents</h4>

                        <div className="d-flex align-items-center" >
                            <div  style={{ position: 'relative' }}>
                                <div className="card fp-recent-card" style={{ cursor: 'pointer', padding: '47px 54px', marginRight: '1.25rem', position: 'relative' }}>
                                    <div className="card-body text-center fontBold" onClick={handleRecents}>
                                        Weekly Performance Feedback
                                    </div>
                                    <span onClick={handleDots} className='threedots'><img src='/threedots.svg'></img></span>

                                </div>
                                <div className='fp-dropdown'>
                                    Open
                                    Share
                                    rename
                                    delete
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <NewForm />
                <div className="fp-baseline"></div>
            </div>
        </React.Fragment>
    )
}

export default Template;