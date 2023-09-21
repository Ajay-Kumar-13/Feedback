import React from "react";
import './Landingpage.css'
import { useNavigate } from "react-router-dom";

function Landingpage() {
    const navigate = useNavigate();
    return (
        <React.Fragment>
            <div className="landingpage">
                <div className="container lp-navbar">
                    <div className="d-flex justify-content-between">
                        <div className="n-ls">
                            <img src="Logo.svg"></img>
                        </div>
                        <div className="n-rs">
                            <a>Use Cases</a>
                            <a>About Us</a>
                            <a>Why Chronos?</a>
                            <button className="btn btn-dark" onClick={() => navigate('/login')}>Log In</button>
                            <button className="btn btn-outline-dark" onClick={() => navigate('/signup')}>Sign Up</button>
                        </div>
                    </div>
                </div>
                <div className="container d-flex align-items-center flex-column">
                    <div className="jumbotron">
                        <div className="d-flex justify-content-center thin-text text">
                            Get Smarter Feedback with Our
                        </div>
                        <div className="d-flex justify-content-center bold-text text">
                            AI-Powered Employee Feedback Platform
                        </div>
                        <div className="d-flex justify-content-center ultra-thin-text text">
                            Grow your business by improving employee engagement and performance.
                        </div>
                    </div>
                    <div className="subscribe-btn">
                        <div>Get It For Free</div>
                        <img src="arrow.svg"></img>
                    </div>
                </div>
                <div className="container d-flex align-items-center justify-content-center lp-image">
                    <img src="work-party.png"></img>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Landingpage;