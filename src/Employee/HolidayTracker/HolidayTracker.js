import React from "react";
import './HolidayTracker.css'

import Modal from "../../dialog/modal/Modal";

function HolidayTracker() {
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
                        <img src="/logout.svg"></img>
                        logout
                    </div>
                </div>
                <div className="fp-dashboard-details">
                    <div class="row" >
                        <div className="col-9">
                            <div className="row d-flex justify-content-around">
                                <div className="d-flex align-items-center justify-content-center" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{ width: "25rem" }}>
                                    <div className="card" style={{ width: "25rem", cursor: "pointer", padding: "47px 54px", height: "100%", boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)" }}>
                                        <div className="card-body  d-flex align-items-center justify-content-center">
                                            <div className="card-title fontBold">
                                                New Holiday Request
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center justify-content-center" style={{ width: "25rem" }}>
                                    <div className="card" style={{ width: "25rem", cursor: "pointer", padding: "47px 54px", height: "100%", boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)" }}>
                                        <div className="card-body d-flex align-items-center justify-content-center">
                                            <div className="card-title fontBold">Request History</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row justify-content-around" style={{ height: '100%' }}>
                                <div className="col-md-7 fp-notifications" style={{ width: '90%' }}>
                                    <div className="fontBold"></div>

                                </div>
                            </div>

                        </div>
                        <div className="col-3 d-flex flex-column text-center" style={{ height: '100%' }}>
                            <div className="fp-active-holidays" style={{ height: '100%' }}>
                                <div className="card" style={{ width: "100%", cursor: "pointer", padding: "47px 54px", height: "50vh", boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)" }}>
                                    <div className="card-body  d-flex align-items-center justify-content-center">
                                        <div className="card-title fontBold">
                                            Who's on holiday today
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="fp-policies fontBold">
                                <div className="card" style={{ width: "100%", cursor: "pointer", padding: "47px 54px", height: "100%", boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)" }}>
                                    <div className="card-body  d-flex align-items-center justify-content-center">
                                        <div className="card-title fontBold">
                                            Leave Policies
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="fp-public-holidays fontBold">
                                <div className="card" style={{ width: "100%", cursor: "pointer", padding: "47px 54px", height: "100%", boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)" }}>
                                    <div className="card-body  d-flex align-items-center justify-content-center">
                                        <div className="card-title fontBold">
                                            Public Holidays
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Modal />

                <div className="fp-baseline"></div>
            </div>
        </React.Fragment>
    )
}

export default HolidayTracker;