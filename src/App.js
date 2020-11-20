import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import Resume from './components/pages/Resume';
import PrivacyPolicy from './components/pages/PrivacyPolicy';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (<Router>
    <Navbar/>
      <div className='background'>
    <Switch>
      <Route path='/' exact="exact" component={Home}/>
      <Route path='/Projects' component={Projects}/>
      <Route path='/PrivacyPolicy' component={PrivacyPolicy}/>
      <Route path='/Resume' component={Resume}/>
    </Switch>
  </div>
  </Router>);
}

export default App;
