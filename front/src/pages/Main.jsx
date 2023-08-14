import React, { useEffect, useState } from 'react'
import { useMutation } from 'react-query'

import BottomNav from '../components/nav/BottomNav'

import MainTop from '../components/main/MainTop'
import MainMid from '../components/main/MainMid'
import MainBottom from '../components/main/MainBottom'
import { Loading1, Loading2 } from '../components/loading/Loading'


const Main = () => {
    // gpt에 요청할 content
    const [content, setContent] = useState({
        location : '',
        startDate : '',
        endDate : '',
        option1 : '',
        option2 : ''
    });

    // 지역 검색
    const [isSearched, setSearch] = useState(false);
    // 날짜 입력
    const [isDated, setDate] = useState(false);
    // 옵션 선택
    const [isChoiced, setChoice] = useState(false);


    // 지역 검색
    const locationSearched = (lo) => {
        if(lo == undefined) {
            return;
        }else {
            // 지역이 제대로 검색 되었을 시 (올바른 지역명인지 한 번 확인?)
            setSearch(true)
            setContent({
                ...content,
                location : lo
            })
        }
    }
    // 날짜 입력
    const dateSelected = (sd, ed) => {
        setDate(true);
        setContent({
            ...content,
            startDate : sd,
            endDate : ed
        })
    }
    // 옵션 선택
    const choiceSelected = (choiceIndex1, choiceIndex2) => {
        setChoice(true);
        setContent({
            ...content,
            option1 : choiceIndex1,
            option2 : choiceIndex2
        })
    }

    useEffect(() => {
        console.log(content);
    }, [isChoiced])





    return (
        <>
        <MainTop locationSearched={locationSearched} />
        {isSearched && <MainMid dateSelected={dateSelected} />}
        {isDated && <MainBottom page={'main'} choiceSelected={choiceSelected} />}
        {isChoiced && <Loading2 />}

        <BottomNav page={'main'} />
        </>
    )
}



export default Main
