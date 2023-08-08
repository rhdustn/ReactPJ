import React from 'react'
import { PlanInfoBox, TopNavBox, TopNavBtn, PlanInfoTitle, PlantInfoDate } from './NavPc.styled'

import back from '../../img/icons/back.png'

const TopNavPc = () => {

  return (
    <>
      <TopNavBox>
        <TopNavBtn><img src={back}></img></TopNavBtn>
        {/* 스크롤 내려가면 뜰 부분 */}
        <PlanInfoBox>
            <PlanInfoTitle>후쿠오카 여행</PlanInfoTitle>
            <PlantInfoDate>2023.08.28 ~ 2023.08.31</PlantInfoDate>
        </PlanInfoBox>
      </TopNavBox>
    </>
  )
}

export default TopNavPc
