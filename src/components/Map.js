
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = ({ data }) => {
  const mapStyles = {
    height: '50vh',
    width: '100%',
  };

  const defaultCenter = {
    lat: data.lat ,
    lng: data.lng ,
  };
  console.log(data)

  return (
    <LoadScript googleMapsApiKey="AIzaSyAs9WDoZl4lQtUBGo6zhRP1hX-1xtkO-u8">
      <GoogleMap mapContainerStyle={mapStyles} zoom={17} center={defaultCenter}>
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;