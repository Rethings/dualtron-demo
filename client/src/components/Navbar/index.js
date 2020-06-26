import React, {Component} from 'react';

import logo from '../../assets/Dualtron_logo.png';

import Profile from '../Profile';
import Menu from '../Menu';

class Navbar extends Component {
  render () {
    return (
      <nav className="z-10 absolute w-11/12 flex items-center justify-between right-0 left-0 mt-10 mx-auto bg-white py-3 px-5 sm:px-3 sm:py-1 rounded shadow-lg">
        <div className="absolute flex items-center justify-center sm:w-20 w-32 right-0 left-0 mx-auto rounded-full bg-white p-3">
          <img className="" alt="" src={logo} width="100" height="100" />
        </div>

        <Menu />
        <Profile />
      </nav>
    )
  }
}

export default Navbar;
