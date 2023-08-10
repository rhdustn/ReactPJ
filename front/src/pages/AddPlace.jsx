import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import TopNav from '../components/nav/TopNav'
import AddPlaceTop from '../components/place/AddPlaceTop'
import AddPlaceMid from '../components/place/AddPlaceMid'
import AddPlaceBottom from '../components/place/AddPlaceBottom'

const AddPlace = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const day = queryParams.get('day');

    const [choiceIndex, setChoice] = useState('');
    const [show, setShow] = useState(false);

    // gpt 추천 관광지
    let suggested = ['나카스', '오호리 공원', '덴진 지하상가', '하카타 역']

    useEffect(() => {
        console.log(choiceIndex)
        if(choiceIndex.length > 0) {
            setShow(true)
        }else {
            setShow(false);
        }
    }, [choiceIndex])

    return (
        <>
        <TopNav isScrolled={true} />

        <AddPlaceMid page={'add'} day={day} placeArr={suggested} choiceIndex={choiceIndex} setChoice={setChoice} />
        {show && <AddPlaceBottom suggested={suggested} choiceIndex={choiceIndex} />}
        </>
    )
}

export default AddPlace
