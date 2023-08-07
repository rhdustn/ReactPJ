import React, { useState } from 'react'
import BottomNav from '../components/nav/BottomNav'
import PlanTop from '../components/plan/PlanTop'
import TopNav from '../components/nav/TopNav'
import PlanMid from '../components/plan/PlanMid'
import PlanBottom from '../components/plan/PlanBottom'

const Plan = () => {
  const [dayNum, setDayNum] = useState();

  // 지도 받아오기
  const getMap = () => {

  }

  return (
    <>
      <TopNav />

      <PlanTop />
      <PlanMid />
      <PlanBottom />
      
      <BottomNav page={'plan'} />
    </>
  )
}

export default Plan
