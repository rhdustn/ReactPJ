import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux'

import { BottomNavBox, BottomNavBtn, BottomNavText } from "./NavPc.styled";

const BottomNavPc = () => {
  const home1 = '/imgs/icons/home1.png'
  const home2 = '/imgs/icons/home2.png'
  const plan1 = '/imgs/icons/plan1.png'
  const plan2 = '/imgs/icons/plan2.png'
  const star1 = '/imgs/icons/star1.png'
  const star2 = '/imgs/icons/star2.png'
  const default_profile = '/imgs/profiles/default_profile.jpeg'

  const nav = useNavigate();

  const page = useLocation().pathname;

  const userOrGuest = useSelector((state => {
      return state.userOrGuest;
  }))

  const [icons, setIcon] = useState({
      home : home1,
      plan : plan2,
      star : star2
  })
  const [textCol, setTextCol] = useState({
      home : '#545454',
      plan : '#737373',
      star : '#737373',
      my : '#737373'
  })

  useEffect(() => {
      if(page == '/plan') {
          setIcon({
              home : home2,
              plan : plan1,
              star : star2
          })
          setTextCol({
              home : '#737373',
              plan : '#545454',
              star : '#737373',
              my : '#737373'
          })
      }else if(page == '/board') {
          setIcon({
              home : home2,
              plan : plan2,
              star : star1
          })
          setTextCol({
              home : '#737373',
              plan : '#737373',
              star : '#545454',
              my : '#737373'
          })
      }else if(page == '/mypage') {
          setIcon({
              home : home2,
              plan : plan2,
              star : star2
          })
          setTextCol({
              home : '#737373',
              plan : '#737373',
              star : '#737373',
              my : '#545454'
          })
      }
  }, [])   


  return (
      <>
      <BottomNavBox>
          <BottomNavBtn onClick={() => nav('/')}>
              <img src={icons.home}></img>
              <BottomNavText textCol={textCol.home}>홈</BottomNavText>    
          </BottomNavBtn>
          <BottomNavBtn onClick={() => nav('/plan')}>
              <img src={icons.plan}></img>
              <BottomNavText textCol={textCol.plan}>일정</BottomNavText>
          </BottomNavBtn>
          <BottomNavBtn onClick={() => nav('/board')}>
              <img src={icons.star}></img>
              <BottomNavText textCol={textCol.star}>리뷰</BottomNavText>
          </BottomNavBtn>

          {/* 로그인 된 유저 -> 마이페이지 */}
          {userOrGuest.isLogin &&            
              <BottomNavBtn onClick={() => nav('/mypage')}>
                  <img src={default_profile} className='profile_img'></img>
                  <BottomNavText textCol={textCol.my}>마이페이지</BottomNavText>
              </BottomNavBtn>
          }
          {/* 게스트 -> 로그인 페이지 */}
          {!userOrGuest.isLogin &&
              <BottomNavBtn onClick={() => {nav('/login')}}>
                  <img src={default_profile} className='profile_img'></img>
                  <BottomNavText>로그인</BottomNavText>
              </BottomNavBtn>
          }
      </BottomNavBox>
      </>
  )
}

export default BottomNavPc;
