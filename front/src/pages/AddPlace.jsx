import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import TopNav from '../components/nav/TopNav'
import AddPlaceTop from '../components/place/AddPlaceTop'
import AddPlaceMid from '../components/place/AddPlaceMid'
import AddPlaceBottom from '../components/place/AddPlaceBottom'
import { useSelector } from 'react-redux'

const AddPlace = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const day = queryParams.get('day');

    const [choiceIndex, setChoice] = useState('');
    const [show, setShow] = useState(false);

    // gpt 추천 관광지
    const gptAnswerSaved = useSelector((state) => {return state.gptAnswerSave})
    // let suggested = gptAnswerSaved.attractions
    // let suggested = ['나카스', '오호리 공원', '덴진 지하상가', '하카타 역', '유후인', '어쩌고', '저쩌고', '1', '2', '3', '4', '5', '6', '7']

    useEffect(() => {
        console.log(gptAnswerSaved.attractions)
    }, [])

    useEffect(() => {
        if(choiceIndex.length > 0) {
            setShow(true)
        }else {
            setShow(false);
        }
    }, [choiceIndex])

    // 선택 완료
    const tryComplete = () => {
        console.log(choiceIndex)
    }

    return (
        <>
        <TopNav isScrolled={true} />

        <AddPlaceMid page={'add'} day={day} suggested={gptAnswerSaved.attractions} choiceIndex={choiceIndex} setChoice={setChoice} />
        {show && <AddPlaceBottom choiceIndex={choiceIndex} tryComplete={tryComplete} />}
        </>
    )
}

export default AddPlace
