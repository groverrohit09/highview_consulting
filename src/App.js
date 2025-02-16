import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/Services';
import AboutPage from './pages/About';
import ContactPage from './pages/Contact';




function App() {
  return (
    <div className="App">

      <Router>
        <div className='App-header'>
          <Navbar />
        </div>


        <Routes>
          <Route path="/" element={<HomePage />} ></Route>
          <Route path="/services" element={<ServicesPage />}></Route>
          <Route path="/about" element={<AboutPage />}></Route>
          <Route path="/contact" element={<ContactPage />}></Route>
        </Routes>
        {/* <div className="App">
        <div className="Landing-page">

          <img src={landing} alt="Landing" className="landing-image" />
          <img src={landing_text} alt="Landing-Text" className="landing-text-image" />
          <img src={scroll_arrow} alt="Scroll-down-arrow" className='scroll-arrow'></img>

        </div >
      </div> */}

      </Router>
      {/* </div> */}
    </div >
  );
}

export default App;
