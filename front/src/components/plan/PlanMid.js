import React, {useEffect, useState, useRef} from 'react'
import { PlanMidBox } from './Plan.styled'

const PlanMid = (props) => {
  // const PlanMid = (props, {isScrolled} ) => {

  // const choiceIndex = props.choiceIndex;
  const {choiceIndex, isScrolled, gptAnswerSaved, setnearPlace} = props;
  console.log("가장위에 선언됨", choiceIndex);

  let lat, lng;

  const initMap = (props) => {
    // console.log("이값",gptAnswerSaved);
    // console.log("프롭스?", choiceIndex?.length);
    let myLatLng;
    // 선택이 되지 않았을때 실행
    if(props?.choiceIndex?.length == 0){
      
      // async function geocode1(){
      //   return new Promise((resolve, reject)=>{
      //     let geocoder = new window.google.maps.Geocoder();
      //     geocoder.geocode({ 'address': gptAnswerSaved.location }, function (results, status) {
      //       if (status === 'OK') {
      //         let location = results[0].geometry.location;
      //         let geocode_latitude = location.lat();
      //         let geocode_longitude = location.lng();
      //         resolve({lat:geocode_latitude, lng: geocode_longitude});
      //         // console.log('위1도:', geocode_latitude);
      //         // console.log('경1도:', geocode_longitude);
      //       } else {
      //         console.error('지오코딩에 실패했습니다. 상태:', status);
      //       }
      //     });

      //   });

      // }
      // async function geocode2() {
      //   try {
      //     let { lat, lng } = await geocode1();
      //     myLatLng = {
      //       lat: lat,
      //       lng: lng,
      //     };

      //     const map = new window.google.maps.Map(document.getElementById("gmp-map"), {
      //       zoom: 6,
      //       center: myLatLng,
      //       fullscreenControl: false,
      //       zoomControl: true,
      //       streetViewControl: false,
      //     });
      //     // new window.google.maps.Marker({
      //     //   position: myLatLng,
      //     //   map,
      //     //   title: "My location",
      //     // });

      //   } catch (error) {
      //     console.error(error);
      //   }
      // }
      // geocode2();
     
    }
    // 선택이 되었을때 해당 위도 경도 값 가져와서 실행
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
        radius : '2000',
        types : ['tourist_attraction'],
      }
  
      const service = new window.google.maps.places.PlacesService(map);
  
      service.nearbySearch(request, (results, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
          // 평점 이상
          const filterResults = results.filter(place => place.rating >= 4.0);
          let send_latlng = [];
          // let send_lat, send_lng;
          for (const place of filterResults.slice(0,1)) {
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
      let lastIndex =choiceIndex.length -1;
      
      lat = choiceIndex[lastIndex]?.attractionLocation.latitude;
      lng = choiceIndex[lastIndex]?.attractionLocation.longitude;
      // console.log(lat);
      // console.log(lng);

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
