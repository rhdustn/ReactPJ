import React,{ useEffect, useState } from 'react'
import { useQuery } from 'react-query';
import axios from 'axios'

import { EditBtn,EditImg,EditName,ArrowBtn,EditText } from '../components/mypage'
import styled from 'styled-components';
import TopNav from '../components/nav/TopNav';
import { useSelector } from 'react-redux';
import { ProfileName } from '../components/mypage/mypage.styled';

const EditProflie = () => {
  const Main = styled.div`
    width: 400px;
    height: 800px;
    position: relative;
    left: 50%;
    transform: translate(-50%);
  `
  const [load, setLoad] = useState(false)
  const [profileBtnChange, setProfileBtnChange] = useState(false);
  const [profileName, setProfileName] = useState("");
  const [profileImg, setProfileImg] = useState();

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
  const {data, isLoading} = useQuery(['getUser'], tryGetUserInfo, {
    enabled : load
  })

  useEffect(() => {
    if(!isLoading) {
      setProfileName(data.nickname)
      setProfileImg(data.profile_img)
    }
  }, [isLoading])

  const trySaveUserInfo = () => {
    try {
      console.log('수정 저장')
      console.log(profileName)
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <TopNav />

       <Main>
        {!isLoading &&
          <>
          <EditImg profileImg={profileImg} setProfileImg={setProfileImg} />
          <EditName profileName={profileName} setProfileName={setProfileName} setProfileBtnChange={setProfileBtnChange}/>
          <EditBtn change={profileBtnChange} trySaveUserInfo={trySaveUserInfo} />
          <EditText/>
          </>        
        }
      </Main>
        
    </div>
  )
}

export default EditProflie