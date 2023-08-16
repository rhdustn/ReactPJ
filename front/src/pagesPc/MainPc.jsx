import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import "animate.css";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import BottomNavPc from "../componentsPc/nav/BottomNavPc";
import { insert, reset } from "../redux/features/dataForGpt";

import MainTopPc from "../componentsPc/main/MainTopPc";
import MainMidPc from "../componentsPc/main/MainMidPc";
import MainBottomPc from "../componentsPc/main/MainBottomPc";
import { useDispatch, useSelector } from "react-redux";
// fadeIn
const FadeInAni = keyframes`
    from {
        opacity: 0;
    }to {
        opacity: 1;
    }
`;
const FadeInMainMid = styled(MainMidPc)`
  animation: ${FadeInAni} 15s ease-in-out;
`;

const Main = () => {
  const dispatch = useDispatch();
  const gptData = useSelector((state) => {
    return state.gptSlice;
  });

  // gpt에 요청할 content
  const [content, setContent] = useState({
    location: "",
    startDate: "",
    endDate: "",
    option1: "",
    option2: "",
  });

  // 지역 검색
  const [isSearched, setSearch] = useState(false);
  // 날짜 입력
  const [isDated, setDate] = useState(false);
  // 옵션 선택
  const [isChoiced, setChoice] = useState(false);

  // 지역 검색
  const locationSearched = (lo) => {
    if (lo == undefined) {
      return;
    } else {
      // 지역이 제대로 검색 되었을 시 (올바른 지역명인지 한 번 확인?)
      setSearch(true);
      setContent({
        ...content,
        location: lo,
      });
    }
  };
  // 날짜 입력
  const dateSelected = (sd, ed) => {
    setDate(true);
    setContent({
      ...content,
      startDate: sd,
      endDate: ed,
    });
  };
  // 옵션 선택
  const choiceSelected = (choiceIndex1, choiceIndex2) => {
    setChoice(true);
    setContent({
      ...content,
      option1: choiceIndex1,
      option2: choiceIndex2,
    });
  };

  // 다
  useEffect(() => {
    // dispatch 전송
    if (isChoiced) {
      dispatch(
        insert({
          ...gptData,
          location: content.location,
          date: `${content.startDate}~${content.endDate}`,
          choiceDataWho: content.option1,
          choiceDataHow: content.option2,
        })
      );
    }
  }, [content]);

  useEffect(() => {
    dispatch(reset());
  }, []);

  return (
    <>
      <MainTopPc locationSearched={locationSearched} />
      {isSearched && (
        <MainMidPc dateSelected={dateSelected} isSearched={isSearched} />
      )}

      {isDated && (
        // <QueryClientProvider client={queryClient}  contextSharing={true}>
        <MainBottomPc page={"main"} isDated={isDated} choiceSelected={choiceSelected} startDate={content.startDate} endDate={content.endDate}  />
        // </QueryClientProvider>
      )}

      <BottomNavPc />
    </>
  );
};

export default Main;
