import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faGooglePlusG, faGithub} from '@fortawesome/free-brands-svg-icons';

import {Input, Form, FormGroup, Label,  Submit} from '../components/Form';

export default class LoginPage extends Component {
  state = {
    animation: false,
  }

  componentDidMount() {
    setInterval(() => this.setState({animation: true}), 500)
  }

  render() {
    return (
      <div className="w-full h-full flex">
        <div className="h-full w-2/4 bg-teal-900">
        </div>

        <div className={`h-full w-2/4 flex justify-center items-center transform transition ease-in duration-700 ${this.state.animation ? "opacity-100" : "translate-y-10 opacity-0"}`}>
          <Form className="w-6/12 bg-white rounded" >
            <div className={`mb-4 transform`}>
              <h1 className="text-2xl">Welcome!</h1>
            </div>
            <FormGroup className={`flex flex-col`}>
              <Label>Email</Label>
              <Input type="email" placeholder="Email" />
            </FormGroup>

            <FormGroup className={`flex flex-col`}>
              <Label>Password</Label>
              <Input type="password" placeholder="Password" />
            </FormGroup>

            <FormGroup className={`flex flex-col`}>
              <div>
                <input className="mr-1" id="remember-me-checkbox" type='checkbox' />
                <label className="text-gray-500 text-sm" for="remember-me-checkbox">Remember Me</label>
              </div>

              <a href="/" className="text-blue-500 hover:text-blue-300 text-sm ">Forget Password?</a>
            </FormGroup>

            <FormGroup className={`flex flex-col`}>
              <Submit className="h-10 w-full mb-1 p-1 px-2 bg-teal-900 hover:bg-teal-800 text-white rounded cursor-pointer">Login</Submit>
              <Link to='/sign-up' className="text-blue-500 hover:text-blue-300 text-sm">Don't have an account yet?</Link>
            </FormGroup>

            <div>
              <div className="flex items-center mb-5">
                <div className="w-full h-px bg-gray-300" />
                <span className="w-full text-center text-gray-500">Sign up with</span>
                <div className="w-full h-px bg-gray-300" />
              </div>

              <div className="flex mx-auto justify-center items-center">
                <div className="w-10 mx-3 h-10 bg-blue-700 rounded-full flex justify-center items-center hover:bg-blue-600 cursor-pointer">
                  <FontAwesomeIcon icon={faFacebookF} className="text-white" />
                </div>
                <div className="w-10 mx-3 h-10 bg-red-700 rounded-full flex justify-center items-center hover:bg-red-600 cursor-pointer">
                  <FontAwesomeIcon icon={faGooglePlusG} className="text-white" />
                </div>
                <div className="w-10 mx-3 h-10 bg-black rounded-full flex justify-center items-center hover:bg-gray-800 cursor-pointer">
                  <FontAwesomeIcon icon={faGithub} className="text-white" />
                </div>
              </div>
            </div>

          </Form>
        </div>
      </div>
    )
  }
}
