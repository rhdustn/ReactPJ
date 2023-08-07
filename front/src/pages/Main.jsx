import React, { useState } from 'react'
import styled, {keyframes} from 'styled-components'
import 'animate.css'

import BottomNav from '../components/nav/BottomNav'

import MainTop from '../components/main/MainTop'
import MainMid from '../components/main/MainMid'
import MainBottom from '../components/main/MainBottom'


// fadeIn
const FadeInAni = keyframes`
    from {
        opacity: 0;
    }to {
        opacity: 1;
    }
`
const FadeInMainMid = styled(MainMid)`
    animation: ${FadeInAni} 15s ease-in-out;
`

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


    return (
        <>
        <MainTop locationSearched={locationSearched} />
        {isSearched && <MainMid dateSelected={dateSelected} />}
        {isDated && <MainBottom page={'main'} />}

        <BottomNav />
        </>
    )
}

export default Main
