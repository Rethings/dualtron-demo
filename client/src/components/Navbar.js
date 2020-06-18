import React, {Component} from 'react';

import Profile from './Profile';
import OTPModal from './OTPModal';

class Navbar extends Component {
  state = {
    imobilize: false,
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

  render () {
    return (
      <nav className="py-3 px-5  w-full text-white flex items-center justify-between bg-teal-900">
        <div onClick={this.onOpenModal} className={`h-8 w-16 p-1 flex flex-no-wrap rounded-full bg-gray-600 cursor-pointer transition duration-500 ${this.state.imobilize ? "bg-green-600" : ""}`}>
          <div className={`transition-all duration-500 ease-in-out ${this.state.imobilize ? "flex-1" : ""}`} />
          <div className={`h-full w-6 rounded-full bg-gray-200`} />
        </div>

        <div>
          <h1>LOGO</h1>
        </div>

        <Profile />
        {this.state.isModalOpen && <OTPModal onSubmit={this.onImobilize} onClose={this.onCloseModal} />}
      </nav>
    )
  }
}

export default Navbar;
