import React from 'react'
import { PlanInfoBox, TopNavBox, TopNavBtn, PlanInfoTitle, PlantInfoDate } from './Nav.styled'

import back from '../../img/icons/back.png'
import { useNavigate } from 'react-router-dom'

const TopNav = ({isScrolled}) => {
  const nav = useNavigate();

  const moveToBack = () => {
    console.log('moveToBack 실행')
    // 일정 페이지에서 누르면 마이페이지로 넘어가기
    // AddPlace, EditPlace에서 누르면 일정 페이지로 넘어가기
  }

  return (
    <>
      <TopNavBox>
        <TopNavBtn onClick={moveToBack}><img src={back}></img></TopNavBtn>
        {isScrolled &&        
        <PlanInfoBox>
            <PlanInfoTitle>후쿠오카 여행</PlanInfoTitle>
            <PlantInfoDate>2023.08.28 ~ 2023.08.31</PlantInfoDate>
        </PlanInfoBox>
        }
      </TopNavBox>
    </>
  )
}

export default TopNav
