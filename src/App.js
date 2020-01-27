import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Profile from "./components/Profile/Profile";
import Ads from "./components/Ads/Ads";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
      <div className="app-wrapper">
        <Header />
        <Menu />
        <Profile />
        <Ads />
        <Footer />
      </div>

  )
}

export default App;
