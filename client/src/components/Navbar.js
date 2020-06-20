import React, {Component} from 'react';

import logo from '../assets/Dualtron_type.png';

import Profile from './Profile';
import OTPModal from './OTPModal';

class Navbar extends Component {
  state = {
    imobilized: false,
    isModalOpen: false,
  }

  onImobilize = (otp) => {
    if(otp = "898989"){
      this.setState({
        imobilize: true,
        isModalOpen: false,
      });
    }
  }

  onOpenModal = () => {
    if(this.state.imobilize) {
      this.setState({ imobilize: false });
    } else {
      this.setState({ isModalOpen: true });
    }
  }

  onCloseModal = () => {
    this.setState({ isModalOpen: false });
  }

  renderSwitchButton = () => {
    return (
      <div onClick={this.onOpenModal} className={`h-8 w-16 p-1 flex flex-no-wrap rounded-full bg-black cursor-pointer transition duration-500 ${this.state.imobilized ? "bg-red-800" : ""}`}>
        <div className={`transition-all duration-500 ease-in-out ${this.state.imobilized ? "flex-1" : ""}`} />
        <div className={`h-full w-6 rounded-full bg-white`} />
      </div>
    )
  }

  render () {
    return (
      <nav className="py-3 px-20  w-full text-white flex items-center justify-between bg-white">
        <button className={`${this.state.imobilized ? "bg-red-800 hover:bg-red-700" : "bg-green-800 hover:bg-green-700"} px-4 py-1 bg-red-800 rounded`}>{this.state.imobilized ? "Imobalize" : "Mobalize"}</button>

        <div>
          <img src={logo} height="80" width="200" />
        </div>

        <Profile />
        {this.state.isModalOpen && <OTPModal onSubmit={this.onImobilize} onClose={this.onCloseModal} />}
      </nav>
    )
  }
}

export default Navbar;
