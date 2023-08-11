import React from 'react'
import { TextBox } from './board.styled';
import BoardTextDetail from './BoardTextDetail';

const BoardText = () => {
  return (
    <div>
        <TextBox>
          <BoardTextDetail/>
        </TextBox>
    </div>
  )
}

export default BoardText