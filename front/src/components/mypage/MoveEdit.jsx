import React from 'react'
import { useNavigate } from 'react-router'
import { styled } from 'styled-components'

const EditNavigate = styled.div`
position: absolute;
right: 10%;
top: 5%;
`

const MoveEdit = () => {
    const navigate = useNavigate()

    const moveEditClick = () => {
        navigate('/editproflie'); 
      };
    
  return (
    <div>
        <EditNavigate onClick={moveEditClick}>
            프로필 편집
        </EditNavigate>
    </div>
  )
}
export default MoveEdit