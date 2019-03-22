import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { load_google_maps } from './utils';
class Map extends Component {
      componentDidMount() {
        load_google_maps()
        .then(google => {
        // do stuff
        const uluru = {lat: -25.363, lng: 131.044};
      const map = new google.maps.Map(document.getElementById('root'), {
        zoom: 4,
        center: uluru
      });
      const marker = new google.maps.Marker({
        position: uluru,
        map: map
      });
      })
      // or if you want to load multiple things using Promise.all
        let googleMapsPromise = load_google_maps();
        let APIdata = fetch('some-data.json')
        Promise.all([ googleMapsPromise, APIdata ])
        .then(values => {
        let google = values[0];
        let data = values[1];
        // do stuff
      })
      .catch(error => {
        console.log(error);
      })
    }
      render() {
          const { spot } = this.props
          return (
              <div className="list-items">
                  <div className="venue-photo">Photo goes here</div>
                  {`${spot.location ? spot.location.formattedAddress[0] : `Address: Not found address`}
                  ${spot.location ? spot.location.formattedAddress[1] : ``}`}
                  <p>Rating: {spot.rating ? spot.rating : `rating : Unpublished rating`}</p>
              </div>
          )
      }
  }
  export default Map
