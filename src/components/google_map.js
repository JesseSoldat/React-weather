import React from 'react';
import { withGoogleMap, GoogleMap } from "react-google-maps";

export default (props) => {
  let lat = props.lat;
  let lng = props.lon;

  const GettingStartedGoogleMap = withGoogleMap(props => (
    <GoogleMap
      defaultZoom={12}
      defaultCenter={{ lat: lat, lng: lng }}
    >
    </GoogleMap>
  ));

  return (
    <div style={{ height: `100%` }}>
      <GettingStartedGoogleMap
        containerElement={
          <div style={{ height: `100%` }} />
        }
        mapElement={
          <div style={{ height: `100%` }} />
        }
      />
    </div>
  );
}