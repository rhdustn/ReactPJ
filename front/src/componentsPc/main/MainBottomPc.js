import React, { useEffect, useState } from "react";

import { BigLabel } from "./MainPc.styled";
import {
  MainBottomBox,
  SmallLabel,
  SelectBox,
  Select,
  BtnBox,
  MakePlanBtn,
} from "./MainPc.styled";
import { useDispatch, useSelector } from "react-redux";
// gpt에 대한 reducer
import { insert } from "../../redux/features/dataForGpt";
import { useMutation, useQuery } from "react-query";
import axios from "axios";
import { store } from "../../redux/store/store";
const MainBottomPc = ({ isDated }) => {
  let withArr = [
    "혼자",
    "친구와",
    "연인과",
    "배우자와",
    "아이와",
    "부모님과",
    "반려동물과",
  ];
  let whichArr = [
    "체험·액티비티",
    "SNS 핫플레이스",
    "자연과 함께",
    "유명 관광지는 필수",
    "여유롭게 힐링",
    "문화·예술·역사",
    "여행지 느낌 물씬",
    "쇼핑은 열정적으로",
    "관광보다 먹방",
  ];

  const [backColor, setBack] = useState("#edebeb");
  const [fontColor, setFont] = useState("#9b9a9a");

  const [choiceIndex1, setChoice1] = useState("");
  const [choiceIndex2, setChoice2] = useState("");
  // gpt의 응답
  const [gptAnswer, setGptAnswer] = useState("");
  // 키값으로 가져온 gpt의 대답중 key에 값이 불규칙적이므로 index로 불러오기 위헤 Object.keys(obj); 를 사용하여 key의 인덱스를 저장할거임
  // const [ansKey, setAnsKey] = useState("");
  //   gpt에게 보낼 일련의 데이터
  const gptDispatch = useDispatch();
  const gptData = useSelector((state) => {
    return state.gptSlice;
  });

  // post로 gptData를 서버로 보내는 함수
  const sendDataToGpt = async () => {
    axios
      .post("http://localhost:8080/openAI", { gptData })
      .then((res) => {
        // gpt응답 여기서 state에 저장
        const data = JSON.parse(res.data.content);
        setGptAnswer(data);
        // const keys = Object.keys(data);
        // setAnsKey(keys);
        console.log(JSON.parse(res.data.content));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // useMutation으로 비동기적 처리
  const gptQuery = useMutation(sendDataToGpt);

  const [choiceAll, setAll] = useState(false);
  // 스크롤 내려오는 함수
  const goToTagScroll = () => {
    const ele = document.querySelector("#mainBottomBoxPc");
    if (ele) {
      ele.scrollIntoView({ behavior: "smooth" });
    }
  };

  // 누구와
  const isChoice1 = (index) => {
    if (choiceIndex1.indexOf(index) !== -1) {
      let arr = choiceIndex1.filter((value) => value !== index);
      let dataArr = gptData.choiceDataWho.filter((value) => {
        return value !== withArr[index];
      });
      setChoice1(arr);
      gptDispatch(insert({ ...gptData, choiceDataWho: dataArr }));
    } else {
      if (choiceIndex1 == "") {
        setChoice1([index]);
        gptDispatch(insert({ ...gptData, choiceDataWho: [withArr[index]] }));
      } else {
        setChoice1([...choiceIndex1, index]);
        gptDispatch(
          insert({
            ...gptData,
            choiceDataWho: [...gptData["choiceDataWho"], withArr[index]],
          })
        );
      }
    }
  };
  // 여행 스타일
  const isChoice2 = (index) => {
    if (choiceIndex2.indexOf(index) !== -1) {
      let arr = choiceIndex2.filter((value) => value !== index);
      let dataArr = gptData.choiceDataHow.filter((value) => {
        return value !== whichArr[index];
      });
      setChoice2(arr);

      gptDispatch(insert({ ...gptData, choiceDataHow: dataArr }));
    } else {
      if (choiceIndex2 == "") {
        setChoice2([index]);
        gptDispatch(insert({ ...gptData, choiceDataHow: [whichArr[index]] }));
      } else {
        setChoice2([...choiceIndex2, index]);
        gptDispatch(
          insert({
            ...gptData,
            choiceDataHow: [...gptData["choiceDataHow"], whichArr[index]],
          })
        );
      }
    }
  };


  useEffect(() => {
    console.log("누구와 : ", choiceIndex1);
    console.log("여행스타일 : ", choiceIndex2);
    console.log("gpt데이터:", gptData);

    if (choiceIndex1.length > 0 && choiceIndex2.length > 0) {
      setAll(true);
    } else {
      setAll(false);
    }
  }, [choiceIndex1, choiceIndex2]);

  //   스크롤이 내려가는 함수를 useEffect로 감지 및 실행 zerohoney
  useEffect(() => {
    if (isDated) {
      goToTagScroll();
    }
  }, [isDated]);

  return (
    <>
      {gptAnswer !== "" ? (
        <>
          <h1>{gptAnswer.location}에 대한 추천 관광지 리스트 입니다</h1>
        </>
      ) : (
        <></>
      )}
      {gptAnswer !== "" ? (
        gptAnswer.attractions.map((value) => {
          return (
            <ul>
              <li>{value.name}</li>
              <li>{value.detail}</li>
              <ul>
                
              <li>위도:{value.attractionLocation.latitude}</li>
              <li>경도:{value.attractionLocation.longitude}</li>

              </ul>
            </ul>
          );
        })
      ) : (
        <></>
      )}

      <MainBottomBox id="mainBottomBoxPc">
        <BigLabel>어떤 스타일의 여행을 할 계획인가요?</BigLabel>
        <SmallLabel>누구와</SmallLabel>
        <SelectBox>
          {withArr.map((value, index) => {
            if (choiceIndex1.indexOf(index) == -1) {
              return (
                <Select
                  onClick={() => isChoice1(index)}
                  key={index}
                  back={backColor}
                  font={fontColor}
                >
                  {value}
                </Select>
              );
            } else {
              return (
                <Select
                  onClick={() => isChoice1(index)}
                  key={index}
                  back={"#277bc0"}
                  font={"white"}
                >
                  {value}
                </Select>
              );
            }
          })}
        </SelectBox>
        <SmallLabel>여행 스타일</SmallLabel>
        <SelectBox>
          {whichArr.map((value, index) => {
            if (choiceIndex2.indexOf(index) == -1) {
              return (
                <Select
                  onClick={() => {
                    isChoice2(index);
                  }}
                  key={index}
                  back={backColor}
                  font={fontColor}
                >
                  {value}
                </Select>
              );
            } else {
              return (
                <Select
                  onClick={() => {
                    isChoice2(index);
                  }}
                  key={index}
                  back={"#277bc0"}
                  font={"white"}
                >
                  {value}
                </Select>
              );
            }
          })}
        </SelectBox>

        {choiceAll && (
          <BtnBox>
            <MakePlanBtn
              onClick={() => {
                // 마지막 날짜 변경후 버튼 클릭시 실행
                gptQuery.mutate(gptData);
              }}
            >
              완료
            </MakePlanBtn>
          </BtnBox>
        )}
      </MainBottomBox>
    </>
  );
};

export default MainBottomPc;
