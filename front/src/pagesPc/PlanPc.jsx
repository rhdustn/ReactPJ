import React, { useEffect, useState } from "react";
import BottomNavPc from "../componentsPc/nav/BottomNavPc";
import PlanTopPc from "../componentsPc/plan/PlanTopPc";
import TopNavPc from "../componentsPc/nav/TopNavPc";
import PlanMidPc from "../componentsPc/plan/PlanMidPc";
import PlanBottomPc from "../componentsPc/plan/PlanBottomPc";
import NoPlanPc from "../componentsPc/plan/NoPlanPc";
import { useSelector } from "react-redux";
const PlanPc = () => {
  const [dayNum, setDayNum] = useState();
  const [isScrolled, setIsScrolled] = useState(false);

  const gptAnswerSaved = useSelector((state) => {
    return state.gptAnswerSave;
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollThreshold = 101;

      if (scrollY > scrollThreshold) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);



  // 유저의 선택된 여행정보 가져오기
  const userChoiceSaved = useSelector((state) => {
    return state.userChoiceSave;
  });

  // 지도 받아오기
  const getMap = () => {};

  if (gptAnswerSaved.location === "") {
    return (
      <>
        <TopNavPc />

        <NoPlanPc />

        <BottomNavPc page={"plan"} />
      </>
    );
  }
  return (
    <>
      <TopNavPc gptAnswerSaved={gptAnswerSaved} />

      {/* LA 여행 날짜 */}
      <PlanTopPc gptAnswerSaved={gptAnswerSaved} />
      
      {/* 지도 */}
      <PlanMidPc gptAnswerSaved={gptAnswerSaved} />

      {/* day 1 ~ 저장 */}
      <PlanBottomPc gptAnswerSaved={gptAnswerSaved} userChoiceSaved={userChoiceSaved}/>

      <BottomNavPc />
    </>
  );
};

export default PlanPc;
