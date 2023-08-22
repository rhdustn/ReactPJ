import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Main, ImgBox, ShowImg, ProflieImg, TextBox, SmallText, SubTitle } from './board.styled';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';

const BoardList = ({ id }) => {
  const navigate = useNavigate()
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

// 이 글을 누룬 순간 redux로 저장
  return (
    <div>
      {data ? data.map((value, index) => {
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