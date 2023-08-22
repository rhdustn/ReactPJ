import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import TopNav from '../componentsPc/nav/TopNavPc'
import AddPlaceTop from '../componentsPc/place/AddPlaceTopPc'
import AddPlaceMid from '../componentsPc/place/AddPlaceMidPc'
import AddPlaceBottom from '../componentsPc/place/AddPlaceBottomPc'

const AddPlacePc = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const day = queryParams.get('day');

    const [choiceIndex, setChoice] = useState('');
    const [show, setShow] = useState(false);

    // gpt 추천 관광지
    let suggested = ['나카스', '오호리 공원', '덴진 지하상가', '하카타 역']

    useEffect(() => {
        if(choiceIndex.length > 0) {
            setShow(true)
        }else {
            setShow(false);
        }
    }, [choiceIndex])

    return (
        <>
        <TopNav isScrolled={true} />

        <AddPlaceMid page={'add'} day={day} suggested={suggested} choiceIndex={choiceIndex} setChoice={setChoice} />
        {show && <AddPlaceBottom choiceIndex={choiceIndex} />}
        </>
    )
}

export default AddPlacePc
