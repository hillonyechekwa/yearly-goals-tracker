import React from 'react';
// import Calender from './components/calender/Calender';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Nav from './components/nav/Nav';
import Landing from './components/landing/Landing';
import './App.css';

function App() {
  return (
    <Router>
    <div className="App container">
     <Nav />
     <Route exact path="/" component={Landing} />
    </div>
    </Router>
  );
}

export default App;
