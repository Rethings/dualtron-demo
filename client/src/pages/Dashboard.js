import React, {Component} from 'react';

import Navbar from '../components/Navbar';
import MobalizeButton from '../components/MobalizeButton';

import GoogleMap from '../components/GoogleMap';

export default class Dashbaord extends Component {
  render () {
    return (
      <div className="w-full h-full flex flex-col">
        <Navbar />
        <GoogleMap />
        <MobalizeButton />
      </div>
    )
  }
}
