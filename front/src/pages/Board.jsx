import React, { useEffect } from 'react'
import styled from 'styled-components';
import { BoardTitle, BoardSubTitle,BoardList } from '../components/board'

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
            </BoardMain>
        </div>
    )
}

export default Board