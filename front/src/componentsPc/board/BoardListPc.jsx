import React from 'react'
import BoardPreviewImg from './BoardPreviewImgPc'
import BoardText from './BoardTextPc';
import BoardProflieImg from './BoardProflieImgPc';
import { Main } from './boardPc.styled';


const BoardListPc = () => {
  return (
    <div>
        <Main>
        <BoardPreviewImg/>
        <BoardProflieImg/>
        <BoardText/>
        </Main>
    </div>
  )
}

export default BoardListPc