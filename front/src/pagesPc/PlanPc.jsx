import React, { useState } from 'react'
// import BottomNav from '../componentsPc/nav/BottomNav'
import PlanTop from '../componentsPc/plan/PlanTopPc'
// import TopNav from '../componentsPc/nav/TopNav'
import PlanMid from '../componentsPc/plan/PlanMidPc'
import PlanBottom from '../componentsPc/plan/PlanBottomPc'

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
