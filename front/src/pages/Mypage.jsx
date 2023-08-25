import React, { useEffect, useState } from 'react'
import { MypageImg, TapMenu, MypageName, MoveEdit } from '../components/mypage'
import styled from 'styled-components';
import BottomNav from '../components/nav/BottomNav';
import { useQuery } from 'react-query';
import axios from 'axios';
import { ipUrl } from '../util/util';


const Main = styled.div`
  width: 400px;
  height: 100vh;
  position: relative;
  left: 50%;
  transform: translate(-50%);
`


const Mypage = () => {

  // 로그인 유저 정보 가져오기
  const tryGetUserInfo = async () => {
    try {
      const response = await ipUrl.get(`/mypage/getInfo`)
      const data = response.data;
      return data;
    }catch (error) {
      console.log(error)
    }
  }

  const {data, isLoading} = useQuery(['getUserMypage'], tryGetUserInfo)

  return (
      <>
        <Main>
          <MoveEdit />
          {!isLoading &&
          <>
          <MypageImg profile_img={data.profile_img} />
          <MypageName nickname={data.nickname} />
          </>
          }
          <TapMenu user={data} />
        </Main>

        <BottomNav/>
      </>      
  )
}

export default Mypage