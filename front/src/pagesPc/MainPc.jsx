import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import "animate.css";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import BottomNavPc from "../componentsPc/nav/BottomNavPc";

import MainTopPc from "../componentsPc/main/MainTopPc";
import MainMidPc from "../componentsPc/main/MainMidPc";
import MainBottomPc from "../componentsPc/main/MainBottomPc";
import { useDispatch, useSelector } from "react-redux";
import { insert } from "../redux/features/dataForGpt";
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
  const [isSearched, setSearch] = useState(false);
  const [isDated, setDate] = useState(false);
  // QueryClient 인스턴스 생성
  // const queryClient = new QueryClient();
  //   gpt리덕스 관리 변수
  const gptData = useSelector((state) => {
    return state.gptSlice;
  });
  const gptDispatch = useDispatch();

  const locationSearched = (location) => {
    console.log(location);

    if (location == undefined) {
      return;
    } else {
      // 지역이 제대로 검색 되었을 시
      setSearch(true);
      gptDispatch(insert({ ...gptData, location: location }));
    }
  };

  const dateSelected = (startDate, endDate) => {
    console.log(startDate, endDate);
    setDate(true);
  };

  return (
    <>
      <MainTopPc locationSearched={locationSearched} />
      {isSearched && (
        <MainMidPc dateSelected={dateSelected} isSearched={isSearched} />
      )}

      {isDated && (
        // <QueryClientProvider client={queryClient}  contextSharing={true}>
          <MainBottomPc page={"main"} isDated={isDated} />
        // </QueryClientProvider>
      )}

      <BottomNavPc />
    </>
  );
};

export default Main;
