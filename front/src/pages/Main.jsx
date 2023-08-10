import React, { useEffect, useState } from 'react'
import 'animate.css'

import BottomNav from '../components/nav/BottomNav'

import MainTop from '../components/main/MainTop'
import MainMid from '../components/main/MainMid'
import MainBottom from '../components/main/MainBottom'
import { Loading1 } from '../components/loading/Loading'


const Main = () => {
    // gpt에 요청할 content
    const [content, setContent] = useState('');

    const [isSearched, setSearch] = useState(false);
    const [isDated, setDate] = useState(false);
    const [isChoiced, setChoice] = useState(false);

    const locationSearched = (location) => {
        console.log(location);

        if(location == undefined) {
            return;
        }else {
            // 지역이 제대로 검색 되었을 시
            setSearch(true)
        }
    }

    const dateSelected = (startDate, endDate) => {
        console.log(startDate, endDate);
        setDate(true);
    }

    const choiceSelected = (choiceIndex1, choiceIndex2) => {
        console.log(choiceIndex1)
        console.log(choiceIndex2)
        setChoice(true);
    }


    return (
        <>
        <MainTop locationSearched={locationSearched} />
        {isSearched && <MainMid dateSelected={dateSelected} />}
        {isDated && <MainBottom page={'main'} choiceSelected={choiceSelected} />}
        {isChoiced && <Loading1 />}

        <BottomNav page={'main'} />
        </>
    )
}



export default Main
