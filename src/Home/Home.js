import './Home.css';
import Question from '../Question/Question';
import React, { useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import { getSubdomain } from '../utils/helpers';
import { redirect, useLocation, useNavigate } from 'react-router-dom';



function Home() {
  const location = useLocation();
  const navigate = useNavigate();
  const instance = new URLSearchParams(location.search).get('instance');

  // useEffect(() => {
  //   if (instance) {
  //     navigate(`http://${instance}.localhost:3000/Feedback`, { replace: true });
  //   }
  // }, [instance, navigate]);

  console.log(getSubdomain());

  return (
    <div className="App d-flex align-items-center">
      <Navbar />
      <Question />
      {/* <Footer /> */}
    </div>
  );
}

export default Home;