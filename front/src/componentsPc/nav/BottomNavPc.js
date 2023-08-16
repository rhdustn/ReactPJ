import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { BottomNavBox, BottomNavBtn } from "./NavPc.styled";

import home1 from "../../img/icons/home1.png";
import home2 from "../../img/icons/home2.png";
import plan1 from "../../img/icons/plan1.png";
import plan2 from "../../img/icons/plan2.png";
import star1 from "../../img/icons/star1.png";
import star2 from "../../img/icons/star2.png";

const BottomNavPc = () => {
  const nav = useNavigate();

  const page = useLocation().pathname;
  const [selected, setSelect] = useState(2);

  const [icons, setIcon] = useState({
    home: home1,
    plan: plan2,
    star: star2,
  });

  useEffect(() => {
    if (page == "/plan") {
      setIcon({
        home: home2,
        plan: plan1,
        star: star2,
      });
    } else if (page == "/board") {
      setIcon({
        home: home2,
        plan: plan2,
        star: star1,
      });
    }
  }, []);
  const moveTo = (num) => {};

  return (
    <>
      <BottomNavBox>
        <BottomNavBtn onClick={() => nav("/")}>
          <img src={icons.home}></img>
          <p>홈</p>
        </BottomNavBtn>
        <BottomNavBtn onClick={() => nav("/plan")}>
          <img src={icons.plan}></img>
          <p>일정</p>
        </BottomNavBtn>
        <BottomNavBtn onClick={() => nav("/board")}>
          <img src={icons.star}></img>
          <p>리뷰</p>
        </BottomNavBtn>
        <BottomNavBtn onClick={() => nav("/mypage")}>
          <img src={home2} className="profile_img"></img>
          <p>마이페이지</p>
        </BottomNavBtn>
      </BottomNavBox>
    </>
  );
};

export default BottomNavPc;
