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
        <Route exact path='/login'>
          <LoginPage />
        </Route>
        <Route exact path='/sign-up'>
          <RegisterPage />
        </Route>
        <Route exact path='/dashboard'>
          <Dashboard />
        </Route>
      </Router>asdad
    </div>
  );
}

export default App;
