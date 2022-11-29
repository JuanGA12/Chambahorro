import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Login } from './pages/Login/Login';
import TokenService from './services/TokenService';
import { Landing } from './pages/Landing/Landing';
import { PageNotFound } from './pages/PageNotFound/PageNotFound';
import React, { useState } from "react";
import { Sidebar } from "./components/Sidebar";

const array = window.location.pathname.split("/");
const ruta = array[1];

function App() {
  
  const token = TokenService.getToken();
  if (token === null) {
    if (ruta === '') {
      return (<Landing />);
    }
    else {
      return (<Login />);
    }
  }
  return (
    <Router>
      <div className=' ' id="App">
        <div className='block xl:hidden'><Sidebar outerContainerId={"App"} /></div>
        <Routes>
          {/*<Route path="/" exact={true} element={<Home />}> </Route>
          <Route path="/home" exact={true} element={<Home />}> </Route>*/}
          <Route path="*" element={<PageNotFound />}> </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;