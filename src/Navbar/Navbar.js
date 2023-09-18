import React from "react";
import './Navbar.css';
import supabase from "../Auth/supabase";
import { useNavigate } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate();
    const handleLogout = async() => {
        let {error} = await supabase.auth.signOut()
        if (!error)  {
            navigate('/Login')
        }
    }
    return (
        <React.Fragment>
            <div className="b-navbar">
                <div className="logout" onClick={handleLogout}>
                    <img src="logout.svg"></img>
                    logout
                </div>
            </div>
        </React.Fragment>
    )
}

export default Navbar