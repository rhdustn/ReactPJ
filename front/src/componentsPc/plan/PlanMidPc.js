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
      const mapCenter = { lat: 37.538231, lng: 127.125900 };

      const map = new window.google.maps.Map(mapRef.current, {
        center: mapCenter,
        zoom: 15,
      });

      const request = {
        location: mapCenter,
        radius: '500', // 5km 반경 내에서 검색
        // 5000 5km
        types: ['tourist_attraction'], // 관광지 타입
      };

      const service = new window.google.maps.places.PlacesService(map);

      service.nearbySearch(request, (results, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
          for (const place of results) {
            const marker = new window.google.maps.Marker({
              position: place.geometry.location,
              map: map,
              title: place.name,
            });
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
      <PlanMidBox>
        {/* <div id='gmp-map'></div> */}

        {/* <div ref={mapRef} style={{ width: '100%', height: '500px' }}></div> */}
        <div id='test1' ref={mapRef}></div>
      </PlanMidBox>
      <br/>

    </>
  );
};

export default PlanMidPc;
