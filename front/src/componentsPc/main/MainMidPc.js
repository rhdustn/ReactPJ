import React, { useEffect, useState } from 'react'
import 'animate.css'

import { MainMidBox, BigLabel, DateBoxWrap, DateBox } from './MainPc.styled'

const MainMidPc = ({dateSelected}) => {
    const [startDate, setStart] = useState('');
    const [endDate, setEnd] = useState('');

    const today = new Date().toISOString().split('T')[0];

    const handleStarteDate = (e) => {
        setStart(e.target.value);
        setEnd('')
    }

    const handleEndDate = (e) => {
        setEnd(e.target.value);
    }

    useEffect(() => {
        if(startDate != '' && endDate != '') {
            dateSelected(startDate, endDate)
        }
    }, [endDate])

  return (
    <>
    <MainMidBox>
        <BigLabel>언제 떠나시나요?</BigLabel>
        <DateBoxWrap>
            <DateBox>
                <input type='date' value={startDate} min={today} onChange={handleStarteDate}></input>
            </DateBox>
            ~
            <DateBox>
                <input type='date' value={endDate} min={startDate} onChange={handleEndDate}></input>
            </DateBox>
        </DateBoxWrap>
    </MainMidBox>
    </>
  )
}

export default MainMidPc
