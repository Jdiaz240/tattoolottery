import './assets/home.css';
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer'
import Landing from './components/Landing'
import GameBox from './components/gameBox/GameBox';
import AboutMe from './pages/AboutMe'
// import Lottery from './pages/Lottery'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route 
            path='/' 
            element={<Landing />} 
          />
          <Route 
            path='/lottery' 
            element={<GameBox />} 
          />
          <Route
            path='/aboutme'
            element={<AboutMe/>}
            />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
