import React, {Component} from 'react';
import bg from '../assets/profile-bg.jpeg';
import {Form, FormGroup, Input, Label, Submit} from './Form';
import {Link} from 'react-router-dom';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLock, faUser, faSignOutAlt} from '@fortawesome/free-solid-svg-icons';

export default class Popovers extends Component {
  state = {
    popover: false,
    page: 0,
  }

  onHoverProfile = () => {
    this.setState({
      popover: !this.state.popover
    })
  }

  onSelect = (e) => {
    this.setState({
      page: e.target.value
    })
  }

  onBack = () => {
    this.setState({
      page: 0
    })
  }

  render() {
    const ChangePassword = () => {
      return (
        <div style={{ width: "300px"}} className="p-2">
          <button onClick={this.onBack} className="text-sm text-gray-700 hover:text-gray-500">back</button>
          <h1 className="text-center text-lg">Change password</h1>
          <Form>
            <FormGroup>
              <Label>Old Password</Label>
              <Input type="password" />
            </FormGroup>

            <FormGroup>
              <Label>New Password</Label>
              <Input type="password" />
            </FormGroup>

            <FormGroup>
              <Label>Confirm Password</Label>
              <Input type="password" />
            </FormGroup>

            <FormGroup>
              <Submit className="h-10 w-full p-1 px-2 bg-teal-900 hover:bg-teal-800 text-white rounded cursor-pointer" />
            </FormGroup>
          </Form>
        </div>
      )
    }

    const ChangeProfile = () => {
      return (
        <div style={{ width: "300px"}} className="p-2">
          <button onClick={this.onBack} className="text-sm text-gray-700 hover:text-gray-500">back</button>
          <h1 className="text-center text-lg">Change Profile</h1>
          <Form>
            <FormGroup>
              <Label>Name</Label>
              <Input type="text" />
            </FormGroup>

            <FormGroup>
              <Label>Email</Label>
              <Input type="email" />
            </FormGroup>

            <FormGroup>
              <Label>Password</Label>
              <Input type="password" />
            </FormGroup>

            <FormGroup>
              <Submit className="h-10 w-full p-1 px-2 bg-teal-900 hover:bg-teal-800 text-white rounded cursor-pointer" />
            </FormGroup>
          </Form>
        </div>
      )
    }

    const Settings = () => {
      return (
        <div style={{height: "300px", width: "300px"}} className="flex flex-col">
          <div style={{background: `url(${bg})`, backgroundSize: "cover", backgroundPosition: "center"}} className="bg-teal-600 h-64 w-full flex justify-center items-center">
            <div className="w-16 h-16 bg-teal-300 rounded-full"></div>
          </div>
          <ul  className="h-full flex flex-col justify-between">
            <li onClick={this.onSelect} className="px-2 text-sm text-gray-700 hover:text-gray-500 cursor-pointer flex text- items-center border-gray-500 border-solid border-b h-full" value={1}><FontAwesomeIcon className="mr-2" icon={faLock} />Change Password</li>
            <li onClick={this.onSelect} className="px-2 text-sm text-gray-700 hover:text-gray-500 cursor-pointer flex items-center border-gray-500 border-solid border-b h-full" value={2}><FontAwesomeIcon className="mr-2" icon={faUser} />Change Profile</li>
            <Link to='/login' className="px-2 text-sm text-gray-700 hover:text-gray-500 cursor-pointer flex items-center border-gray-500 border-solid border-b h-full" value={3}><FontAwesomeIcon className="mr-2" icon={faSignOutAlt} />Sign-out</Link>
          </ul>
        </div>
      )
    }

    const SwitchRender = (props) => {
      switch (this.state.page) {
        case 1:
          return <ChangePassword />
        case 2:
          return <ChangeProfile />
        case 3:
          return console.log("Logged Out");
          break;
        default:
          return <Settings />
      }
    }

    return (
      <div onMouseEnter={this.onHoverProfile} onMouseLeave={this.onHoverProfile} ref="popover" className="relative z-10">
        <div className="h-10 w-10 rounded-full bg-gray-500"></div>

        <div style={{top: "60px", right: '0'}} className={`z-10 bg-white transform transition-transform duration-500 ease-in-out rounded mb-2 absolute origin-top-right shadow-lg ${this.state.popover ? "scale-100" : "scale-0"}`} >
          <SwitchRender />
        </div>

      </div>
    )
  }
}
