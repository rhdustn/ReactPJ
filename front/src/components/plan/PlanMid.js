import React, {useEffect, useState, useRef} from 'react'
import { PlanMidBox } from './Plan.styled'
import { useSelector } from 'react-redux';

// import { saveAttractionsWithImg } from '../../redux/features/dataForGpt';

const PlanMid = (props) => {
  // const PlanMid = (props, {isScrolled} ) => {

  // const choiceIndex = props.choiceIndex;
  const {choiceIndex, isScrolled, gptAnswerSaved, nearPlace, setnearPlace} = props;
  let lat, lng;
  if(choiceIndex){
    console.log("PlanMid.js", choiceIndex[0]?.attractionLocation);
    lat = choiceIndex[0]?.attractionLocation.latitude;
    lng = choiceIndex[0]?.attractionLocation.longitude;
    // console.log(lat);
    // console.log(lng);
  }

  const initMap = (props) => {
    console.log("이값",gptAnswerSaved);
    console.log("프롭스?", choiceIndex?.length);
    let myLatLng;
    if(props?.choiceIndex?.length == 0){
      myLatLng = {
        lat: Number(37.7749),
        lng: Number(-122.4194),
      };

      const map = new window.google.maps.Map(document.getElementById("gmp-map"), {
        zoom: 12,
        center: myLatLng,
        fullscreenControl: false,
        zoomControl: true,
        streetViewControl: false,
      });
      new window.google.maps.Marker({
        position: myLatLng,
        map,
        title: "My location",
      });

    }
    else{
      myLatLng = {
        lat: Number(lat),
        lng: Number(lng),
      };

      const map = new window.google.maps.Map(document.getElementById("gmp-map"), {
        zoom: 13,
        center: myLatLng,
        fullscreenControl: false,
        zoomControl: true,
        streetViewControl: false,
      });
  
      const request = {
        location : myLatLng,
        radius : '500',
        types : ['tourist_attraction'],
      }
  
      const service = new window.google.maps.places.PlacesService(map);
  
      service.nearbySearch(request, (results, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
          // 평점 이상
          const filterResults = results.filter(place => place.rating >= 4.0);
          let send_latlng = [];
          let send_lat, send_lng;
          for (const place of filterResults.slice(0,3)) {
              console.log("place : ", place);
              // console.log("위도:", place.geometry.location.lat());
              // console.log("경도:", place.geometry.location.lng());
              // send_lat = place.geometry.location.lat();
              // send_lng = place.geometry.location.lng();
              send_latlng.push(place);

              // console.log("place.photos : ", place.photos);
              // console.log(place.name);
              const marker = new window.google.maps.Marker({
                position: place.geometry.location,
                map: map,
                title: place.name,
              });
          }
          setnearPlace(send_latlng);
          
        }
      });
    }

    // console.log(document.getElementById("gmp-map"));
  };


  useEffect(() => {
    if(choiceIndex){
      const googleMapScript = document.createElement('script');
      googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLEMAP_API_KEY}&libraries=places`;
      googleMapScript.async = true;
      googleMapScript.onload = () => {
        initMap(props);
      };
      document.head.appendChild(googleMapScript);
    }
  }, [choiceIndex]);


  useEffect(() => {
    const mapBox = document.getElementById("gmp-map-box");

    if(isScrolled) {
      mapBox.style.position = 'fixed'
      mapBox.style.top = '50px'
    }else {
      mapBox.style.position = 'relative'
      mapBox.style.top = '0'
    }
  }, [isScrolled])

  return (
    <>
      <PlanMidBox id='gmp-map-box'>
        <div id="gmp-map"></div>
      </PlanMidBox>
    </>
  )
}

export default PlanMid
