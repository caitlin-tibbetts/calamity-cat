import React, { Component } from 'react';
import './App.css';
import cat from './cat.svg';
import Geocode from "react-geocode";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

Geocode.setApiKey("[API_KEY_HERE]");

var lat = 0;
var lng = 0;

class App extends Component {
  constructor(props) {
    super (props);
    this.state = {
      lat: 0, lng: 0
    }
  }

  updateCoordinates = (lat, lng) => {
    this.state.lat = lat;
    this.state.lng = lng;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            welcome to calamity cat
          </h1>
          <img src={cat} className="App-logo" alt="logo" />
          <h2 className="App-subheader">
            avoid cat-tastrophe
          </h2>
          <AddressForm triggerParentUpdate={this.updateCoordinates}/>
        </header>

        <Map google={this.props.google} zoom={14}>

          <Marker className="map" onClick={this.onMarkerClick}
            name={'Current location'} />

          <InfoWindow onClose={this.onInfoWindowClose}>

          </InfoWindow>
        </Map>
      </div>
    );
  }
}

class AddressForm extends Component {
  constructor(props) {
    super(props);
    this.state = {address: '', lat: 0, lng: 0};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({address: event.target.value});
  }

  handleSubmit(event) {
    Geocode.fromAddress(this.state.address).then(
      response => {
        const { lat, lng } = response.results[0].geometry.location;
        this.setState({lat: lat, lng: lng});
        this.props.triggerParentUpdate(this.state.lat, this.state.lng);
      },
      error => {
        console.error(error);
      }
    )
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <input type="text" value={this.state.value} placeholder="Where is...?" onChange={this.handleChange} />
        </label>
        <input type="submit" value="Go!"/>
      </form>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ("[API_KEY_HERE]")
})(App)
