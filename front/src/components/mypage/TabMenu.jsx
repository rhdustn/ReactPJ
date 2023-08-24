import React, { useEffect, useState } from 'react';
import axios from 'axios'

import { TabMain,TabButton,TabsContainer,Content, ContentOne } from './mypage.styled';
import { useQuery } from 'react-query';

import { ipUrl } from '../../util/util';


const TapMenu = ({user}) => {
  const [tab, setTab] = useState(0);
  const [tabArr, setTabArr] = useState([
    { name: "My Trip", content: [
      {
        id : 1,
        location : '일본',
        duration : '2023.08.02 ~ 2023.08.05',
        option1 : ['혼자서'],
        option2 : ['체험']
      },
      {
        id : 2,
        location : '미국',
        duration : '2023.08.05 ~ 2023.08.19',
        option1 : ['혼자서'],
        option2 : ['체험']
      },
    ] },
    { name: "Review", content: [
      {
        id : 1,
        title : '어쩌고',
        location : '일본',
        duration : '2023.08.02 ~ 2023.08.05',
        date : '작성날짜'
      }
    ] },
    { name: "Comments", content: [] },
    { name: "Alarm", content: [] }
  ])

  const selectMenuHandler = (index) => {
    setTab(index);
  };

  // 유저가 만든 일정 가져오기
  const tryGetAll = async () => {
    try {
      const response1 = await ipUrl.get(`/mypage/getPlan`)
      const response2 = await ipUrl.get(`/mypage/getReview`)
      const response3 = await ipUrl.get(`/mypage/getComment`)
      const response4 = await ipUrl.get(`/mypage/getNotice`)
      const data1 = response1.data;
      const data2 = response2.data;
      const data3 = response3.data;
      const data4 = response4.data;
      return {data1, data2, data3, data4};

    } catch (error) {
      console.log(error);
    }
  }

  // const {data1, data2, data3, data4, isLoading} = useQuery(['getAll'], tryGetAll)

  // useEffect(() => {
  //   if(!isLoading) {
  //     setTabArr()
  //   }
  // }, [isLoading])

  useEffect(() => {
    console.log(tabArr)
  }, [tabArr])

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
              return (
                <ContentOne>
                  <div className='index'>{index+1}</div>
                  <div className='location'>{value.location}</div>
                  <div className='duration'>{value.duration}</div>
                </ContentOne>
              )
            }else if(tab == 1) {
              return (
                <ContentOne>
                  <div className='index'>{index+1}</div>
                  <div className='location'>{value.location}</div>
                  <div className='duration'>{value.duration}</div>
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