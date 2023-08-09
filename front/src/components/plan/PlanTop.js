import React from 'react'
import { PlanTopBox, Title, Date, Selected } from './Plan.styled'

const PlanTop = () => {
    // main 페이지에서 입력한 정보
    let location = '후쿠오카';
    let date = '2023.08.28 ~ 2023.08.31';
    let who = ['혼자', '반려동물과'];
    let which = ['체험·액티비티', 'SNS 핫플레이스'];
    // gpt에서 받아올 정보
    


  return (
    <>
      <PlanTopBox>
        <Title>{location} 여행</Title>
        <Date>{date}</Date>
        <Selected>
            {who.map((value, index) => {
                return `${value} `
            })}
        </Selected>
        <Selected>
            {which.map((value, index) => {
                return `${value} `
            })}
        </Selected>
      </PlanTopBox>
    </>
  )
}

export default PlanTop
