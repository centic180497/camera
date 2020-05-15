 
import React from 'react';
import { compose, withProps } from 'recompose';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps';
import { withStyles } from '@material-ui/core/styles';

// import markerIcon from './../../../assets/images/marker.png';

const styles = {
  infoWindow: {
    textAlign: 'center',
  },
  pAddress: {
    margin: 0,
  },
};

const MyMapComponent = compose(
  withProps({
    googleMapURL:
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyDb5xOZiLOJAtKJWj4spvQf3UEQvE-3sc4&v=3.exp&libraries=geometry,drawing,places',
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100%` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) => (
  <GoogleMap 
        defaultZoom={props.zoom} 
        defaultCenter={props.location} 
        onClick={() => props.onCloseInfoWindow()}
        options={{
            mapTypeControl: false,
        }}
    >
    {props.greatPlaces
      ? props.greatPlaces.map((marker) => {
          const bindMarker = props.onClick.bind(this, marker);
          return (
            <Marker key={marker.id} position={marker.position} icon={props.icon} onClick={bindMarker}>
              {props.showInfoMarker === marker && (
                <InfoWindow>
                  <div className={props.classes.infoWindow}>
                    <b> {marker.id} </b>
                    <p className={props.classes.pAddress}> {marker.address} </p>
                  </div>
                </InfoWindow>
              )}
            </Marker>
          );
        })
      : null}
  </GoogleMap>
));

class ItemMap extends React.PureComponent {
  state = {
    location: {
      lat: 16.06396,
      lng: 108.213479,
    },
    zoom: 14,
    greatPlaces: [
      { id: ' Camera 1 ', position: { lat: 16.07264, lng: 108.229916 }, address: 'Hòa Khê, Thanh Khê, Đà Nẵng' },
      { id: ' Camera 147 ', position: { lat: 16.061403, lng: 108.234527 }, address: 'Quan 3, Ngu Hanh Son, Đà Nẵng' },
      { id: ' Camera 123 ', position: { lat: 16.04969, lng: 108.222179 }, address: 'Duy Tan, Hai Chau, Đà Nẵng' },
      {
        id: ' Camera 167 ',
        position: { lat: 16.061114, lng: 108.2209 },
        address: 'Nguyen Van Linh, Hai Chau, Đà Nẵng',
      },
    ],
    showInfoMarker: false,
  };

  handelClick = (marker) => {
    this.setState({
      showInfoMarker: marker,
    });
  };

  onCloseInfoWindow = () => {
    this.setState({
      showInfoMarker: false,
    });
  };

  render() {
    const { zoom, location, greatPlaces, showInfoMarker } = this.state;
    const { classes } = this.props;
    return (
      <MyMapComponent
        zoom={zoom}
        location={location}
        // icon={{ url: markerIcon }}
        onClick={this.handelClick}
        onCloseInfoWindow={this.onCloseInfoWindow}
        greatPlaces={greatPlaces}
        showInfoMarker={showInfoMarker}
        classes={classes}
      />
    );
  }
}

export default withStyles(styles)(ItemMap);