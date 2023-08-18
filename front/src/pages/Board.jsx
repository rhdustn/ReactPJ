import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { BoardTitle, BoardSubTitle,BoardList } from '../components/board'
import BottomNav from '../components/nav/BottomNav';
const BoardMain =styled.div`
width: 400px;
height: 800px;

`

const Board = () => {

    return (
        <div>
            <BoardMain>
            <BoardTitle />
            <BoardSubTitle />
            <BoardList/>
            <BottomNav/>
            </BoardMain>
        </div>
    )
}

export default Board