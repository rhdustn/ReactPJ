import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useQuery } from "react-query";
import axios from "axios";
import { ipUrl } from "../../util/util";
import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useQuery } from "react-query";
import axios from "axios";
import { ipUrl } from "../../util/util";

import { BottomNavBox, BottomNavBtn, BottomNavText } from "./Nav.styled";
import { BottomNavBox, BottomNavBtn, BottomNavText } from "./Nav.styled";

const BottomNav = () => {
  const home1 = "/imgs/icons/home1.png";
  const home2 = "/imgs/icons/home2.png";
  const plan1 = "/imgs/icons/plan1.png";
  const plan2 = "/imgs/icons/plan2.png";
  const star1 = "/imgs/icons/star1.png";
  const star2 = "/imgs/icons/star2.png";
  const default_profile = "/imgs/profiles/default_profile.jpeg";
  const ImgPath = "/imgs/profiles";
  const home1 = "/imgs/icons/home1.png";
  const home2 = "/imgs/icons/home2.png";
  const plan1 = "/imgs/icons/plan1.png";
  const plan2 = "/imgs/icons/plan2.png";
  const star1 = "/imgs/icons/star1.png";
  const star2 = "/imgs/icons/star2.png";
  const default_profile = "/imgs/profiles/default_profile.jpeg";
  const ImgPath = "/imgs/profiles";

  const nav = useNavigate();
  const nav = useNavigate();

  const page = useLocation().pathname;
  const page = useLocation().pathname;

  const userOrGuest = useSelector((state) => {
    return state.userOrGuest;
  });
  const userOrGuest = useSelector((state) => {
    return state.userOrGuest;
  });

  const [profileImg, setProfileImg] = useState("default_profile.jpeg");
  const [profileImg, setProfileImg] = useState("default_profile.jpeg");

  const [icons, setIcon] = useState({
    home: home1,
    plan: plan2,
    star: star2,
  });
  const [textCol, setTextCol] = useState({
    home: "#545454",
    plan: "#737373",
    star: "#737373",
    my: "#737373",
  });
  const [icons, setIcon] = useState({
    home: home1,
    plan: plan2,
    star: star2,
  });
  const [textCol, setTextCol] = useState({
    home: "#545454",
    plan: "#737373",
    star: "#737373",
    my: "#737373",
  });

  useEffect(() => {
    if (page == "/plan") {
      setIcon({
        home: home2,
        plan: plan1,
        star: star2,
      });
      setTextCol({
        home: "#737373",
        plan: "#545454",
        star: "#737373",
        my: "#737373",
      });
    } else if (page == "/board") {
      setIcon({
        home: home2,
        plan: plan2,
        star: star1,
      });
      setTextCol({
        home: "#737373",
        plan: "#737373",
        star: "#545454",
        my: "#737373",
      });
    } else if (page == "/mypage" || page == "/showPlan") {
      setIcon({
        home: home2,
        plan: plan2,
        star: star2,
      });
      setTextCol({
        home: "#737373",
        plan: "#737373",
        star: "#737373",
        my: "#545454",
      });
    }
  }, []);
  useEffect(() => {
    if (page == "/plan") {
      setIcon({
        home: home2,
        plan: plan1,
        star: star2,
      });
      setTextCol({
        home: "#737373",
        plan: "#545454",
        star: "#737373",
        my: "#737373",
      });
    } else if (page == "/board") {
      setIcon({
        home: home2,
        plan: plan2,
        star: star1,
      });
      setTextCol({
        home: "#737373",
        plan: "#737373",
        star: "#545454",
        my: "#737373",
      });
    } else if (page == "/mypage" || page == "/showPlan") {
      setIcon({
        home: home2,
        plan: plan2,
        star: star2,
      });
      setTextCol({
        home: "#737373",
        plan: "#737373",
        star: "#737373",
        my: "#545454",
      });
    }
  }, []);

  // 로그인 유저 정보 가져오기 (profile_img 넣을 예정)
  const tryGetUserInfo = async () => {
    try {
      const response = await ipUrl.get(`/mypage/getInfo`);
      const data = response.data;
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
  // 로그인 유저 정보 가져오기 (profile_img 넣을 예정)
  const tryGetUserInfo = async () => {
    try {
      const response = await ipUrl.get(`/mypage/getInfo`);
      const data = response.data;
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  };

  const { data, isLoading } = useQuery(["getUserNav"], tryGetUserInfo);
  const { data, isLoading } = useQuery(["getUserNav"], tryGetUserInfo);

  useEffect(() => {
    if (data) {
        if (data.profile_img != null) {
            setProfileImg(data.profile_img);
        }
    }
  }, [data])

  return (
    <>
      <BottomNavBox>
        <BottomNavBtn onClick={() => nav("/")}>
          <img src={icons.home}></img>
          <BottomNavText textcol={textCol.home}>홈</BottomNavText>
        </BottomNavBtn>
        <BottomNavBtn onClick={() => nav("/plan")}>
          <img src={icons.plan}></img>
          <BottomNavText textcol={textCol.plan}>일정</BottomNavText>
        </BottomNavBtn>
        <BottomNavBtn onClick={() => nav("/board")}>
          <img src={icons.star}></img>
          <BottomNavText textcol={textCol.star}>리뷰</BottomNavText>
        </BottomNavBtn>
  return (
    <>
      <BottomNavBox>
        <BottomNavBtn onClick={() => nav("/")}>
          <img src={icons.home}></img>
          <BottomNavText textcol={textCol.home}>홈</BottomNavText>
        </BottomNavBtn>
        <BottomNavBtn onClick={() => nav("/plan")}>
          <img src={icons.plan}></img>
          <BottomNavText textcol={textCol.plan}>일정</BottomNavText>
        </BottomNavBtn>
        <BottomNavBtn onClick={() => nav("/board")}>
          <img src={icons.star}></img>
          <BottomNavText textcol={textCol.star}>리뷰</BottomNavText>
        </BottomNavBtn>

        {/* 로그인 된 유저 -> 마이페이지 */}
        {userOrGuest.isLogin && (
          <BottomNavBtn onClick={() => nav("/mypage")}>
            <img src={`${ImgPath}/${profileImg}`} className="profile_img"></img>
            <BottomNavText textcol={textCol.my}>마이페이지</BottomNavText>
          </BottomNavBtn>
        )}
        {/* 게스트 -> 로그인 페이지 */}
        {!userOrGuest.isLogin && (
          <BottomNavBtn
            onClick={() => {
              nav("/login");
            }}
          >
            <img src={default_profile} className="profile_img"></img>
            <BottomNavText>로그인</BottomNavText>
          </BottomNavBtn>
        )}
      </BottomNavBox>
    </>
  );
};
        {/* 로그인 된 유저 -> 마이페이지 */}
        {userOrGuest.isLogin && (
          <BottomNavBtn onClick={() => nav("/mypage")}>
            <img src={`${ImgPath}/${profileImg}`} className="profile_img"></img>
            <BottomNavText textcol={textCol.my}>마이페이지</BottomNavText>
          </BottomNavBtn>
        )}
        {/* 게스트 -> 로그인 페이지 */}
        {!userOrGuest.isLogin && (
          <BottomNavBtn
            onClick={() => {
              nav("/login");
            }}
          >
            <img src={default_profile} className="profile_img"></img>
            <BottomNavText>로그인</BottomNavText>
          </BottomNavBtn>
        )}
      </BottomNavBox>
    </>
  );
};

export default BottomNav;
export default BottomNav;
