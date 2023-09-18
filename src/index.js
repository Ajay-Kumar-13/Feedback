import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import App from './App';
import Dashboard from './Dashboard/Dashboard';
import HolidayTracker from './Employee/HolidayTracker/HolidayTracker';
import Template from './Manager/Template/Template';
import FeedbackReport from './Manager/FeedbackReport/FeedbackReport';
import UserFeedbackReport from './Manager/UserFeedbackReport/UserFeedbackReport';
import Login from './Auth/Login/Login';
import Signup from './Auth/Signup/Signup';

import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/signUp' element={<Signup />}></Route>
          <Route path='/feedback' element={<App />}></Route>
          <Route path='/dashboard' element={<Dashboard />}></Route>
          <Route path='/employee/holidaytracker' element={<HolidayTracker />}></Route>
          <Route path='/createTemplate' element={<Template />}></Route>
          <Route path='/FeedbackReport' element={<FeedbackReport />}></Route>
          <Route path='/User/FeedbackReport' element={<UserFeedbackReport />}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode >
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
