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

  const {data, isLoading} = useQuery(['getUser'], tryGetUserInfo)

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