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
import axios from "axios";
import { useQueries } from "react-query";
import { pushPlan } from "../../redux/features/selectedUserPlan";
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

  useEffect(() => {
    //  attractions state를 jsx에 쓰기 위하여 만든 임시 배열AttArrForMap에 0을 저장하는 로직
    // 이미지를 저장하는 로직
    let temp = [];
    attractions.forEach((value, index) => {
      temp.push(0);
    });
    setAttArrForMap(temp);
  }, [attractions]);

  // 여기까지 이미지를 api로 받아오는 로직, attractionsWithImg에 기존 attraction값에 img가 추가로 들어감.

  useEffect(() => {
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
              period={periodArr[index]}
              index={index + 1}
              place={planPerDay[index + 1].plan}
              attractionsWithImg={attractionsWithImg}
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
const PerDay = ({ period, index, place, attractionsWithImg }) => {
  const [dayPlanArr, setDayPlanArr] = useState([]);
  const noImage = "../../img/icons/no-image.png";
  const nav = useNavigate();
  const city = "/imgs/places/city.jpeg";
  // 관광지 검색 & 추가 페이지로 이동
  const moveToAdd = (id) => {
    // 해당 plan의 해당 날짜에 대한 id
    nav(`/addPlace/${id}?day=${id}`);
  };
  // 유저가 선택한 plan을 가져오는 selector
  const selectedUserPlan = useSelector((state) => {
    return state.selectedUserPlan;
  });

  // 해당하는 날짜를 찾고  그 plan을dayPlanArr에 저장하는 함수
  useEffect(() => {
    const temp = selectedUserPlan.filter((el) => {
      console.log(el.day);
      console.log(index);
      return parseInt(el.day) === parseInt(index);
    });
    console.log(temp);
    setDayPlanArr(temp);
  }, [selectedUserPlan]);

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
        {dayPlanArr.length !== 0 &&
          dayPlanArr[0].plan.map((value, index) => {
            return (
              <PerDayAttraction>
                <RouteBox>
                  <RouteNumber>
                    <span></span>
                    <div>{index + 1}</div>
                  </RouteNumber>
                  <RoutePlace>
                    <div className="place-box">
                      <p>{value.name}</p>
                      <div className="img-box">
                        <img src={value.img} alt="관광이미지" />
                      </div>
                    </div>
                  </RoutePlace>
                </RouteBox>
              </PerDayAttraction>
            );
          })}

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
