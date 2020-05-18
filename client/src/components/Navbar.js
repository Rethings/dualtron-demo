import React, {Component} from 'react';
import Profile from './Profile';

export default class Navbar extends Component {
  state = {
    imobilize: false
  }

  onImobilize = () => {
    this.setState({
      imobilize: !this.state.imobilize,
    })
  }

  render () {
    return (
      <nav className="py-3 px-5  w-full text-white flex items-center justify-between bg-teal-900">
        <div onClick={this.onImobilize} className={`h-8 w-16 p-1 flex flex-no-wrap rounded-full bg-gray-600 cursor-pointer transition duration-500 ${this.state.imobilize ? "bg-green-600" : ""}`}>
          <div className={`transition-all duration-500 ease-in-out ${this.state.imobilize ? "flex-1" : ""}`} />
          <div className={`h-full w-6 rounded-full bg-gray-200`} />
        </div>

        <div>
          <h1>LOGO</h1>
        </div>

        <Profile />
      </nav>
    )
  }
}
