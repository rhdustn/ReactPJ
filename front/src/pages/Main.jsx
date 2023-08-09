import React, { useEffect, useState } from 'react'
import 'animate.css'

import BottomNav from '../components/nav/BottomNav'

import MainTop from '../components/main/MainTop'
import MainMid from '../components/main/MainMid'
import MainBottom from '../components/main/MainBottom'


const Main = () => {
    const [isSearched, setSearch] = useState(false);
    const [isDated, setDate] = useState(false);

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

    useEffect(() => {
        if(isSearched) {
            // showDate();
        }
    }, [isSearched])


    return (
        <>
        <MainTop locationSearched={locationSearched} />
        {isSearched && <MainMid dateSelected={dateSelected} />}
        {isDated && <MainBottom page={'main'} />}

        <BottomNav page={'main'} />
        </>
    )
}



export default Main
