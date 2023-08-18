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


import { useNavigate } from "react-router-dom";
import { saveAttractionsWithImg } from "../../redux/features/dataForGpt";
import { useDispatch, useSelector } from "react-redux";
import { Loading2 } from "../../componentsPc/loading/LoadingPc";
import axios from "axios";
import { useQueries } from "react-query";
// 지도 아래 일정 부분
const PlanBottom = ({ isScrolled, gptAnswerSaved, userChoiceSaved }) => {
  const { location, attractions, startDate, endDate, option1, option2 } =
    gptAnswerSaved;

  // attractions을 반복시키기위해 만든 임시 state
  const [attArrForMap, setAttArrForMap] = useState("");

  // period
  const [periodArr, setPeriodArr] = useState([]);
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

  useEffect(() => {
    // 기간인 period를 저장하는 로직
    let temp = [];
    let sd = new Date(startDate);
    let ed = new Date(endDate);

    while (sd <= ed) {
      temp.push(sd.getMonth() + 1 + "." + sd.getDate());
      sd.setDate(sd.getDate() + 1);
    }
    setPeriodArr(temp);
  }, [attractions]);

  const { planPerDay } = userChoiceSaved;
  useEffect(() => {
    console.log(planPerDay);
  }, [planPerDay]);

  // 스크롤 일정 이상 넘어가면
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
        {periodArr.map((value, index) => {
          return (
            <PerDay
              key={index}
              period={value}
              index={index + 1}
              place={planPerDay[index + 1].plan}
            />
          );
        })}
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
  const city= '/imgs/places/city.jpeg'

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
                    <p>{value}</p>
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
