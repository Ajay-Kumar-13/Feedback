import './Feedback.css';
import React from 'react';
import User from '../User/User';

function FeedbackReport() {
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
                    <h1 className='fontBold'>Weekly Performance Feedback - Jan 2023</h1>


                    <div className="row mt-3">
                        <div className="col-md-6">
                            <div className="f-submitted">
                                <div className='fontBold'>
                                    Submitted
                                </div>
                                <div className='f-users mt-3'>
                                    <User color="#78B5FF" />
                                    <User color="#7A7A7A" />
                                    <User color="#7A7A7A" />
                                    <User color="#7A7A7A" />
                                    <User color="#7A7A7A" />
                                    <User color="#7A7A7A" />
                                    <User color="#7A7A7A" />
                                    <User color="#7A7A7A" />

                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="f-yetcomplete">
                                <div className='fontBold'>
                                    Yet Complete
                                </div>
                                <div className='f-users mt-3'>
                                    <User color="#00469C" />
                                    <User color="#CDCDCD" />
                                    <User color="#78002B" />
                                    <User color="#008DF5" />
                                    <User color="#E800C1" />
                                    <User color="#78B5FF" />
                                    <User color="#78B5FF" />
                                    <User color="#78B5FF" />
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="row mt-4 mb-4 fp-responses">
                        <div className='col-12'>
                            <div className='fontBold mb-1'>
                                Important Responses
                            </div>
                            <div className='d-flex align-items-center justify-content-between'>
                                <User color="#00469C" />
                                <div className='pagination'>
                                    <i class="fa fa-solid fa-angle-left" style={{marginRight:'5px', cursor:'pointer'}}></i>
                                    1 of 20
                                    <i class="fa fa-solid fa-angle-right" style={{marginLeft:'5px', cursor:"pointer"}}></i>
                                </div>
                            </div>
                            <div className='summary'>
                                Act as a HR executive. Your work is to interview employees and have a professional conversation with them. The goal here is to get feedback from employees by asking them relevant questions about their work. Remember to use statements that are not too long. You need to ensure this feedback gathering exercise doesn't take too much time. If an employee gives vague feedback, encourage them to be more specific but do not force them too much. If an employee asks for internal or sensitive information, let them know you are not at a liberty to give away this information. If an employee gives vague feedback, encourage them to be more specific but do not force them too much. If an employee asks for internal or sensitive information, let them know you are not at a liberty to give away this information.
                            </div>
                            <div className='respond mt-5'>
                                Respond
                            </div>
                        </div>
                    </div>
                </div>

                <div className="fp-baseline"></div>
            </div>
        </React.Fragment>
    )
}

export default FeedbackReport;