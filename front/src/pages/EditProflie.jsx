import React,{ useEffect, useState } from 'react'
import { useQuery } from 'react-query';
import axios from 'axios'

import { EditBtn,EditImg,EditName,ArrowBtn,EditText } from '../components/mypage'
import styled from 'styled-components';
import TopNav from '../components/nav/TopNav';
import { useSelector } from 'react-redux';
import { ProfileName } from '../components/mypage/mypage.styled';
import { ipUrl } from '../util/util';


const EditProflie = () => {
  const Main = styled.div`
    width: 400px;
    height: 800px;
    position: relative;
    left: 50%;
    transform: translate(-50%);
  `
  const [load, setLoad] = useState(true)
  const [profileBtnChange, setProfileBtnChange] = useState(false);

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
  const {data, isLoading} = useQuery(['getUser'], tryGetUserInfo, {
    enabled : load
  })

  const trySaveUserInfo = () => {
    try {
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if(isLoading == false) {
      setLoad(false)
    }
  }, [])

  return (
    <div>
      <TopNav />

       <Main>
        {!isLoading &&
          <>
          <EditImg setProfileBtnChange={setProfileBtnChange} />
          <EditName profileName={data.nickname} setProfileBtnChange={setProfileBtnChange}/>
          <EditBtn change={profileBtnChange} trySaveUserInfo={trySaveUserInfo} />
          <EditText/>
          </>        
        }
      </Main>
        
    </div>
  )
}

export default EditProflie