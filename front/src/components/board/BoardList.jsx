import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Main, ImgBox, ShowImg, ProflieImg, TextBox, SmallText, SubTitle } from './board.styled';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { ipUrl } from '../../util/util';


const BoardList = ({ id }) => {
  const navigate = useNavigate()

  const imgPath = '/imgs/userplanimg'
  const list = async () => {
    try {
      const response = await ipUrl.get(
        "/post/allboard"
      )
      const data = response.data
        console.log("333333333333333",data)
        console.log(data.nickname)
      return data;
    } catch (error) {
      console.log(error)
    }
  }
  const { data, isLoading } = useQuery(['testdata'], list);


  useEffect(() => {
    console.log("jj")
    // list()
    console.log(data)
  }, [data])

// 이 글을 누룬 순간 redux로 저장
  return (
    <div>
      {data ? data.map((value, index) => {
        console.log("여기 보드 리스트 페이지임",value)
        const thumbNail = JSON.parse(value.images)[0]
        console.log(imgPath + "/" + thumbNail)

        const handleReviewClick = () => {
          navigate(`/boarddetail/${value.id}`);
        }
        return (<>
          <Main onClick={handleReviewClick}>
            <ImgBox>
              <ShowImg src={imgPath + "/" + thumbNail} alt="" />
            </ImgBox>
            <ProflieImg src={imgPath + "/" +value.User}/>
            <TextBox>
              <div>
                <SmallText>
                  {/* <span>{nickname}</span>님의 일정 */}
                  <span>{value.nickname}</span>님의 일정
                </SmallText>

              </div>
              <SubTitle>
                {value.title}
              </SubTitle>
            </TextBox>
          </Main>

        </>)

      }) : <>데이터 받아오는 중</>}

    </div>
  )
}

export default BoardList