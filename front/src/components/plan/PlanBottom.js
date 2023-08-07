import React from 'react'
import { PlanBottomBox, PerDayBox, PerDayDate, PerDayAttraction, RouteBox, RouteNumber, RoutePlace } from './PlanBottom.styled'

import city from '../../img/places/city.jpeg'

const PlanBottom = () => {
    // 일정 며칠인지
    let periodArr = ['8.28', '8.29', '8.30', '8.31'];
    let placeArr = [
        ['캐널시티', '이치란 본사', '후쿠오카 타워', '시사이드 모모치 해변공원'],
        ['유후인'],
        ['유후인'],
        ['유후인']
    ]

  return (
    <>
      <PlanBottomBox>
        {periodArr.map((value, index) => {
            return <PerDay key={index} period={value} index={index+1} place={placeArr[index]} />
        })}
      </PlanBottomBox>
    </>
  )
}

const PerDay = ({period, index, place}) => {
    console.log(place)
    return (
        <>
            <PerDayBox>
                <PerDayDate>
                    <p><span>day {index}</span>{period}</p>
                </PerDayDate>
                <PerDayAttraction>
                    {place.map((value, index) => {
                        return (
                            <RouteBox>
                                <RouteNumber><div>{index+1}</div></RouteNumber>
                                <RoutePlace>
                                    <div>
                                        {value}
                                        <img src={city}></img>
                                    </div>
                                </RoutePlace>
                            </RouteBox>
                        )
                    })}
                </PerDayAttraction>
            </PerDayBox>
        </>
    )
}

export default PlanBottom
