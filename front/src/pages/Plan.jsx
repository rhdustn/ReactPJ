import React, { useState, useEffect } from 'react'

import BottomNav from '../components/nav/BottomNav'
import TopNav from '../components/nav/TopNav'

import PlanTop from '../components/plan/PlanTop'
import PlanMid from '../components/plan/PlanMid'
import PlanBottom from '../components/plan/PlanBottom'

const Plan = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollThreshold = 80;
      
      if (scrollY > scrollThreshold) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <TopNav isScrolled={isScrolled} />

      <PlanTop />
      <PlanMid />
      <PlanBottom />
      
      <BottomNav page={'plan'} />
    </>
  )
}

export default Plan
