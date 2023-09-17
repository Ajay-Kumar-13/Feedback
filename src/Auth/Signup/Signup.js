import React from "react";
import './Signup.css';
import GoogleLogin from "react-google-login";

function Signup() {
    const clientId = "234430022283-63naj5j3vjkov82tesdf7sb69bf34kk5.apps.googleusercontent.com"
    const onSuccess = (res) => {
        console.log(res);
    }

    const onFailure = (res) => {
        console.log(res);
    } 
    return (
        <React.Fragment>
            <div className="homepage d-flex align-items-center justify-content-center flex-column">
                <div className="chronos">
                    Chronos
                </div>
                <div className="googleSignup signupButton">
                        Sign Up with Google
                        <img src="google.svg" />
                    {/* <GoogleLogin clientId={clientId} buttonText="Sign Up with Google" onSuccess={onSuccess} onFailure={onFailure} cookiePolicy={"single_host_origin"} isSignedIn= {true} /> */}
                </div>
                <div className="emailSignup signupButton">
                    Sign Up with Email
                    <img src="mail.svg" />
                </div>
                <div className="mt-2">
                    Already have an account? <a href="/"><strong>Log In</strong></a>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Signup;