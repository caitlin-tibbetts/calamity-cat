import React, { Component } from 'react';
import './App.css';
// import Input from './components/input';
import cat from './cat.svg';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

class App extends Component {

  handle (event) 
  {
    this.setState({
        data:event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={cat} className="App-logo" alt="logo" />
          <h1>
            welcome to calamity cat
          </h1>
          <input className="text-input" type="text" onChange={ this.handle.bind(this)}/>
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
