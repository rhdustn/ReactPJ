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
  const data = [
    [{
      BoardTitle: "게시판 제목 1",
      UploadUserNickname: "닉네임 1",
    },
    {
      BoardTitle: "게시판 제목 2",
      UploadUserNickname: "닉네임 2",
    }],
    [{
      BoardTitle: "게시판 제목 3",
      UploadUserNickname: "닉네임 3",
    },
    {
      BoardTitle: "게시판 제목 4",
      UploadUserNickname: "닉네임 4",
    }]
  ];
  return (
    <>
      <Div_one>

      {/* 갯수 나눠서 배열을 쪼개놓고 */}
      {/* [1,2,3,4]  => [[1,2],[3,4]]*/}
      {/* Div_two */}

      {data.map((item, index)=>{
        return(
          <Div_two key={index}>
          {item.map((item2, index2)=>(
                <Main key={index2}>
                {/* 이미지 */}
                <BoardPreviewImg/>

                {/* 프로필이미지 */}
                <BoardProflieImg UserProfileImg = {""}/>

                {/* 제목+내용 */}
                <BoardText BoardTitle={item2.BoardTitle} UploadUserNickname={item2.UploadUserNickname} />
                </Main>
          ))}
          </Div_two>
        )
      })}

        <br /><br /><br />
        
      </Div_one>
    </>
  )
}

export default BoardListPc