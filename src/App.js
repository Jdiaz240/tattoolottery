import './assets/home.css';
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer'
import Landing from './components/Landing'
import GameBox from './components/gameBox/GameBox';

// import Lottery from './pages/Lottery'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div>
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
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
