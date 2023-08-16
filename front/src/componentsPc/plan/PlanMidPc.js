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

  // 위도, 경도에 따른 시작지와 도착지 사이의 경로 및 시간 설정
  // useEffect(()=>{
  //   let lat_lng = [[40.7614, -73.9776], [40.7851, -73.9683]];
  //   function initMap() {
  //     const map = new window.google.maps.Map(document.getElementById("map"), {
  //       zoom: 4,
  //       // center 안에 있는 위도와 경도는 지도가 초기화될 때 보여지는 초기 중앙 위치를 설정
  //       // center: { lat: 36.5, lng: 127.75 }, 한국
  //       // center: { lat: 37.0902, lng: -95.7129 }, //미국
  //     });
  //     const directionsService = new window.google.maps.DirectionsService();
  //     const directionsRenderer = new window.google.maps.DirectionsRenderer({
  //       draggable: true,
  //       map,
  //       panel: document.getElementById("panel"),
  //     });

  //     directionsRenderer.addListener("directions_changed", () => {
  //       const directions = directionsRenderer.getDirections();

  //       if (directions) {
  //         computeTotalDistance(directions);
  //       }
  //     });

  //     displayRoute(
  //       { lat: lat_lng[0][0], lng: lat_lng[0][1] }, // 시작
  //       { lat: lat_lng[1][0], lng: lat_lng[1][1] }, // 종료
  //       directionsService,
  //       directionsRenderer,
  //     );
  //   }

  //   function displayRoute(origin, destination, service, display) {
  //     service
  //       .route({
  //         origin: origin,
  //         destination: destination,
  //         waypoints: [
  //           // { location: { lat:  40.7236447, lng: -74.0058292 } },

  //           // { location: "Adelaide, SA" },
  //           // { location: "Broken Hill, NSW" },
  //         ],
  //         travelMode: window.google.maps.TravelMode.WALKING,
  //         /*
  //         DRIVING: 자동차로 이동.
  //         WALKING: 보행자로 이동.
  //         BICYCLING: 자전거로 이동.
  //         TRANSIT: 대중교통을 이용하여 이동.
  //         */
  //         avoidTolls: true,
  //       })
  //       .then((result) => {
  //         display.setDirections(result);
  //       })
  //       .catch((e) => {
  //         alert("Could not display directions due to: " + e);
  //       });
  //   }

  //   function computeTotalDistance(result) {
  //     let total = 0;
  //     const myroute = result.routes[0];

  //     if (!myroute) {
  //       return;
  //     }

  //     for (let i = 0; i < myroute.legs.length; i++) {
  //       total += myroute.legs[i].distance.value;
  //     }

  //     total = total / 1000;
  //     document.getElementById("total").innerHTML = total + " km";
  //   }

  //   // const marker = new window.google.maps.Marker({
  //   //   position: { lat: 40.7614, lng: -73.9776 },
  //   //   map: yourMap,
  //   //   icon: {
  //   //     path: window.google.maps.SymbolPath.CIRCLE, // 마커 모양
  //   //     fillColor: 'yellow', // 마커 색상
  //   //     fillOpacity: 1, // 색상 불투명도
  //   //     strokeWeight: 0, // 외곽선 굵기
  //   //     scale: 100 // 크기
  //   //   }
  //   // });

  //   window.initMap = initMap;
  //   initMap();
  // }, []);




  return (
    <>
      <PlanMidBox>
        {/* 1번째 */}
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
