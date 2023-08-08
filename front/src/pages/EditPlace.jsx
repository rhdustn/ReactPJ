import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'


import TopNav from '../components/nav/TopNav'
import AddPlaceMid from '../components/place/AddPlaceMid';
import AddPlaceBottom from '../components/place/AddPlaceBottom';

const EditPlace = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const day = queryParams.get('day');

  const [choiceIndex, setChoice] = useState('');

  // 사용자 선택 관광지
  let selected = ['나카스', '오호리 공원', '덴진 지하상가', '하카타 역']

  return (
    <>
      <TopNav />

      <AddPlaceMid page={'edit'} day={day} placeArr={selected} choiceIndex={choiceIndex} setChoice={setChoice} />
    </>
  )
}

export default EditPlace
