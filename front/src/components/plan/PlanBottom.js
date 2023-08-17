import React, { useEffect, useState } from "react";
import {
  PlanBottomBox,
  PerDayBox,
  PerDayDate,
  PerDayAttraction,
  RouteBox,
  RouteNumber,
  RoutePlace,
  BtnBox,
  SavePlanBtn,
  EditPlanBtn,
} from "./Plan.styled";

import city from "../../img/places/city.jpeg";
import { useNavigate } from "react-router-dom";
import { useQueries } from "react-query";
import axios from "axios";
import { saveAttractionsWithImg } from "../../redux/features/dataForGpt";
import { useDispatch, useSelector } from "react-redux";

// 지도 아래 일정 부분
const PlanBottom = ({ isScrolled, gptAnswerSaved }) => {
  const { location, attractions, startDate, endDate, option1, option2 } =
    gptAnswerSaved;

  // attractions을 반복시키기위해 만든 임시 state
  const [attArrForMap, setAttArrForMap] = useState("");

  // 이미지 url이 포함된 새로운attractions state(redux)
  const attractionsWithImg = useSelector((state) => {
    return state.attractionsWithImg;
  });
  // attractionsWithImg를 저장하는 dispatch
  const attractionsWithImgDispatch = useDispatch();

  // 여기서 부터
  const getAttPic = async (queryKey) => {
    const apiKey = process.env.REACT_APP_PIXABAY_API_KEY;
    var URL =
      "https://pixabay.com/api/?key=" +
      apiKey +
      "&q=" +
      encodeURIComponent(queryKey);

    const getAttPicRes = await axios.get(URL);
    return getAttPicRes.data;
  };

  const getAttPicQuerys = useQueries(
    attractions.map((value) => {
      return {
        queryKey: ["getAttPic", value.name],
        queryFn: () => getAttPic(value.name),
        staleTime: 60 * 60 * 1000,
        onSuccess: (data) => {
          attractionsWithImgDispatch(
            saveAttractionsWithImg({ ...value, img: data })
          );
        },
      };
    })
  );
  // 여기까지 이미지를 api로 받아오는 로직, attractionsWithImg에 기존 attraction값에 img가 추가로 들어감.
  let sd = new Date(startDate);
  let ed = new Date(endDate);

  let periodArr = [];
  let placeArr = [];
  // const [placeArr, setPlaceArr] = useState([[''], [''], ['']]);

  while (sd <= ed) {
    periodArr.push(sd.getMonth() + 1 + "." + sd.getDate());
    sd.setDate(sd.getDate() + 1);

    placeArr.push([]);
  }

  useEffect(() => {
    console.log(placeArr);
  }, []);

  useEffect(() => {
    const bottomBox = document.getElementById("bottom-box");

    if (isScrolled) {
      bottomBox.style.padding = "210px 10px 70px 10px";
    } else {
      bottomBox.style.padding = "10px 10px 70px 10px";
    }
  }, [isScrolled]);

  return (
    <>
      <PlanBottomBox id="bottom-box">
      {attArrForMap.length !== 0 &&
        attArrForMap.length === attractionsWithImg.length ? (
          attArrForMap.map((value, index) => {
            console.log(attractionsWithImg[index], "맵");
            return (
              <PerDay
                key={index}
                period={value}
                index={index + 1}
                place={attractionsWithImg[index]}
                imgSrc={attractionsWithImg[index].img}
              />
            );
          })
        ) : (
          <></>
        )}
        <BtnBox>
          <SavePlanBtn>저장</SavePlanBtn>
        </BtnBox>
      </PlanBottomBox>
    </>
  );
};

// 1일마다 관광지 보여주는 부분
const PerDay = ({ period, index, place, imgSrc }) => {
  const nav = useNavigate();

  // 관광지 검색 & 추가 페이지로 이동
  const moveToAdd = (id) => {
    // 해당 plan의 해당 날짜에 대한 id
    nav(`/addPlace/${id}?day=${id}`);
  };

  return (
    <>
      <PerDayBox>
        {/* 날짜 */}
        <PerDayDate>
          <p>
            <span>day {index}</span>
            {period}
          </p>
        </PerDayDate>

        {/* 관광지 하나 */}
        <PerDayAttraction>
          {place.map((value, index) => {
            return (
              <RouteBox>
                <RouteNumber>
                  <span></span>
                  <div>{index + 1}</div>
                </RouteNumber>
                <RoutePlace>
                  <div>
                    {value}
                    <img src={city}></img>
                  </div>
                </RoutePlace>
              </RouteBox>
            );
          })}
        </PerDayAttraction>

        {/* 장소 편집 버튼 */}
        <BtnBox>
          <EditPlanBtn
            onClick={() => {
              moveToAdd(index);
            }}
          >
            일정 편집
          </EditPlanBtn>
        </BtnBox>
      </PerDayBox>
    </>
  );
};

export default PlanBottom;
