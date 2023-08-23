import React,{ useEffect, useState } from 'react'
import { useQuery } from 'react-query';
import axios from 'axios'

import { EditBtn,EditImg,EditName,ArrowBtn,EditText } from '../components/mypage'
import styled from 'styled-components';
import TopNav from '../components/nav/TopNav';
import { useSelector } from 'react-redux';

const EditProflie = () => {
  const Main = styled.div`
    width: 400px;
    height: 800px;
    position: relative;
    left: 50%;
    transform: translate(-50%);
  `

  const [profileBtnChange, setProfileBtnChange] = useState(false);
  const [profileName, setProfileName] = useState("");

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

  const userOrGuest = useSelector((state) => {
    return state.userOrGuest
  })

  useEffect(() => {
    console.log(data)
    console.log(userOrGuest)
  }, [])

  return (
    <div>
      <TopNav />

       <Main>
        <EditImg/>
        <EditName setProfileBtnChange={setProfileBtnChange}/>
        <EditBtn change={profileBtnChange}/>
        <EditText/>
        </Main>
        
    </div>
  )
}

export default EditProflie