import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Navbar from './components/Navbar';
import Map from './components/Map';

import LoginPage from './routes/LoginPage';
import RegisterPage from './routes/RegisterPage';
import Dashboard from './routes/Dashboard';

function App() {
  return (
    <div className="flex flex-col h-screen">
      <Router>
        <Route exact path='/login' component={LoginPage} />
        <Route exact path='/sign-up' component={RegisterPage} />
        <Route exact path='/dashboard' component={Dashboard} />
      </Router>
    </div>
  );
}

export default App;
