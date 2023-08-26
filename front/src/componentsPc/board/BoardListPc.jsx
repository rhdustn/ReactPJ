import React, { useEffect, useState } from 'react'
import BoardPreviewImg from './BoardPreviewImgPc'
import BoardText from './BoardTextPc';
import BoardProflieImg from './BoardProflieImgPc';
import { Main } from './boardPc.styled';
import { styled } from 'styled-components';
import axios from "axios";
import { ipUrl } from '../../util/util';

const Div_one = styled.div`
width: 100%;
height: 800px;
/* background-color: beige; */
`

const TransparentBackground = styled.div`
  background-color: blue;
  /* 다른 스타일 속성들을 여기에 추가할 수 있습니다. */
`;

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
  const [tda, Settda] = useState([]);
  // let tda = [];
  useEffect(()=>{
    const boardData = async ()=>{
      try {
        const data = await ipUrl.get("/board/boardlist");
        // console.log("데이터: ", data.data);
        const boardlistdata = data.data;
        const list_length = boardlistdata.length;
        console.log(boardlistdata);
        // console.log(list_length);
        let arr_count = 0;
        let newArray = [];

        for(let i=0; i<list_length;i+=2){
          newArray[arr_count] = [];
          newArray[arr_count][0] = boardlistdata[i];
          newArray[arr_count][1] = boardlistdata[i+1];
          arr_count++;
        }
        console.log("what: ", newArray);
        Settda(newArray);

      } catch (error) {
        console.log(error);
      }
    }
    boardData();
  },[]);

  useEffect(()=>{
    console.log("뜸?",tda);
  }, [tda]);

  // const data = [
  //   [{
  //     BoardTitle: "게시판 제목 1",
  //     UploadUserNickname: "닉네임 1",
  //   },
  //   {
  //     BoardTitle: "게시판 제목 2",
  //     UploadUserNickname: "닉네임 2",
  //   }],
  //   [{
  //     BoardTitle: "게시판 제목 3",
  //     UploadUserNickname: "닉네임 3",
  //   },
  //   {
  //     BoardTitle: "게시판 제목 4",
  //     UploadUserNickname: "닉네임 4",
  //   }]
  // ];

  return (
    <>
      <Div_one>

      {/* 갯수 나눠서 배열을 쪼개놓고 */}
      {/* [1,2,3,4]  => [[1,2],[3,4]]*/}
      {/* Div_two */}

      {tda.map((item, index)=>{
        return(
          <Div_two key={index}>
          {item.map((item2, index2)=>(
                <Main key={index2}>
                {/* 이미지 */}
                {item2 && item2.title !== undefined ? (
                  <>
                    <BoardPreviewImg UserUploadImg= {item2?.images} />
    
                    {/* 프로필이미지 */}
                    <BoardProflieImg />
    
                    {/* 제목+내용 */}
                    <BoardText BoardTitle={item2?.title && item2?.title} UploadUserNickname={item2?.nickname && item2?.nickname} />
                  </>

                ) : (
                  <>
                  <BoardPreviewImg  />
  
                  {/* 프로필이미지 */}
                  <BoardProflieImg  />

                  {/* 제목+내용 */}
                  <BoardText  />
                  </>
                )}
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