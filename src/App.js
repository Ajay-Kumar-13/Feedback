import React from 'react';

import Home from './Home/Home';
import Dashboard from './Dashboard/Dashboard';
import HolidayTracker from './Employee/HolidayTracker/HolidayTracker';
import Template from './Manager/Template/Template';
import FeedbackReport from './Manager/FeedbackReport/FeedbackReport';
import UserFeedbackReport from './Manager/UserFeedbackReport/UserFeedbackReport';
import Login from './Auth/Login/Login';
import Signup from './Auth/Signup/Signup';
import Landingpage from './LandingPage/Landingpage';

import { Routes, Route } from 'react-router-dom';

export const AppRouter = () => {

  return (
    <Routes>
      <Route path='/' element={<Landingpage />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/signUp' element={<Signup />}></Route>
      <Route path='/Feedback' element={<Home />}></Route>
      <Route path='/dashboard' element={<Dashboard />}></Route>
      <Route path='/employee/holidaytracker' element={<HolidayTracker />}></Route>
      <Route path='/createTemplate' element={<Template />}></Route>
      <Route path='/FeedbackReport' element={<FeedbackReport />}></Route>
      <Route path='/User/FeedbackReport' element={<UserFeedbackReport />}></Route>
    </Routes>
  );
}

export const SampleRouter = () => {

  return (
    <Routes>
      <Route path='/' element={<Landingpage />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/signUp' element={<Signup />}></Route>
      <Route path='/Feedback' element={<Home />}></Route>
      <Route path='/dashboard' element={<Dashboard />}></Route>
      <Route path='/employee/holidaytracker' element={<HolidayTracker />}></Route>
      <Route path='/createTemplate' element={<Template />}></Route>
      <Route path='/FeedbackReport' element={<FeedbackReport />}></Route>
      <Route path='/User/FeedbackReport' element={<UserFeedbackReport />}></Route>
    </Routes>
  );
}
