import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Menu from "./components/Menu";
import Profile from "./components/Profile";
import Ads from "./components/Ads";
import Footer from "./components/Footer";

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
