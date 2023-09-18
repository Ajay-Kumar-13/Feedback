import React from "react";
import './Login.css';
// import GoogleLogin from "react-google-login";
import { useState, useEffect } from 'react'

import supabase from "../supabase";
import { useNavigate } from "react-router-dom";

function Login() {

  const [session, setSession] = useState(null)
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {

      console.log(session);
      setSession(session)
    })

    return () => subscription.unsubscribe()
  }, [])

  const signInWithGoogle = async () => {
    try {
      let { user, error } = await supabase.auth.signInWithOAuth({
        provider: 'google'
      })
    } catch (error) {
      console.log(error, "error");
    }
  }

  const signUp = () => {
    navigate('/signUp')
  }

  if (!session) {
    return (
      <React.Fragment>
        <div className="homepage d-flex align-items-center justify-content-center flex-column">
          <div className="chronos">
            Chronos
          </div>
          <div className="googleSignup signupButton" onClick={signInWithGoogle}>
            Login with Google
            <img src="google.svg" />
          </div>
          <div className="emailSignup signupButton">
            Login with Email
            <img src="mail.svg" />
          </div>
          <div className="mt-2">
            Don't have an account? <a onClick={signUp}><strong>Sign Up</strong></a>
          </div>
        </div>
      </React.Fragment>
    );
  } else {
    return (
      navigate('/Feedback')
    );
  }
}

export default Login;