import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import Resume from './components/pages/Resume';
import PrivacyPolicy from './components/pages/PrivacyPolicy';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <div className='background'>
        <Navbar/>
    <Switch>
      <Route path='/portfolio-website' component={Home}/>
      <Route path='/projects' component={Projects}/>
      <Route path='/privacy-polcy' component={PrivacyPolicy}/>
      <Route path='/resume' component={Resume}/>
    </Switch>
  </div>
  </Router>
</>);
}

export default App;
