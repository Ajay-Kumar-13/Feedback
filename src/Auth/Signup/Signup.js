import React from "react";
import './Signup.css';
// import GoogleLogin from "react-google-login";
import { useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'

function Signup() {
    const supabase = createClient('https://pmduoojgfcjyzsbkjlrd.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBtZHVvb2pnZmNqeXpzYmtqbHJkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQ5NDE0MDYsImV4cCI6MjAxMDUxNzQwNn0.r6AFtbGbAHvp0bUCBY13dsZrx2hDXAFkw4optRJ7hAg')
    const [session, setSession] = useState(null)

    useEffect(() => {
      supabase.auth.getSession().then(({ data: { session } }) => {
        setSession(session)
      })
  
      const {
        data: { subscription },
      } = supabase.auth.onAuthStateChange((_event, session) => {
        setSession(session)
      })
  
      return () => subscription.unsubscribe()
    }, [])
    if (!session) {
        return (
        //     <React.Fragment>
        //     <div className="homepage d-flex align-items-center justify-content-center flex-column">
        //         <div className="chronos">
        //             Chronos
        //         </div>
        //         <div className="googleSignup signupButton">
        //                 Sign Up with Google
        //                 <img src="google.svg" />
        //             {/* <GoogleLogin clientId={clientId} buttonText="Sign Up with Google" onSuccess={onSuccess} onFailure={onFailure} cookiePolicy={"single_host_origin"} isSignedIn= {true} /> */}
        //         </div>
        //         <div className="emailSignup signupButton">
        //             Sign Up with Email
        //             <img src="mail.svg" />
        //         </div>
        //         <div className="mt-2">
        //             Already have an account? <a href="/"><strong>Log In</strong></a>
        //         </div>
        //     </div>
        // </React.Fragment>
          <div
            style={{
              width: "100vw",
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div>
              <Auth
                supabaseClient={supabase}
                appearance={{ theme: ThemeSupa }}
                providers={["google"]}
              />
            </div>
    
          </div>
        );
    }else{
        return (
            <div>
              <div>Logged in!</div>
              <button onClick={() => supabase.auth.signOut()}>Sign out</button>
            </div>
          );

    }
}

export default Signup;