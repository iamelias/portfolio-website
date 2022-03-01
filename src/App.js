import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import Resume from './components/pages/Resume';
import PrivacyPolicy from './components/pages/PrivacyPolicy';
import {HashRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
        <Navbar/>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/projects' component={Projects}/>
      <Route path='/privacy-policy' component={PrivacyPolicy}/>
      <Route path='/resume' component={Resume}/>
    </Switch>
  </Router>
</>);
}

export default App;
