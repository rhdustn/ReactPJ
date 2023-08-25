import React, { useEffect } from 'react'
import styled from 'styled-components';
import { BoardTitlePc, BoardSubTitlePc,BoardListPc } from '../componentsPc/board'
import BottomNavPc from "../componentsPc/nav/BottomNavPc";

const BoardMain =styled.div`
width: 100%;
height: 800px;
/* background-color: beige; */
`



const BoardPc = () => {
    return (
        <div>
            <BoardMain>
                <BoardTitlePc />

                <BoardSubTitlePc />
                <BoardListPc/>

                {/* 반복 */}
                {/* <Div_two>
                    <BoardListPc/>
                    <BoardListPc/>
                </Div_two> */}
                {/* <br /><br /><br /> */}

                
            </BoardMain>
            
            <BottomNavPc /> 
            {/* 추가함 */}

        </div>
    )
}

export default BoardPc