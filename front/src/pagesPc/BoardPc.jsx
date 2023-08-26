import React, { useEffect } from 'react'
import styled from 'styled-components';
import { BoardTitlePc, BoardSubTitlePc,BoardListPc } from '../componentsPc/board'
import BottomNavPc from "../componentsPc/nav/BottomNavPc";
import { useNavigate, Link } from 'react-router-dom';


const BoardMain =styled.div`
width: 100%;
height: 800px;
/* background-color: beige; */

& button{
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    border: 0px;
    padding: 10px;
}
& button:hover{
    background-color: aliceblue;
}

`


const BoardPc = () => {
    const nav = useNavigate();
    return (
        <div>
            
            <BoardMain>
                <BoardTitlePc />
                <Link to={"/boardCreate"}><button>글 작성하기</button></Link>

                <BoardSubTitlePc />
                <BoardListPc/>

                
            </BoardMain>

            
            
            <BottomNavPc /> 
            {/* 추가함 */}

        </div>
    )
}

export default BoardPc