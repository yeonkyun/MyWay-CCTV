import React, { useEffect, useState } from 'react';
import { Map, MapTypeId } from 'react-kakao-maps-sdk';

export default function KakaoMap() {
  const [position, setPosition] = useState({ 
    lat: 37.52259468040667,
    lng: 126.98183233121256 
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setPosition({
        lat: position.coords.latitude,
        lng: position.coords.longitude
      });
    }, (error) => {
      console.error(error);
    });
  }, []);
  
  return (
    <Map id = "kakao-map-container" center = {position} style = {{ width: '100%', height: '100vh' }} level = {1}>
      <MapTypeId type = {'TRAFFIC'} />
    </Map>
  );
}