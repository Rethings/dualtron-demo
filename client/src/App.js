import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Dashboard from './pages/Dashboard';

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
