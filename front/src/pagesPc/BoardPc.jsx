import React, { useEffect } from 'react'
import styled from 'styled-components';
import { BoardTitlePc, BoardSubTitlePc,BoardListPc } from '../componentsPc/board'

const BoardMain =styled.div`
width: 400px;
height: 800px;

`

const BoardPc = () => {
    return (
        <div>
            <BoardMain>
            <BoardTitlePc />
            <BoardSubTitlePc />
            <BoardListPc/>
            </BoardMain>
        </div>
    )
}

export default BoardPc