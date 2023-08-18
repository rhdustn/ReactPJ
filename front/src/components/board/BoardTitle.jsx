import React from 'react'
import { useNavigate } from 'react-router'
import { Container,MovePost } from './board.styled'

const BoardTitle = () => {
  const navigate = useNavigate()

    const movePostClick = () => {
        navigate('/boardCreate'); 
      };

  return (
    <div>
        <Container>
        <h3>해외 실시간 여행기 🧭</h3>
        <MovePost onClick={movePostClick}>글 작성하기</MovePost>
        </Container>
    </div>
  )
}

export default BoardTitle