import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { Main, ImgBox, ShowImg, ProflieImg, TextBox, SmallText, SubTitle } from './board.styled';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';

const BoardList = ({ id }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  // const [title,setTitle]=useState([])
  // const [nickname,setNickname]=useState("")
  // const [images,setImages]=useState([])
  const imgPath = '/imgs/userplanimg'
  const list = async () => {
    try {
      const response = await axios.get(
        "/post/allboard"
      )
      const data = response.data
      // if (response.data && response.data.title) {
      //   setTitle(response.data[0].title);
      // }
      // if (response.data && response.data.images && response.data.images.length > 0) {
      //   setImages(response.data[0].images);
      // }
      // if (response.data && response.data.nickname) {
      //   setNickname(response.data[0].nickname);
      // }

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
  }, [])

  const handleReviewClick = () => {
    navigate('/boarddetail')
  }

  // const {data, isLoading} = useQuery(['testdata'], list);

  // if (isLoading) {
  //   return <>로딩중</>
  // }

  // data 배열(요소 : 객체) 반복문 돌려서 반환
  return (
    <div>
      {data ? data.map((value, index) => {
        const thumbNail = JSON.parse(value.images)[0]
        console.log(imgPath + "/" + thumbNail)
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