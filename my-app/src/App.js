import React, { Component } from 'react';
import './App.css';
import Input from './Input';
import cat from './cat.svg';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

class App extends Component {

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
          <Input />
          <button className="button">
            GENERATE
          </button>
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

export default GoogleApiWrapper({
  apiKey: ("AIzaSyD0YGgL8ceGfhi-im1fDopabKgLuL99mls")
})(App)
