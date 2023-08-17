import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import BottomNav from "../components/nav/BottomNav";
import TopNav from "../components/nav/TopNav";

import PlanTop from "../components/plan/PlanTop";
import PlanMid from "../components/plan/PlanMid";
import PlanBottom from "../components/plan/PlanBottom";
import NoPlan from "../components/plan/NoPlan";

const Plan = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const gptAnswerSaved = useSelector((state) => {
    return state.gptAnswerSave;
  });

  useEffect(() => {
    console.log(gptAnswerSaved);
  }, [gptAnswerSaved]);

  const userChoiceSaved = useSelector((state) => {return state.userChoiceSave})
  useEffect(() => {
      console.log(userChoiceSaved)

      

  }, [userChoiceSaved])

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



  if (gptAnswerSaved.location == "") {
    return (
      <>
        <TopNav />
        <NoPlan />
        <BottomNav page={"plan"} />
      </>
    );
  } else {
    return (
      <>
        <TopNav isScrolled={isScrolled} gptAnswerSaved={gptAnswerSaved} />

        <PlanTop gptAnswerSaved={gptAnswerSaved} />
        <PlanMid isScrolled={isScrolled} />
        <PlanBottom isScrolled={isScrolled} gptAnswerSaved={gptAnswerSaved} userChoiceSaved={userChoiceSaved} />

        <BottomNav page={"plan"} />
      </>
    );
  }
};

export default Plan;
