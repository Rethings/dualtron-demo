import React, {Component} from 'react';
import {Input, Form, FormGroup, Label, Submit} from '../components/Form';

import {Link} from 'react-router-dom';

export default class RegisterPage extends Component {
  state = {
    animation: false,
  }

  componentWillMount() {
    setInterval(() => this.setState({animation: true}), 500)
  }


  render() {
    return (
      <div className="w-full h-full flex">
        <div className="h-full w-2/4 bg-teal-900">
        </div>

        <div className={`h-full w-2/4 flex justify-center items-center transform transition ease-in duration-700 ${this.state.animation ? "opacity-100" : "translate-y-10 opacity-0"}`}>
          <Form className="w-6/12 bg-white rounded">
            <div className="mb-4">
              <h1 className="text-2xl">Create an Account</h1>
            </div>

            <FormGroup className="flex flex-col">
              <Label>Name</Label>
              <Input type="text" placeholder="Name" />
            </FormGroup>

            <FormGroup className="flex flex-col">
              <Label>Email Address</Label>
              <Input type="email" placeholder="Email" />
            </FormGroup>

            <FormGroup className="flex flex-col">
              <Label>Password</Label>
              <Input type="password" placeholder="Password" />
            </FormGroup>

            <FormGroup className="flex flex-col">
              <Label>Contact Number (optional)</Label>
              <Input type="text" placeholder="Contact" />
            </FormGroup>

            <div className="my-8" />

            <FormGroup className="flex flex-col items-center">
              <Submit className="h-10 w-full mb-1 p-1 px-2 bg-teal-900 hover:bg-teal-800 text-white rounded cursor-pointer">Register</Submit>
              <Link to="/login" className="text-blue-500 hover:text-blue-300 text-sm">Already have an account?</Link>
            </FormGroup>
          </Form>
        </div>
      </div>
    )
  }
}
