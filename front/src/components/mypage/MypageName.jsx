import React from 'react'
import styled from "styled-components"

const ProfileName = styled.div`
  position: absolute;

  font-weight: 600;
  cursor: pointer;

  top: 30%;
  left: 50%;
  transform: translate(-50%, -30%);

`;

const MypageName = () => {
  return (
    <div>
      <ProfileName>MypageName</ProfileName>
      </div>
  )
}

export default MypageName