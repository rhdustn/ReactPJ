import React, { useEffect, useState } from "react";
import { useQuery } from 'react-query';
import { ipUrl } from '../util/util';

import {
  MypageImgPc,
  TapMenuPc,
  MypageNamePc,
  MoveEditPc,
} from "../componentsPc/mypage";
import BottomNavPc from "../componentsPc/nav/BottomNavPc";
import { MypagePcBox } from "../componentsPc/mypage/MyPagePc.styled";

const Mypage = () => {

  // 로그인 유저 정보 가져오기
  const tryGetUserInfo = async () => {
    try {
      const response = await ipUrl.get(`/mypage/getInfo`)
      const data = response.data;
      console.log(data);
      return data;
    }catch (error) {
      console.log(error)
    }
  }

  const {data, isLoading} = useQuery(['getUserMypage'], tryGetUserInfo)

  return (
    <>
    <MypagePcBox>

        <MoveEditPc />

        {!isLoading &&
        <>
        <MypageImgPc profile_img={data.profile_img} />
        <MypageNamePc nickname={data.nickname} />
        </>
        }

        <TapMenuPc user={data} />


      <BottomNavPc />
    </MypagePcBox>
    </>
  );
};

export default Mypage;
