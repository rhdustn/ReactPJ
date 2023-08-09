import React, { useState } from "react";
import BottomNavPc from "../componentsPc/nav/BottomNavPc";
import PlanTopPc from "../componentsPc/plan/PlanTopPc";
import TopNavPc from "../componentsPc/nav/TopNavPc";
import PlanMidPc from "../componentsPc/plan/PlanMidPc";
import PlanBottomPc from "../componentsPc/plan/PlanBottomPc";

const Plan = () => {
  const [dayNum, setDayNum] = useState();

  // 지도 받아오기
  const getMap = () => {};

  return (
    <>
     
        <TopNavPc />

        <PlanTopPc />

        <PlanBottomPc />
        <PlanMidPc />

        <BottomNavPc page={"plan"} />
    </>
  );
};

export default Plan;
