import React from 'react'
import BoardPreviewImg from './BoardPreviewImgPc'
import BoardText from './BoardTextPc';
import BoardProflieImg from './BoardProflieImgPc';
import { Main } from './boardPc.styled';
import { styled } from 'styled-components';

const Div_one = styled.div`
width: 100%;
height: 800px;
/* background-color: beige; */
`

const Div_two = styled.div`
    width: 100%;
    height: 350px;
    /* background-color: yellowgreen; */
    display: flex;
    justify-content: space-evenly;
    align-items: baseline;
`
// let arr = [["newyork1.jpg", "newyork2.jpg"], ["profile.jpg"], ["유저가 입력한 게시판 내용"], ["게시판 제목"]];
// 이미지, 프로필정보, 내용, 제목

const BoardListPc = () => {
  return (
    <>
      <Div_one>
        <Div_two>
          <Main>
            {/* 이미지 */}
            <BoardPreviewImg/>

            {/* 프로필이미지 */}
            <BoardProflieImg UserProfileImg = {""}/>

            {/* 제목+내용 */}
            <BoardText BoardTitle={"게시판 제목"} UploadUserNickname={"닉네임"} />
          </Main>
          
        </Div_two>
        <br /><br /><br />
        
      </Div_one>
    </>
  )
}

export default BoardListPc