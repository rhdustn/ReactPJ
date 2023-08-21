import React from 'react'
import { MypageImg, TapMenu, MypageName, MoveEdit } from '../components/mypage'
import styled from 'styled-components';
import BottomNav from '../components/nav/BottomNav';

const Main = styled.div`
width: 400px;
height: 800px;
position: relative;
left: 50%;
transform: translate(-50%);
`


const Mypage = () => {
  return (
    <div>
      <Main>
        <MoveEdit />
        <MypageImg />
        <MypageName />
        <TapMenu />
      </Main>

      <BottomNav/>


    </div>
  )
}

export default Mypage