import React, {Component} from 'react';
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';

const params = {v: '3.exp', key: 'AIzaSyDfvQtvIIe7IqowFMUNaWfEpNs7ZuBH36Y'};

export default class Map extends Component {
  state = {
    coords: {
      lat: 51.5258541,
      lng: -0.08040660000006028
    }
  }

  onMapCreated(map) {
    map.setOptions({
      disableDefaultUI: true
    });
  }

  onDragEnd(e) {
    console.log('onDragEnd', e);
  }

  onCloseClick() {
    console.log('onCloseClick');
  }

  onClick = (e) => {
    console.log('onClick', e.latLng.lng());
    this.setState({
      coords: {
        lat: e.latLng.lat(),
        lng: e.latLng.lng()
      }
    })

  }

  render() {
    const {coords} = this.state;

    return (
      <Gmaps
        className="w-full h-full"
        lat={coords.lat}
        lng={coords.lng}
        zoom={12}
        loadingMessage={'Be happy'}
        params={params}
        onMapCreated={this.onMapCreated}
        onClick={this.onClick}
        >
        <Marker
          lat={coords.lat}
          lng={coords.lng}
          draggable={true}
          onDragEnd={this.onDragEnd} />
        <InfoWindow
          lat={coords.lat}
          lng={coords.lng}
          content={'Hello, React :)'}
          onCloseClick={this.onCloseClick} />
        <Circle
          lat={coords.lat}
          lng={coords.lng}
          radius={500}
          onClick={this.onClick} />
      </Gmaps>
    );
  }

};
