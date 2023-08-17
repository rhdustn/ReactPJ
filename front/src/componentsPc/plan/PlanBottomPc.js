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
} from "./PlanPc.styled";

import city from "../../img/places/city.jpeg";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useQueries, useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { saveAttractionsWithImg } from "../../redux/features/dataForGpt";

// 지도 아래 일정 부분
const PlanBottomPc = ({ isScrolled, gptAnswerSaved }) => {
  // 일정 며칠인지
  const { location, attractions, startDate, endDate, option1, option2 } =
    gptAnswerSaved;
    // 오사카, // gpt가 뽑아낸 추천지역

    // console.log("attractions.length : ", attractions.length);
    // for(let i=0; i<3; i++){
    //   console.log("3번" + JSON.stringify(attractions[i].attractionLocation) );
    // }


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

  let periodArr = [];
  let sd = new Date(startDate);
  let ed = new Date(endDate);
  while (sd <= ed) {
    periodArr.push(sd.getMonth() + 1 + "." + sd.getDate());
    sd.setDate(sd.getDate() + 1);
  }

  useEffect(() => {
    //  attractions state를 jsx에 쓰기 위하여 만든 임시 배열AttArrForMap에 0을 저장하는 로직
    // 이미지를 저장하는 로직
    let temp = [];
    attractions.forEach((value, index) => {
      temp.push(0);
    });
    setAttArrForMap(temp);
  }, [attractions]);

// useEffect(()=>{
//   console.log(attractionsWithImg,'리덕스')
// },[attractionsWithImg])

  return (
    <>
      <PlanBottomBox id="bottom-box">
        {attArrForMap.length !== 0 &&
        attArrForMap.length === attractionsWithImg.length ? (
          attArrForMap.map((value, index) => {
            // console.log(attractionsWithImg[index], "맵");
            // console.log("위도, 경도", attractionsWithImg[index].attractionLocation);
            return (
              <PerDayPc
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
const PerDayPc = ({ period, index, place, imgSrc }) => {
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
          {/* {place ?? */}
          {/* place.map((value, index) => { */}
          {/* return ( */}
          <RouteBox>
            <RouteNumber>
              <span></span>
              <div>{index + 1}</div>
            </RouteNumber>
            <RoutePlace>
              <div>
                {place.name}
                {/* 이미지가 없을 경우hits의 배열이 0이되어 largeImageURL를 찾지 못하는 버그가 발생 */}
                {imgSrc && imgSrc.hits.length !== 0 ? (
                  <img src={imgSrc?.hits?.[0].largeImageURL}></img>
                ) : (
                  <></>
                )}
              </div>
            </RoutePlace>
          </RouteBox>
          {/* ); */}
          {/* })} */}
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

export default PlanBottomPc;
