import React, { useEffect, useState } from "react";
import './Signup.css';
import axios from "axios";
import supabase from "../supabase";
import { getSubdomain } from "../../utils/helpers";

function Signup() {

    useEffect(() => {
        let done1 = document.querySelector(".done-1");

        // let slider = document.querySelector(".slider");
        let formSection = document.querySelector(".form-section");
        done1?.addEventListener("click", () => {
            console.log("came");
            // slider.classList.add("moveslider");
            formSection.classList.add("form-section-move");
        });
    })

    const [details, setDetails] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        organization: getSubdomain(),
        role: ""
    })

    const handleSave = async () => {

        axios.post('/' + getSubdomain() + '/saveEmployee', details)
            .then( res => {
                if (res.data.success) {
                    let formSection = document.querySelector(".form-section");
                    formSection.classList.add("form-section-move2x");
                }
            })

    }

    const handleInput = (e) => {
        const { name, value } = e.target;
        setDetails(prev => {
            return ({
                ...prev, [name]: value
            })
        })
    }

    return (
        <React.Fragment>
            <div className="homepage d-flex align-items-center justify-content-center flex-column">
                <div className="chronos">
                    Chronos
                </div>
                <div className="slide">

                    <form className="form-section">
                        <div className="personal-details">
                            <div class="mb-3">
                                <label for="firstName" class="form-label">First Name</label>
                                <input type="text" name="firstname" value={details.firstname} onChange={handleInput} class="form-control" id="firstName" />
                            </div>
                            <div class="mb-3">
                                <label for="lastname" class="form-label">Last Name</label>
                                <input type="text" name="lastname" value={details.lastname} onChange={handleInput} class="form-control" id="lastname" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Email address</label>
                                <input type="email" name="email" value={details.email} onChange={handleInput} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Password</label>
                                <input type="password" name="password" value={details.password} onChange={handleInput} class="form-control" id="exampleInputPassword1" />
                            </div>

                            <div class="d-grid gap-2 mt-3">
                                <button class="btn btn-dark done-1" type="button" >Done</button>
                            </div>
                        </div>
                        <div className="org-details">
                            <div class="mb-3">
                                <label for="role" class="form-label">What's your role?</label>
                                <input type="text" name="role" value={details.role} onChange={handleInput} class="form-control" id="role" />
                            </div>
                            <div class="d-grid gap-2 mt-3">
                                <button class="btn btn-dark done-2" type="button" onClick={handleSave}>Done</button>
                            </div>
                        </div>
                        <div className="thank-you">
                            <img src="Frame.svg"></img>
                            <p className="text-1">Welcome Onboard, Ajay Kumar</p>
                            <p className="text-2">Happy to see you over here, enjoy your time here. Thank you for choosing us.</p>
                        </div>
                    </form>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Signup;