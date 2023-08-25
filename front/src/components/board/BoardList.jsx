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
      return data;
    } catch (error) {
      console.log(error)
    }
  }
  const { data, isLoading } = useQuery(['testdata'], list);



// 이 글을 누룬 순간 redux로 저장
  return (
    <div>
      {data ? data.map((value, index) => {
        const thumbNail = JSON.parse(value.images)[0]
        const handleReviewClick = () => {
          navigate(`/boarddetail/${value.id}`);
        }
        return (<>
          <Main onClick={handleReviewClick}>
            <ImgBox>
              <ShowImg src={imgPath + "/" + thumbNail} alt="" />
            </ImgBox>
            <ProflieImg />
            <TextBox>
              <div>
                <SmallText>
                  {/* <span>{nickname}</span>님의 일정 */}
                  <span>{value.nickname}</span>님의 일정
                  ●3박4일
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