import React, { useEffect, useState } from 'react';
import axios from 'axios'

import { TabMain,TabButton,TabsContainer,Content, ContentOne, Coming } from './mypage.styled';
import { useMutation, useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { getSaved } from '../../redux/features/getSavedPlan';


const TapMenu = ({user}) => {
  const nav = useNavigate();
  const dispatch = useDispatch();

  const [load, setLoad] = useState(true)

  const [tab, setTab] = useState(0);
  const [tabArr, setTabArr] = useState([
    { name: "내 여행", content: [] },
    { name: "리뷰", content: [] },
    { name: "댓글", content: [] },
    { name: "알림", content: [] }
  ])

  const selectMenuHandler = (index) => {
    setTab(index);
  };

  // 유저가 만든 일정 가져오기
  const tryGetAll = async () => {
    console.log('머지')
    try {
      const response1 = await axios.get(`/mypage/getPlan`)
      const response2 = await axios.get(`/mypage/getReview`)
      // const response3 = await axios.get(`/mypage/getComment`)
      // const response4 = await axios.get(`/mypage/getNotice`)
      const data1 = response1.data;
      const data2 = response2.data;
      // const data3 = response3.data;
      // const data4 = response4.data;
      return {data1, data2};

    } catch (error) {
      console.log(error);
    }
  }

  const {data, isLoading} = useQuery(['getAll'], tryGetAll)

  useEffect(() => {
    if(isLoading == false) {
      console.log(isLoading)
      // console.log(data)
      // setLoad(false)
      setTabArr((tabArr => tabArr.map((tab, index) => {
        if(index == 0){
          return {...tab, content: data.data1}
        }else if(index == 1) {
          return {...tab, content: data.data2}
        }else if(index == 2) {
          return {...tab, content: []}
        }else if(index == 3) {
          return {...tab, content: []}
        }
      })))
    }
  }, [isLoading])

  useEffect(() => {
    console.log(tabArr)
  }, [tabArr])


  // plan 페이지로 이동
  const moveToPlan = async (id) => {
    try {
      axios.post('/plan/getPlan', {id})
      .then((res) => {
        const response = res.data;
        console.log(response);
        dispatch(getSaved(response))
        nav('/editPlan')
      })
      .catch((err) => {
        console.log(err)
      })

    } catch (error) {
      console.log(error);
    }
  }

  const getPlan = useMutation(moveToPlan);

  return (
    <div>
      <TabMain>
        <TabsContainer>
          {tabArr.map((tabItem, index) => (
            <TabButton
              key={index}
              onClick={() => selectMenuHandler(index)}
              active={index === tab}
            >
              {tabItem.name}
            </TabButton>
          ))}
        </TabsContainer>

        <Content>
          {tabArr[tab].content.map((value, index) => {
            if(tab == 0) {
              let isComing;
              let lineCol;
              const dateString = value.duration;
              const [startDate, endDate] = dateString.split("~").map(date => new Date(date));
              const today = new Date();
              if(today < startDate) {
                isComing = '여행 시작 전'
                lineCol = '1px solid red'
              }else if(today >= startDate && today <= endDate) {
                isComing = '여행 중'
                lineCol = '1px solid #277bc0'
              }else {
                isComing = '여행 끝'
                lineCol = '1px solid silver'
              }

              return (
                <ContentOne onClick={() => {getPlan.mutate(value.id)}}>
                  <div className='index'>{index+1}</div>
                  <div className='location'>{value.plan} 여행</div>
                  <div className='duration'>{value.duration}</div>
                  <div className='imgs'>
                    <Coming line={lineCol}>{isComing}</Coming>
                  </div>
                </ContentOne>
              )
            }else if(tab == 1) {
              let firstImg = JSON.parse(value.images);
              return (
                <ContentOne onClick={() => {nav(`/boarddetail/${value.id}`)}}>
                  <div className='index'>{index+1}</div>
                  <div className='location'>{value.title}</div>
                  <div className='duration'>{value.detail}</div>
                  <div className='imgs'>
                    <img src={`/imgs/userplanimg/${firstImg[0]}`}></img>
                  </div>
                </ContentOne>
              )
            }else if(tab == 2) {
              return (
                <>댓글</>
              )
            }else {
              return (
                <>알람</>
              )
            }
          })}
        </Content>
      </TabMain>
    </div>
  );
}

export default TapMenu;