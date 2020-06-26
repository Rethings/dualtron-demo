import React, { Component } from 'react';
import GoogleMap from 'google-map-react';

import marker from "../../assets/scooter.png";

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coords: {
        lat: 0,
        lng: 0
      }
    }

    this.newCoords = this.newCoords.bind(this);
  }

  componentWillMount() {
    window.mq.subscribe('jms-vt0git1/car-tracker', this.newCoords )
  }

  distanceToMouse = (pt, mousePos, markerProps) => {
    if (pt && mousePos) {
      return Math.sqrt(
        (pt.x - mousePos.x) * (pt.x - mousePos.x) +
          (pt.y - mousePos.y) * (pt.y - mousePos.y)
      );
    }
  };

  newCoords = (message) => {
    let newMessage = message.split(',');
    let newCoords = {
      lat: parseFloat(newMessage[0]),
      lng: parseFloat(newMessage[1])
    }

    this.setState({
      coords: newCoords
    })
  }

  mapOptions = (maps) => {
    return {
      zoomControl: false,
      fullscreenControl: false
    }
  }

  onClick = (e) => {
    console.log(e)
  }

  render() {
    const { coords } = this.state;

    const Marker = () => {
      return (
        <img src={marker} alt="" width="50" height="50" />
      )
    }

    return (
      <GoogleMap
        bootstrapURLKeys={{
          key: "AIzaSyDfvQtvIIe7IqowFMUNaWfEpNs7ZuBH36Y"
        }}
        center={coords}
        distanceToMouse={this.distanceToMouse}
        defaultZoom={9}
        onClick={this.onClick}
        options={this.mapOptions}
      >
        <Marker {...coords} />
      </GoogleMap>
    )
  }
}

export default Map
