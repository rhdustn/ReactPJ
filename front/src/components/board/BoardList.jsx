import React from 'react'
import BoardPreviewImg from './BoardPreviewImg'
import BoardText from './BoardText';
import BoardProflieImg from './BoardProflieImg';
import { Main } from './board.styled';


const BoardList = () => {
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

export default BoardList