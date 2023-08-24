import React, { useEffect, useState } from 'react'
import { MypageImg, TapMenu, MypageName, MoveEdit } from '../components/mypage'
import styled from 'styled-components';
import BottomNav from '../components/nav/BottomNav';
import { useQuery } from 'react-query';
import axios from 'axios';

const Main = styled.div`
  width: 400px;
  height: 100vh;
  position: relative;
  left: 50%;
  transform: translate(-50%);
`


const Mypage = () => {

  const [load, setLoad] = useState(false)

  // 로그인 유저 정보 가져오기
  const tryGetUserInfo = async () => {
    try {
      const response = await axios.get(`/mypage/getInfo`)
      const data = response.data;
      console.log(data);
      return data;
    }catch (error) {
      console.log(error)
    }
  }

  const {data, isLoading} = useQuery(['getUserMypage'], tryGetUserInfo, {
    enabled : load
  })

  useEffect(() => {
    if(!isLoading) {
      console.log(data)
    }
  }, [isLoading])

  return (
    <div>
      {!isLoading &&
      <>
        <Main>
          <MoveEdit />
          <MypageImg profile_img={data.profile_img} />
          <MypageName nickname={data.nickname} />
          <TapMenu user={data} />
        </Main>

        <BottomNav/>
      </>      
      }
    </div>
  )
}

export default Mypage