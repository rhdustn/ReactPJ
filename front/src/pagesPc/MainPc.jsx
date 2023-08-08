import React, { useState } from 'react'
import styled, {keyframes} from 'styled-components'
import 'animate.css'

import BottomNavPc from '../componentsPc/nav/BottomNavPc'

import MainTopPc from '../componentsPc/main/MainTopPc'
import MainMidPc from '../componentsPc/main/MainMidPc'
import MainBottomPc from '../componentsPc/main/MainBottomPc'


// fadeIn
const FadeInAni = keyframes`
    from {
        opacity: 0;
    }to {
        opacity: 1;
    }
`
const FadeInMainMid = styled(MainMidPc)`
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
        <MainTopPc locationSearched={locationSearched} />
        {isSearched && <MainMidPc dateSelected={dateSelected} />}
        {isDated && <MainBottomPc page={'main'} />}

        <BottomNavPc />
        </>
    )
}

export default Main
