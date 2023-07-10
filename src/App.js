import Navbar from './Navbar/Navbar';
import './App.css';
import Question from './Question/Question';
import Footer from './Footer/Footer';
import React from 'react';

function App() {

  return (
    <div className="App">
      
        <Navbar />
        <Question />
        <Footer />
      
    </div>
  );
}

export default App;
