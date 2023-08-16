import React, {useEffect, useRef} from 'react'
import { PlanMidBox } from './PlanPc.styled'

const PlanMidPc = () => {
  // 위도, 경도에 따른 위치 마커 찍어주기
  // useEffect(()=>{
  //   // usehook 에서 사용되니까 참조할 객체가 없음
  //   function initMap2() {
  //     const myLatLng = {
  //       lat: 40.12150192260742,
  //       lng: -100.45039367675781
  //     };
  //     const map = new window.google.maps.Map(document.getElementById("gmp-map"), {
  //       zoom: 4,
  //       center: myLatLng,
  //       fullscreenControl: false,
  //       zoomControl: true,
  //       streetViewControl: false
  //     });
  //     new window.google.maps.Marker({
  //       position: myLatLng,
  //       map,
  //       title: "My location"
  //     });
  //   }
  //   initMap2();

  // }, []);



  
  // 위도, 경도 주변 관광지 마커 찍어주기
  const mapRef = useRef(null);

  useEffect(() => {
    function initMap() {
      const mapCenter = { lat: 40.692642188968186, lng: -74.0397641563072 };

      const map = new window.google.maps.Map(mapRef.current, {
        center: mapCenter,
        zoom: 15,
      });

      const request = {
        location: mapCenter,
        radius: '5000', // 5km 반경 내에서 검색
        // 5000 5km
        types: ['tourist_attraction'], // 관광지 타입
      };

      const service = new window.google.maps.places.PlacesService(map);

      service.nearbySearch(request, (results, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
          for (const place of results) {
            console.log("1");
            console.log(place.name);
            // console.log(results);
            const marker = new window.google.maps.Marker({
              position: place.geometry.location,
              map: map,
              title: place.name,
            });
            // console.log("포지션", place.geometry.location);
          }
        }
      });
    }

    const googleMapScript = document.createElement('script');
    googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=
    ${process.env.REACT_APP_BCA}&libraries=places`;
    googleMapScript.async = true;
    googleMapScript.onload = initMap;
    document.head.appendChild(googleMapScript);
  }, []);





  return (
    <>
      <PlanMidBox id='gmp-map-box'>
        {/* <div id='gmp-map'></div> */}

        {/* 2번째 */}
        <div ref={mapRef} style={{ width: '100%', height: '100%' }}></div>
        <div id='test1' ref={mapRef}></div>

        {/* 3번째 */}
        {/* <div id="container">
          <div id="map"></div>
          <div id="sidebar">
            <p>Total Distance: <span id="total"></span></p>
            <div id="panel"></div>
          </div>
        </div> */}

      </PlanMidBox>
      <br/>

    </>
  );
};

export default PlanMidPc;
