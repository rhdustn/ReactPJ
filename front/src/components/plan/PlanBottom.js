import React, { useEffect, useState } from "react";
import { useQueries } from 'react-query'
import axios from 'axios'

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
import { useDispatch } from "react-redux";
import { save2 } from "../../redux/features/dataForGpt";

// 지도 아래 일정 부분
const PlanBottom = ({ isScrolled, gptAnswerSaved, userChoiceSaved }) => {
    const { location, attractions, startDate, endDate, option1, option2 } =
    gptAnswerSaved;

    // 이미지 가져오기
    const [attArrForMap, setAttArrForMap] = useState("");
    const [attractionsWithImg, setAttractionsWithImg] = useState([]);

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
            setAttractionsWithImg((state) => {
              return [...state, { ...value, img: data }];
            });
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
    
    useEffect(() => {
      console.log(attArrForMap)
      console.log(attractionsWithImg)
    }, [attractionsWithImg])


    // 월.일 만 뽑아내기
    let sd = new Date(startDate);
    let ed = new Date(endDate);

    let periodArr = [];
    while (sd <= ed) {
        periodArr.push((sd.getMonth() + 1) + '.' + sd.getDate());
        sd.setDate(sd.getDate() + 1);
    }

    const { planPerDay } = userChoiceSaved;
    useEffect(() => {
      console.log(planPerDay)
    }, [planPerDay])


    // 스크롤 일정 이상 넘어가면
    useEffect(() => {
        const bottomBox = document.getElementById("bottom-box");
    
        if(isScrolled) {
            bottomBox.style.padding = '210px 10px 70px 10px'
        }else {
            bottomBox.style.padding = '10px 10px 70px 10px'
        }
    }, [isScrolled])
      

    return (
        <>
        <PlanBottomBox id='bottom-box'>
            {periodArr.map((value, index) => {
                return <PerDay key={index} period={value} index={index+1} place={planPerDay[index+1].plan} />
            })}
            <BtnBox>
                <SavePlanBtn>저장</SavePlanBtn>
            </BtnBox>
        </PlanBottomBox>
        </>
    )
}

// 1일마다 관광지 보여주는 부분
const PerDay = ({ period, index, place }) => {
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
                    <p>{value.name}</p>
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
