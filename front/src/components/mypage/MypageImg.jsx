import React from 'react'
import styled from "styled-components"

const ProflieImg = styled.div`
width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #ffd8de;
  position: absolute;  
  left: 50%;
  top: 15%;
  transform: translate(-50%, -15%);
  
  `



const MypageImg = () => {
  return (
    <div>
      <ProflieImg></ProflieImg>
      </div>
  )
}

export default MypageImg