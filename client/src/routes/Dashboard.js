import React, {Component} from 'react';
import Navbar from '../components/Navbar';
import Map from '../components/Map';

export default class Dashbaord extends Component {
  render () {
    return (
      <div className="w-full h-full flex flex-col">
        <Navbar />
        <Map />
      </div>
    )
  }
}
