import React from 'react'; 
import Navbar from "./components/Navbar";
import './App.css';
import {BrowserRouter as Router,Switch ,Route}  from "react-router-dom";
import Home from './components/pages/Home';
import Products from './components/pages/Products';
import Services from './components/pages/Services';
import Signup from './components/pages/Signup';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/Products"  component={Products}/>
          <Route path="/Services" component={Services}/>
          <Route path="/Signup" component={Signup}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
