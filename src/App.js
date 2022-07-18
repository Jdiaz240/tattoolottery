import './assets/home.css';
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer'
// import Landing from './components/Landing'
import GameBox from './components/gameBox/GameBox';
// import Lottery from './pages/Lottery'


function App() {
  return (  
    <>
    <Header />
    <GameBox />
    {/* <Lottery /> */}
    {/* <Landing /> */}
    <Footer />
    </>
  );
}

export default App;
