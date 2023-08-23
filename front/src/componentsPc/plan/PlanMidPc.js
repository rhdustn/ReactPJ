import React, { useCallback, useEffect, useRef, useState } from "react";
import { PlanMidBox } from "./PlanPc.styled";
import { useSelector, useDispatch } from "react-redux";

const PlanMidPc = (props) => {
  // console.log("들어옴", gptAnswerSaved.location);
  const {
    choiceIndex,
    isScrolled,
    gptAnswerSaved,
    nearPlace,
    setnearPlace,
    page,
    selectedPlanIndex,
  } = props;
  let lat, lng;
  if (choiceIndex) {
    lat = choiceIndex.at(-1)?.attractionLocation.latitude;
    lng = choiceIndex.at(-1)?.attractionLocation.longitude;
  }
  const selectedUserPlan = useSelector((state) => {
    return state.selectedUserPlan;
  });
  let map;
  const initMap = useCallback(
    (props) => {
      // 플랜 페이지, 일정편집 페이지 두 곳에서 구글맵을 보여줘야 하므로 나누었다. add는 일정편집, plan은 플랜 페이지이며 그곳에서 실행될 init함수를 정의
      if (page === "add") {
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
              map = new window.google.maps.Map(
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

          map = new window.google.maps.Map(document.getElementById("gmp-map"), {
            zoom: 13,
            center: myLatLng,
            fullscreenControl: false,
            zoomControl: true,
            streetViewControl: false,
          });

          const request = {
            location: myLatLng,
            radius: "500",
            types: ["tourist_attraction"],
          };

          const service = new window.google.maps.places.PlacesService(map);

          service.nearbySearch(request, (results, status) => {
            if (status === window.google.maps.places.PlacesServiceStatus.OK) {
              // 평점 이상
              const filterResults = results.filter(
                (place) => place.rating >= 4.0
              );
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
      } else {
        console.log(selectedUserPlan);
        if (selectedUserPlan.length !== 0) {
          const { plan } = selectedUserPlan[selectedPlanIndex];
          console.log(plan);
          map = new window.google.maps.Map(document.getElementById("gmp-map"), {
            center: {
              lat: Number(plan[0].attractionLocation.latitude),
              lng: Number(plan[0].attractionLocation.longitude),
            },
            zoom: 15,
          });

          // 각 마커 생성 및 지도에 추가
          plan.forEach((value) => {
            console.log(value);
            new window.google.maps.Marker({
              position: {
                lat: Number(value.attractionLocation.latitude),
                lng: Number(value.attractionLocation.longitude),
              },
              map: map,
              title: "Marker",
            });
          });
        }
      }
    },
    [gptAnswerSaved.location, choiceIndex, selectedPlanIndex]
  );

  useEffect(() => {
    console.log("** 구글 맵 실행됨! **");

    const googleMapScript = document.createElement("script");
    googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLEMAP_API_KEY}&libraries=places`;
    googleMapScript.async = true;
    googleMapScript.onload = () => {
      initMap(props);
    };
    document.head.appendChild(googleMapScript);
  }, [gptAnswerSaved.location, choiceIndex, selectedPlanIndex]);

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
