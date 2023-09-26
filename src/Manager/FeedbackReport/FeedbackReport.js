import './Feedback.css';
import React, { useEffect, useState } from 'react';
import User from '../User/User';
import axios from 'axios';
import { getSubdomain } from '../../utils/helpers';
import supabase from '../../Auth/supabase';
import { useNavigate } from 'react-router-dom';


function FeedbackReport() {

    const [recents, setRecents] = useState([])
    const [employees, setEmployees] = useState(null)
    const [submittedEmps, setSubmittedEmps] = useState(null)

    const [summaries, setSummaries] = useState(null);

    const [perPage, setPerPage] = useState(null);
    const [page, setPage] = useState(1);

    const navigate = useNavigate();

    useEffect(() => {

        const fetchData = async () => {
            try {
                const recents = await axios.get('/' + getSubdomain() + '/getAllFeedbacks')
                setRecents(recents.data)
            } catch (error) {
                // Handle any errors here
                console.error(error);
            }
        }

        fetchData()
    }, []);

    useEffect(() => {
        if (recents && recents.length > 0) {
            axios.get('/' + getSubdomain() + '/' + recents[recents.length - 1]?.Feedback_name + '/submittedEmps')
                .then(semps => {
                    console.log(semps.data, "semps");
                    axios.get('/' + getSubdomain() + '/getEmployees')
                        .then(res => {
                            console.log(res.data, "no sub");
                            const filteredEmployees = res.data.filter(emp => !semps.data.some(submittedEmp => submittedEmp.employeeId === emp._id));
                            setEmployees(filteredEmployees);
                            const Employees = res.data.filter(emp => semps.data.some(submittedEmp => submittedEmp.employeeId === emp._id));
                            setSubmittedEmps(Employees);
                        })
                })
        }
    }, [recents])

    useEffect(() => {
        if (submittedEmps && submittedEmps.length > 0) {
            fetchSummaries(submittedEmps)
        }
    }, [submittedEmps]);


    async function getSummary(id) {
        try {
            const response = await axios.get(`/${getSubdomain()}/test/${id}/getFeedback`);
            return response.data[0].summary;
        } catch (error) {
            console.error(`Error fetching feedback for ID ${id}:`, error);
            return null; // Handle the error gracefully
        }
    }

    async function fetchSummaries(submittedEmps) {
        try {
            const promises = await submittedEmps.map(emp => getSummary(emp._id))

            const summary = await Promise.all(promises);

            console.log(summary, "feedbacks arise");

            setSummaries(summary);

        } catch (error) {
            console.error('Error fetching summaries:', error);
            return [];
        }
    }

    useEffect(() => {
        setPerPage(summaries?.slice(0, 1))
    }, [summaries])

    useEffect(() => {
        setPerPage(summaries?.slice(page - 1, page))
    }, [page])


    const handleLogout = async () => {
        let { error } = await supabase.auth.signOut()
        if (!error) {
            navigate('/Login')
        }
    }

    const increasePage = () => {
        setPage(page + 1)
    }

    const decreasePage = () => {
        setPage(page-1)
    }

    return (
        <React.Fragment>
            <div className="fp-dashboard">
                <div className="fp-dashboard-controls">
                    <div className="logo">
                        <h1>Chronos</h1>
                    </div>
                    <div className="fp-control fontBold" onClick={() => navigate('/dashboard')}>
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
                    <div className="logout" onClick={handleLogout}>
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
                                    {
                                        submittedEmps ? submittedEmps.map((e, index) => (
                                            <User
                                                color="#7A7A7A"
                                                key={index}
                                                name={e.employeeName}
                                                role={e.employeeRole}
                                                id={e._id}
                                                submitted={true}
                                            />
                                        ))



                                            :
                                            <div class="spinner-border text-secondary" role="status">
                                                <span class="sr-only"></span>
                                            </div>
                                    }

                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="f-yetcomplete">
                                <div className='fontBold'>
                                    Yet Complete
                                </div>
                                <div className='f-users mt-3'>
                                    {
                                        employees ? employees.map((e, index) => <User color="#7A7A7A" key={index} name={e.employeeName} role={e.employeeRole} submitted={false} />) :
                                            <div class="spinner-border text-secondary" role="status">
                                                <span class="sr-only"></span>
                                            </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-4 mb-4 fp-responses">
                        <div className='col-12'>
                            <div className='fontBold mb-1'>
                                Summaries
                            </div>
                            {summaries && <div className='d-flex align-items-center justify-content-between'>
                                { submittedEmps && <User name={submittedEmps[page-1].employeeName} role={submittedEmps[page-1].employeeRole} color="#00469C" />}
                                <div className='pagination d-flex align-items-center'>
                                    <i className={ page === 1 ? "fa fa-solid fa-angle-left fa-2x p-2 disable" : "fa fa-solid fa-angle-left fa-2x p-2"} style={{ marginRight: '5px', cursor: 'pointer' }} onClick={decreasePage}></i>
                                    {summaries && page}
                                    <i className={ page === summaries.length ? "fa fa-solid fa-angle-right fa-2x p-2 disable" : "fa fa-solid fa-angle-right fa-2x p-2"} style={{ marginLeft: '5px', cursor: "pointer" }} onClick={increasePage}></i>
                                </div>
                            </div>}

                            <div className='summary'>
                                {
                                    perPage ?
                                        perPage.map((summary, index) => <React.Fragment key={index}>
                                            {summary}
                                        </React.Fragment>)
                                        :
                                        <div class="spinner-border text-secondary mt-4" role="status">
                                            <span class="sr-only"></span>
                                        </div>
                                }
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