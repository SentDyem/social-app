import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Profile from "./components/Profile/Profile";
import Ads from "./components/Ads/Ads";
import Footer from "./components/Footer/Footer";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Sales from "./components/Sales/Sales";

const App = () => {
  return (
      <BrowserRouter>
          <div className="app-wrapper">
              <Header />
              <Menu />
              <div className="app-wrapper-content">
                  <Route path = '/profile' component = {Profile}/>
                  <Route path = '/dialogs' component = {Dialogs}/>
                  <Route path = '/sales' component = {Sales} />
                      {/* <Profile />*/}
              </div>
              <Ads />
              <Footer />
          </div>
      </BrowserRouter>
  )
}

export default App;
