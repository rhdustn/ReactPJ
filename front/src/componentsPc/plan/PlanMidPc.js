import React, { useEffect, useRef, useState } from "react";
import { PlanMidBox } from "./PlanPc.styled";
import { useSelector, useDispatch } from "react-redux";

const PlanMidPc = (props) => {
  // console.log("들어옴", gptAnswerSaved.location);
  const { choiceIndex, isScrolled, gptAnswerSaved, nearPlace, setnearPlace } =
    props;
  let lat, lng;
  if (choiceIndex) {
    lat = choiceIndex.at(-1)?.attractionLocation.latitude;
    lng = choiceIndex.at(-1)?.attractionLocation.longitude;
  }
  let myLatLng;
  useEffect(() => {
    console.log(choiceIndex,'ㅁㄴㅇㅁㅇ');
  }, [choiceIndex]);
  const initMap = (props) => {
    let myLatLng;
    // 선택이 되지 않았을때 실행
    if (props?.choiceIndex?.length == 0) {
      async function geocode1() {
        return new Promise((resolve, reject) => {
          let geocoder = new window.google.maps.Geocoder();
          geocoder.geocode(
            { address: gptAnswerSaved.location },
            function (results, status) {
              if (status === "OK") {
                let location = results[0].geometry.location;
                let geocode_latitude = location.lat();
                let geocode_longitude = location.lng();
                resolve({ lat: geocode_latitude, lng: geocode_longitude });
                // console.log('위1도:', geocode_latitude);
                // console.log('경1도:', geocode_longitude);
              } else {
                console.error("지오코딩에 실패했습니다. 상태:", status);
              }
            }
          );
        });
      }
      async function geocode2() {
        try {
          let { lat, lng } = await geocode1();
          myLatLng = {
            lat: lat,
            lng: lng,
          };
          const map = new window.google.maps.Map(
            document.getElementById("gmp-map"),
            {
              zoom: 6,
              center: myLatLng,
              fullscreenControl: false,
              zoomControl: true,
              streetViewControl: false,
            }
          );
          // new window.google.maps.Marker({
          //   position: myLatLng,
          //   map,
          //   title: "My location",
          // });
        } catch (error) {
          console.error(error);
        }
      }
      geocode2();
    } else {
      myLatLng = {
        lat: Number(lat),
        lng: Number(lng),
      };

      const map = new window.google.maps.Map(
        document.getElementById("gmp-map"),
        {
          zoom: 13,
          center: myLatLng,
          fullscreenControl: false,
          zoomControl: true,
          streetViewControl: false,
        }
      );

      const request = {
        location: myLatLng,
        radius: "500",
        types: ["tourist_attraction"],
      };

      const service = new window.google.maps.places.PlacesService(map);

      service.nearbySearch(request, (results, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
          // 평점 이상
          const filterResults = results.filter((place) => place.rating >= 4.0);
          let send_latlng = [];
          let send_lat, send_lng;
          for (const place of filterResults.slice(0, 3)) {
            // send_lat = place.geometry.location.lat();
            // send_lng = place.geometry.location.lng();
            send_latlng.push(place);
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
  };

  useEffect(() => {
    const googleMapScript = document.createElement("script");
    // googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLEMAP_API_KEY}&libraries=places`;
    googleMapScript.async = true;
    googleMapScript.onload = () => {
      console.log("** 구글 맵 실행됨! **");
      // initMap(props);
    };
    document.head.appendChild(googleMapScript);
  }, [gptAnswerSaved.location, choiceIndex]);

  // const attraction = useSelector(state => state.attractionsWithImg);
  // const [finalAttraction, setFinalAttraction] = useState(null);

  // useEffect(() => {
  //   // console.log("1 :", attraction);
  //   setFinalAttraction(attraction);
  // }, [attraction]);

  // useEffect(() => {
  //   // console.log("2 :", finalAttraction);
  //   // 최종 변경된 attraction 값을 사용하여 원하는 작업 수행
  // }, [finalAttraction]);

  // useEffect(()=>{
  //   const locations = [];
  //   console.log("3 : ", finalAttraction);
  //   if(finalAttraction != null && finalAttraction.length !== 0){
  //     for(let i=0; i<finalAttraction.length; i++){
  //       // console.log("위도: ", finalAttraction[i].attractionLocation.latitude);
  //       // console.log("경도: ", finalAttraction[i].attractionLocation.longitude);
  //       locations.push({ lat: finalAttraction[i].attractionLocation.latitude, lng: finalAttraction[i].attractionLocation.longitude, title: "Location 2" });
  //     }
  //     function initMap2(locations) {
  //       const map = new window.google.maps.Map(document.getElementById("gmp-map"), {
  //         zoom: 10,
  //         center: { lat: Number(locations[0].lat), lng: Number(locations[0].lng) },
  //         fullscreenControl: false,
  //         zoomControl: true,
  //         streetViewControl: false,
  //       });

  //       locations.forEach((location,index) => {
  //         new window.google.maps.Marker({
  //           position: { lat: Number(locations[index].lat), lng: Number(locations[index].lng) },
  //           map,
  //           title: location.title,
  //         });
  //       });
  //     }

  //     initMap2(locations);
  //     // -------------------------------

  //   }
  // }, [finalAttraction]);

  // useEffect(()=>{
  //   const locations = [
  //     { lat: 37.82003874891632, lng: -122.47816927208792, title: "Location 1" }, // 금문교
  //     { lat: 37.7749, lng: -122.4194, title: "Location 2" },
  //     { lat: 37.8057752, lng: -122.4294758, title: "Location 3" }, //피셔맨즈 와프
  //   ];

  //   function initMap2(locations) {
  //     const map = new window.google.maps.Map(document.getElementById("gmp-map"), {
  //       zoom: 12,
  //       center: { lat: 37.82003874891632, lng: -122.47816927208792 },
  //       fullscreenControl: false,
  //       zoomControl: true,
  //       streetViewControl: false,
  //     });

  //     locations.forEach((location) => {
  //       new window.google.maps.Marker({
  //         position: { lat: location.lat, lng: location.lng },
  //         map,
  //         title: location.title,
  //       });
  //     });
  //   }

  //   initMap2(locations);

  // });

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
  // const mapRef = useRef(null);

  // let lat = 40.75079276451464;
  // let lng = -73.98064905864807;

  // useEffect(() => {
  //   function initMap() {
  //     const mapCenter = { lat: lat, lng: lng };

  //     const map = new window.google.maps.Map(mapRef.current, {
  //       center: mapCenter,
  //       zoom: 15,
  //     });

  //     const request = {
  //       location: mapCenter,
  //       radius: '5000',
  //       // 5000 5km 반경 내에서 검색
  //       // 500 500m 반경 내에서 검색
  //       types: ['tourist_attraction'], // 관광지 타입
  //     };

  //     const service = new window.google.maps.places.PlacesService(map);

  //     service.nearbySearch(request, (results, status) => {
  //       if (status === window.google.maps.places.PlacesServiceStatus.OK) {
  //         // 평점 이상
  //         const filterResults = results.filter(place => place.rating >= 4.0);

  //         for (const place of filterResults.slice(0,5)) {
  //           console.log("place : ", place);
  //           // console.log("place.photos : ", place.photos);
  //           // console.log(place.name);
  //           const marker = new window.google.maps.Marker({
  //             position: place.geometry.location,
  //             map: map,
  //             title: place.name,
  //           });
  //         }

  //         // for (const place of results) {
  //         //   console.log("place : ", place);
  //         //   // console.log("place.photos : ", place.photos);
  //         //   // console.log(place.name);
  //         //   const marker = new window.google.maps.Marker({
  //         //     position: place.geometry.location,
  //         //     map: map,
  //         //     title: place.name,
  //         //   });
  //         // }
  //       }
  //     });
  //   }

  //   const googleMapScript = document.createElement('script');
  //   googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=
  //   ${process.env.REACT_APP_GOOGLEMAP_API_KEY}&libraries=places`;
  //   googleMapScript.async = true;
  //   googleMapScript.onload = initMap;
  //   document.head.appendChild(googleMapScript);
  // }, []);

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
        <div id="gmp-map"></div>

        {/* 2번째 */}
        {/* <div id='test1' ref={mapRef}></div> */}

        {/* 3번째 */}
        {/* <div id="container">
          <div id="map"></div>
          <div id="sidebar">
            <p>Total Distance: <span id="total"></span></p>
            <div id="panel"></div>
          </div>
        </div> */}
      </PlanMidBox>
      <br />
    </>
  );
};

export default PlanMidPc;
